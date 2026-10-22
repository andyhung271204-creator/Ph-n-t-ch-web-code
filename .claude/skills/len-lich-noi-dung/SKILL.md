---
name: len-lich-noi-dung
description: Lên lịch nội dung 1 tuần cho Facebook và Threads của Gia Khánh (7 bài mỗi nền tảng, mỗi ngày 1 bài) theo tỉ lệ content pillar. Tìm ý tưởng từ đối thủ, chờ người dùng duyệt, rồi viết bài và xuất Excel. Dùng khi người dùng gõ /len-lich-noi-dung hoặc nhờ lên ý tưởng/bài đăng tuần.
---

# Lên lịch nội dung tuần

Tham số tuỳ chọn: ngày thứ Hai của tuần cần lên lịch (`yyyy-mm-dd`). Không có → thứ Hai tuần kế tiếp. Gọi ngày này là `<tuan>`; thư mục làm việc `noi-dung/mang-xa-hoi/<tuan>/`.

## 1. Chuẩn bị
- Chạy `python scripts/phan-bo-pillar.py` → phân bổ số bài mỗi pillar + danh sách angle (đã dồn theo lịch sử).
- Đọc `noi-dung/mang-xa-hoi/nguon.md` và `noi-dung/mang-xa-hoi/lich-su.md`.
- Nếu `<tuan>` đã có `y-tuong.md` hoặc file xlsx → hỏi người dùng làm lại hay dùng tiếp.

## 2. Tìm ý tưởng
Gọi subagent `content-scout` (`run_in_background: false`, chờ kết quả) với: tuần `<tuan>`, JSON phân bổ, nội dung `nguon.md`, các dòng lịch sử 4 tuần gần nhất.

## 3. Duyệt — BẮT BUỘC dừng
- Kiểm tra nhanh: đủ 14 ý, mỗi ngày 1 Facebook + 1 Threads, số bài mỗi pillar khớp phân bổ, đường dẫn ảnh tồn tại (`ls`). Sai thì gửi lại scout phần cần sửa.
- Ghi bảng vào `noi-dung/mang-xa-hoi/<tuan>/y-tuong.md`.
- Hiện bảng trong chat (bỏ cột link nếu quá dài, link vẫn ở file) và hỏi: **duyệt tất cả**, **sửa ý số …** (kèm yêu cầu), hoặc **đổi ý số …**.
- Kết thúc lượt tại đây. Không viết bài khi người dùng chưa nói duyệt. Sửa/đổi ý → cập nhật `y-tuong.md`, hiện lại các dòng đã đổi, hỏi lại.

## 4. Viết bài (sau khi được duyệt)
Gọi subagent `contentsocial` với nội dung `y-tuong.md` đã chốt, yêu cầu ghi `noi-dung/mang-xa-hoi/<tuan>/bai-viet.json`.

## 5. Xuất & kiểm tra
- Chạy `python scripts/xuat-bai-viet.py noi-dung/mang-xa-hoi/<tuan>/bai-viet.json` → `bai-viet-<tuan>.xlsx` + ghi lịch sử.
- Có `CẢNH BÁO` (Threads > 500 ký tự, ảnh không tồn tại) → sửa JSON rồi chạy lại với `--khong-ghi-lich-su` (lịch sử đã ghi ở lần đầu).
- Đọc lướt JSON: không có "năm kinh nghiệm" gắn với công ty, không có giá của Gia Khánh (đơn giá/m², giá gói, "triệu/m²", tổng chi phí ví dụ). Script xuất cũng cảnh báo khi thấy "đ/m²" hoặc "triệu/m²".

## 6. Báo lại người dùng
Link file xlsx, số bài mỗi pillar, danh sách placeholder cần công ty điền trước khi đăng.
