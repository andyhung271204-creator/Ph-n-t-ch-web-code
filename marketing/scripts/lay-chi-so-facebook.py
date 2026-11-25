"""Lấy chỉ số Page Facebook ra CSV (mở bằng Google Sheets) qua Graph API.
  python marketing/scripts/lay-chi-so-facebook.py [--tu 2026-10-01] [--den 2026-11-24]
Ghi marketing/kpi/trang-theo-ngay.csv và marketing/kpi/bai-viet.csv. Cần FB_PAGE_ID, FB_PAGE_TOKEN
(token cần quyền read_insights). Metric nào Meta báo lỗi thì bỏ qua và in tên. Không bao giờ in token.
Ngày của chỉ số Page theo giờ Pacific (cách Meta tính), không phải giờ Việt Nam.
"""
import csv
import os
import sys
import time
from datetime import date, datetime, timedelta, timezone
from pathlib import Path

import requests

sys.stdout.reconfigure(encoding="utf-8")
sys.stderr.reconfigure(encoding="utf-8")
OUT = Path(__file__).resolve().parent.parent / "kpi"
API = "https://graph.facebook.com/v25.0/"
VN = timezone(timedelta(hours=7))
PAGE_METRICS = ["page_follows", "page_daily_follows_unique", "page_total_media_view_unique",
                "page_media_view", "page_post_engagements"]
POST_METRICS = ["post_media_view", "post_total_media_view_unique", "post_reactions_by_type_total"]

args = sys.argv[1:]
opt = lambda k, d: args[args.index(k) + 1] if k in args else d
tu = date.fromisoformat(opt("--tu", "2026-10-01"))
den = date.fromisoformat(opt("--den", datetime.now(VN).date().isoformat()))
page, token = os.environ.get("FB_PAGE_ID"), os.environ.get("FB_PAGE_TOKEN")
if not (page and token):
    sys.exit("Thiếu biến môi trường FB_PAGE_ID / FB_PAGE_TOKEN — xem docs/specs/dang-bai-facebook-tu-dong.md mục Cài đặt")
if (den - tu).days > 90:
    sys.exit("Khoảng ngày > 90: Meta giới hạn 93 ngày mỗi lần gọi, chia nhỏ ra.")


def get(path, **params):
    for lan in range(3):  # Meta hay trả lỗi tạm (code 2) khi gọi dồn: thử lại tối đa 3 lần
        try:
            d = requests.get(API + path, params={**params, "access_token": token}, timeout=60).json()
        except Exception as e:  # không in e: thông báo lỗi chứa URL có token
            raise RuntimeError(f"lỗi mạng {type(e).__name__}")
        if "error" not in d:
            return d
        if not d["error"].get("is_transient"):
            break
        time.sleep(2 * (lan + 1))
    raise RuntimeError(d["error"].get("message", "lỗi không rõ"))


def insight(obj, metric, **params):
    """Giá trị của 1 metric: [(end_time, value)]."""
    d = get(f"{obj}/insights", metric=metric, **params)
    if not d["data"]:  # thiếu quyền read_insights thì Meta trả rỗng chứ không báo lỗi
        raise RuntimeError("không có dữ liệu (thường do token thiếu quyền read_insights)")
    return [(v.get("end_time", ""), v["value"]) for v in d["data"][0]["values"]]


skipped = []

# A. Chỉ số Page theo ngày
rows = {}
for m in PAGE_METRICS:
    try:
        for end, val in insight(page, m, period="day", since=tu.isoformat(), until=(den + timedelta(days=1)).isoformat()):
            day = (datetime.fromisoformat(end.replace("Z", "+00:00")).date() - timedelta(days=1)).isoformat()
            rows.setdefault(day, {})[m] = val if isinstance(val, (int, float)) else ""
    except RuntimeError as e:
        skipped.append(f"{m} → {e}")

# B. Từng bài đăng
posts = []
url = {"fields": "id,created_time,message,permalink_url,shares",  # reaction/bình luận cần pages_read_user_content
       "since": tu.isoformat(), "until": (den + timedelta(days=1)).isoformat(), "limit": 100}
try:
    d = get(f"{page}/published_posts", **url)  # /posts đòi pages_read_user_content
    while True:
        posts += d["data"]
        nxt = d.get("paging", {}).get("next")
        if not nxt:
            break
        d = requests.get(nxt, timeout=60).json()  # next đã kèm token trong URL, không in ra
except (RuntimeError, requests.RequestException) as e:
    skipped.append(f"posts → {e if isinstance(e, RuntimeError) else type(e).__name__}")

post_rows = []
for p in posts:
    r = {"ngay_dang": datetime.fromisoformat(p["created_time"]).astimezone(VN).strftime("%Y-%m-%d %H:%M"),
         "noi_dung": (p.get("message") or "").replace("\n", " ")[:80], "link": p.get("permalink_url", ""),
         "chia_se": p.get("shares", {}).get("count", 0)}
    for m in POST_METRICS:
        try:
            v = insight(p["id"], m)
            r[m] = (sum(v[0][1].values()) if isinstance(v[0][1], dict) else v[0][1]) if v else ""  # reactions trả dict theo loại
        except RuntimeError as e:
            r[m] = ""
            if not any(s.startswith(m) for s in skipped):
                skipped.append(f"{m} → {e}")
    post_rows.append(r)


def write(name, fields, data):
    OUT.mkdir(exist_ok=True)
    with (OUT / name).open("w", encoding="utf-8-sig", newline="") as f:  # BOM để Sheets/Excel đọc đúng tiếng Việt
        w = csv.DictWriter(f, fieldnames=fields)
        w.writeheader()
        w.writerows(data)


write("trang-theo-ngay.csv", ["ngay"] + PAGE_METRICS, [{"ngay": k, **v} for k, v in sorted(rows.items())])
write("bai-viet.csv", ["ngay_dang", "noi_dung", "link", *POST_METRICS, "chia_se"], post_rows)
print(f"Khoảng ngày: {tu} → {den}\nTrang theo ngày: {len(rows)} ngày → marketing/kpi/trang-theo-ngay.csv\n"
      f"Bài viết: {len(post_rows)} bài → marketing/kpi/bai-viet.csv")
if skipped:
    print(f"BỎ QUA {len(skipped)} metric/nguồn:", *[f"  {s}" for s in skipped], sep="\n")
sys.exit(1 if skipped and not rows and not post_rows else 0)
