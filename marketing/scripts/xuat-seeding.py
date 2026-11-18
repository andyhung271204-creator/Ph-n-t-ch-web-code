"""Xuất các dòng hang-doi.md có Thời gian >= --tu ra file xlsx. In đường dẫn file, hoặc không in gì nếu không có dòng.
Dùng: python marketing/scripts/xuat-seeding.py --tu "2026-11-16 14:00"
"""
import argparse
import re
from pathlib import Path

from openpyxl import Workbook
from openpyxl.styles import Alignment, Font

ROOT = Path(__file__).resolve().parent.parent.parent
QUEUE = ROOT / "marketing" / "seeding" / "hang-doi.md"
OUT = ROOT / "marketing" / "seeding" / "xlsx"
HEAD = ["Thời gian", "Link bài", "Nguồn", "Nhu cầu của người hỏi", "Bình luận gợi ý", "Trạng thái"]

ap = argparse.ArgumentParser()
ap.add_argument("--tu", required=True, help="yyyy-mm-dd HH:mm, lấy dòng từ mốc này")
tu = ap.parse_args().tu

rows = []
for line in QUEUE.read_text(encoding="utf-8").splitlines():
    cells = [c.strip().replace("<br>", "\n") for c in line.strip().strip("|").split("|")]
    if len(cells) == 6 and re.match(r"\d{4}-\d{2}-\d{2} \d{2}:\d{2}$", cells[0]) and cells[0] >= tu \
            and cells[5] == "Chờ duyệt":
        rows.append(cells)

if rows:
    wb = Workbook()
    ws = wb.active
    ws.title = "Seeding"
    ws.append(HEAD)
    for c in ws[1]:
        c.font = Font(bold=True)
    for r in rows:
        ws.append(r)
    for col, w in zip("ABCDEF", (17, 55, 30, 40, 70, 12)):
        ws.column_dimensions[col].width = w
    for row in ws.iter_rows(min_row=2):
        for c in row:
            c.alignment = Alignment(wrap_text=True, vertical="top")
    OUT.mkdir(parents=True, exist_ok=True)
    f = OUT / f"seeding-{tu.replace(' ', '-').replace(':', '')}.xlsx"
    wb.save(f)
    print(f.relative_to(ROOT).as_posix())  # đường dẫn tương đối: chỉ ASCII, tránh lỗi cp1252 của console
