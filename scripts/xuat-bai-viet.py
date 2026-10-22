# Xuất bài viết tuần ra Excel và ghi vào lịch sử nội dung.
# Chạy: python scripts/xuat-bai-viet.py noi-dung/mang-xa-hoi/<yyyy-mm-dd>/bai-viet.json
# JSON: danh sách bài, mỗi bài có ngay, nen_tang, pillar, angle, tieu_de, noi_dung, anh, nguon, ghi_chu.
# In cảnh báo nếu bài Threads quá 500 ký tự, đường dẫn ảnh không tồn tại, hoặc bài có đơn giá.
import json
import re
import sys
from pathlib import Path

from openpyxl import Workbook
from openpyxl.styles import Alignment, Border, Font, PatternFill, Side

ROOT = Path(__file__).resolve().parent.parent
HISTORY = ROOT / "noi-dung/mang-xa-hoi/lich-su.md"
COLS = [  # (khoá JSON, tiêu đề cột, độ rộng)
    ("ngay", "Ngày", 12), ("nen_tang", "Nền tảng", 11), ("pillar", "Pillar", 22), ("angle", "Angle", 22),
    ("tieu_de", "Tiêu đề / hook", 32), ("noi_dung", "Nội dung", 70), ("anh", "Ảnh đề xuất", 40),
    ("nguon", "Nguồn ý tưởng", 30), ("ghi_chu", "Cần xác nhận", 26),
]
FONT = "Arial"
THIN = Side(style="thin", color="FFBFBFBF")


def check(posts):
    warnings = []
    for i, p in enumerate(posts, 1):
        if re.search(r"(đ|đồng|triệu|tr)\s*/\s*m", p["noi_dung"], re.I):
            warnings.append(f"Bài {i}: có vẻ đăng đơn giá — công ty không công khai giá")
        if p["nen_tang"] == "Threads" and len(p["noi_dung"]) > 500:
            warnings.append(f"Bài {i} (Threads) dài {len(p['noi_dung'])} ký tự > 500")
        for line in p.get("anh", "").splitlines():
            path = line.strip().split(" ")[0]
            if path.startswith("src/") and not (ROOT / path).exists():
                warnings.append(f"Bài {i}: không thấy ảnh {path}")
    return warnings


def write_xlsx(posts, out):
    wb = Workbook()
    ws = wb.active
    ws.title = "Bài viết"
    for c, (_, title, width) in enumerate(COLS, 1):
        cell = ws.cell(row=1, column=c, value=title)
        cell.font = Font(name=FONT, bold=True, color="FFFFFFFF")
        cell.fill = PatternFill("solid", fgColor="FF3730A3")
        cell.alignment = Alignment(horizontal="center", vertical="center", wrap_text=True)
        ws.column_dimensions[cell.column_letter].width = width
    for r, p in enumerate(posts, 2):
        fill = PatternFill("solid", fgColor="FFE0E7FF" if p["nen_tang"] == "Facebook" else "FFFFFFFF")
        for c, (key, _, _) in enumerate(COLS, 1):
            cell = ws.cell(row=r, column=c, value=p.get(key, ""))
            cell.font = Font(name=FONT, size=10)
            cell.alignment = Alignment(vertical="top", wrap_text=True)
            cell.border = Border(left=THIN, right=THIN, top=THIN, bottom=THIN)
            cell.fill = fill
    ws.freeze_panes = "A2"
    wb.save(out)


def append_history(posts):
    if not HISTORY.exists():
        HISTORY.parent.mkdir(parents=True, exist_ok=True)
        HISTORY.write_text("# Lịch sử nội dung mạng xã hội\n\n| Ngày | Nền tảng | Pillar | Angle | Tiêu đề |\n| --- | --- | --- | --- | --- |\n", encoding="utf-8")
    rows = "".join(f"| {p['ngay']} | {p['nen_tang']} | {p['pillar']} | {p['angle']} | {p['tieu_de'].replace('|', '/')} |\n" for p in posts)
    with HISTORY.open("a", encoding="utf-8") as f:
        f.write(rows)


def main():
    src = Path(sys.argv[1])
    posts = json.loads(src.read_text(encoding="utf-8"))
    for w in check(posts):
        print("CẢNH BÁO:", w)
    out = src.with_name(f"bai-viet-{src.parent.name}.xlsx")
    write_xlsx(posts, out)
    if "--khong-ghi-lich-su" not in sys.argv:
        append_history(posts)
    print("Đã lưu", out)


if __name__ == "__main__":
    main()
