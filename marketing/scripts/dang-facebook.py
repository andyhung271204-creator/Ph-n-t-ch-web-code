"""Hẹn giờ bài Facebook trong bai-viet.json lên Page qua Graph API (Meta tự đăng đúng giờ).
  python marketing/scripts/dang-facebook.py marketing/mang-xa-hoi/<tuan>/bai-viet.json          # chạy thử
  python marketing/scripts/dang-facebook.py marketing/mang-xa-hoi/<tuan>/bai-viet.json --that   # hẹn giờ thật
  --gio 11:30 (mặc định). Cần FB_PAGE_ID, FB_PAGE_TOKEN khi --that. Không bao giờ in token.
Bỏ qua bài còn placeholder [..], có ghi_chu, đã có fb_id, hoặc giờ đăng quá gần/đã qua.
"""
import json
import os
import re
import sys
from datetime import datetime, timedelta, timezone
from pathlib import Path

import requests

sys.stdout.reconfigure(encoding="utf-8")
sys.stderr.reconfigure(encoding="utf-8")
ROOT = Path(__file__).resolve().parent.parent.parent
API = "https://graph.facebook.com/v21.0/{}/{}"
VN = timezone(timedelta(hours=7))

args = sys.argv[1:]
if not args:
    sys.exit(__doc__)
src = Path(args[0])
that = "--that" in args
gio = args[args.index("--gio") + 1] if "--gio" in args else "11:30"
page, token = os.environ.get("FB_PAGE_ID"), os.environ.get("FB_PAGE_TOKEN")
if that and not (page and token):
    sys.exit("Thiếu biến môi trường FB_PAGE_ID / FB_PAGE_TOKEN — xem docs/specs/dang-bai-facebook-tu-dong.md mục Cài đặt")


def call(edge, data, files=None):
    try:
        d = requests.post(API.format(page, edge), data={**data, "access_token": token}, files=files, timeout=120).json()
    except Exception as e:  # không in e: thông báo lỗi chứa URL có token
        raise RuntimeError(f"lỗi mạng {type(e).__name__}")
    if "id" not in d:
        raise RuntimeError((d.get("error") or {}).get("message", str(d)))
    return d["id"]


def skip_reason(p, when):
    if p.get("fb_id"):
        return f"đã hẹn ({p['fb_id']})"
    if re.search(r"\[[^\]]+\]", p["noi_dung"]):
        return "còn placeholder " + re.search(r"\[[^\]]+\]", p["noi_dung"]).group()
    if p.get("ghi_chu", "").strip():
        return "còn mục cần xác nhận: " + p["ghi_chu"].strip()
    if when < datetime.now(VN) + timedelta(minutes=15):
        return "giờ đăng đã qua hoặc còn < 15 phút"
    images = [l.strip().split(" ")[0] for l in p.get("anh", "").splitlines() if l.strip().startswith("src/")]
    missing = [i for i in images if not (ROOT / i).exists()]
    return f"không thấy ảnh {missing[0]}" if missing else None


posts = json.loads(src.read_text(encoding="utf-8"))
hh, mm = map(int, gio.split(":"))
ok, skipped, failed = [], [], []
for p in posts:
    if p["nen_tang"] != "Facebook":
        continue
    when = datetime.fromisoformat(p["ngay"]).replace(hour=hh, minute=mm, tzinfo=VN)
    label = f"{p['ngay']} {gio} | {p['tieu_de']}"
    reason = skip_reason(p, when)
    if reason:
        skipped.append(f"{label} → {reason}")
        continue
    if not that:
        ok.append(label)
        continue
    try:
        images = [l.strip().split(" ")[0] for l in p.get("anh", "").splitlines() if l.strip().startswith("src/")]
        data = {"message": p["noi_dung"], "published": "false", "scheduled_publish_time": str(int(when.timestamp()))}
        for n, img in enumerate(images):
            with (ROOT / img).open("rb") as f:
                pid = call("photos", {"published": "false", "temporary": "true"}, {"source": f})
            data[f"attached_media[{n}]"] = json.dumps({"media_fbid": pid})
        p["fb_id"] = call("feed", data)
        src.write_text(json.dumps(posts, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")  # lưu ngay, chạy lại không trùng
        ok.append(label)
    except RuntimeError as e:
        failed.append(f"{label} → {e}")

print(("ĐÃ HẸN" if that else "SẼ HẸN (chạy thử, thêm --that để hẹn thật)") + f": {len(ok)}")
print(*[f"  {x}" for x in ok], sep="\n") if ok else None
print(f"BỎ QUA: {len(skipped)}")
print(*[f"  {x}" for x in skipped], sep="\n") if skipped else None
if failed:
    print(f"LỖI: {len(failed)}")
    print(*[f"  {x}" for x in failed], sep="\n")
sys.exit(1 if failed else 0)
