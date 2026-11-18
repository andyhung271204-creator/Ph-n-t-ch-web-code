# Tính số bài mỗi content pillar cho 1 tuần (7 bài/nền tảng) theo tỉ lệ trong file pillar.
# Chạy: python marketing/scripts/phan-bo-pillar.py  → in JSON {Facebook: [...], Threads: [...]}
# Dồn theo lịch sử: pillar tuần trước thiếu bài (vd. 5% → 0 bài) sẽ được ưu tiên tuần sau,
# để tỉ lệ cộng dồn qua các tuần khớp với % trong file.
import json
import re
import sys
from pathlib import Path

from openpyxl import load_workbook

ROOT = Path(__file__).resolve().parent.parent.parent
PILLAR_FILE = ROOT / "marketing/mang-xa-hoi/Content-pillar-Facebook-Threads-Gia-Khanh-text.xlsx"
HISTORY = ROOT / "marketing/mang-xa-hoi/lich-su.md"
POSTS_PER_WEEK = 7
# Pillar không đưa vào lịch gợi ý: công trình thật (chủ doanh nghiệp tự đăng),
# minh bạch chi phí (không để lộ giá/cách định giá cho đối thủ)
BO_QUA = {"Công trình thật – Trước, trong, sau", "Minh bạch chi phí & quy trình"}


def read_pillars(ws):
    pillars = []
    for col in ws.iter_cols(min_row=1, max_row=ws.max_row):
        pct, name = col[0].value, col[1].value
        if not isinstance(pct, (int, float)) or not name:
            continue  # cột tổng (=SUM) hoặc ô trống
        angles = [c.value.split(":")[0].strip() for c in col[4:]
                  if isinstance(c.value, str) and c.value.strip()
                  and not c.value.startswith(("=", "Ghi chú"))]  # bỏ công thức và dòng ghi chú cuối sheet
        pillars.append({"pillar": name.strip(), "ti_le": pct, "angles": angles})
    return pillars


def past_counts(platform):
    # Dòng bảng trong lich-su.md: | ngày | nền tảng | pillar | angle | tiêu đề |
    counts = {}
    if HISTORY.exists():
        for line in HISTORY.read_text(encoding="utf-8").splitlines():
            cells = [c.strip() for c in line.strip().strip("|").split("|")]
            if len(cells) >= 3 and cells[1] == platform and re.match(r"\d{4}-\d{2}-\d{2}", cells[0]):
                counts[cells[2]] = counts.get(cells[2], 0) + 1
    return counts


def allocate(pillars, past):
    total_pct = sum(p["ti_le"] for p in pillars)
    weeks_done = sum(past.get(p["pillar"], 0) for p in pillars) / POSTS_PER_WEEK
    for p in pillars:
        target = p["ti_le"] / total_pct * POSTS_PER_WEEK * (weeks_done + 1)
        p["_need"] = target - past.get(p["pillar"], 0)
        p["so_bai"] = 0
    for _ in range(POSTS_PER_WEEK):  # mỗi lượt trao 1 bài cho pillar đang thiếu nhiều nhất
        p = max(pillars, key=lambda x: x["_need"])
        p["so_bai"] += 1
        p["_need"] -= 1
    for p in pillars:
        del p["_need"]
    return pillars


def main():
    wb = load_workbook(PILLAR_FILE, data_only=False)
    out = {}
    for platform in ("Facebook", "Threads"):
        pillars = [p for p in read_pillars(wb[platform]) if p["pillar"] not in BO_QUA]
        out[platform] = allocate(pillars, past_counts(platform))
        assert sum(p["so_bai"] for p in out[platform]) == POSTS_PER_WEEK
    json.dump(out, sys.stdout, ensure_ascii=False, indent=2)


if __name__ == "__main__":
    main()
