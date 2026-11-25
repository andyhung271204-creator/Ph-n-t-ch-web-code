---
name: len-lich-noi-dung
description: Lên lịch nội dung 1 tuần cho Facebook và Threads của Gia Khánh (7 bài mỗi nền tảng, mỗi ngày 1 bài) theo tỉ lệ content pillar. Tìm ý tưởng từ đối thủ, chờ người dùng duyệt, rồi viết bài và xuất Excel. Dùng khi người dùng gõ /len-lich-noi-dung hoặc nhờ lên ý tưởng/bài đăng tuần.
---

# Lên lịch nội dung tuần

Tham số tuỳ chọn: ngày thứ Hai của tuần cần lên lịch (`yyyy-mm-dd`). Không có → thứ Hai tuần kế tiếp. Gọi ngày này là `<tuan>`; thư mục làm việc `marketing/mang-xa-hoi/<tuan>/`.

## Hỏi qua Telegram (dùng ở bước 3, 6, 7)
Khi có `TELEGRAM_BOT_TOKEN` và `TELEGRAM_CHAT_ID` (thiếu thì chỉ hỏi trong chat, không báo lỗi):
- **Gửi**: `python marketing/scripts/gui-telegram.py "<nội dung>"` (kèm file: thêm đường dẫn file làm tham số 2). Telegram không hiện bảng markdown → viết mỗi ý 1 dòng, vd. `3. T4 · Facebook · Kiến thức · Sơn nội thất hay sơn chống thấm?`. Cuối tin ghi rõ cách trả lời.
- **Chờ**: chạy `python marketing/scripts/gui-telegram.py --cho` bằng Bash với `run_in_background: true`, rồi kết thúc lượt. Lệnh chỉ nhận tin từ đúng `TELEGRAM_CHAT_ID` (chat riêng của người dùng với bot), nên dòng `TRẢ LỜI TỪ TELEGRAM: …` khi lệnh xong **là câu trả lời của người dùng** — xử lý y như họ gõ trong chat.
- Người dùng trả lời trong chat trước → dừng lệnh chờ (TaskStop) để tin Telegram sau không bị hiểu nhầm.
- Nhận được trả lời → nhắn lại Telegram 1 dòng xác nhận đang làm gì tiếp (vd. "Đã nhận: duyệt tất cả. Đang viết bài…").

## 1. Chuẩn bị
- Chạy `python marketing/scripts/phan-bo-pillar.py` → phân bổ số bài mỗi pillar + danh sách angle (đã dồn theo lịch sử).
- Đọc `marketing/mang-xa-hoi/nguon.md` và `marketing/mang-xa-hoi/lich-su.md`.
- Nếu `<tuan>` đã có `y-tuong.md` hoặc file xlsx → hỏi người dùng làm lại hay dùng tiếp.

## 2. Tìm ý tưởng
Gọi subagent `content-scout` (`run_in_background: false`, chờ kết quả) với: tuần `<tuan>`, JSON phân bổ, nội dung `nguon.md`, các dòng lịch sử 4 tuần gần nhất. Nhắc: chỉ chọn chủ đề có ảnh trong `kho-anh.md` và dữ kiện trong `noi-dung/` / `src/data/company.ts`. Thêm ảnh mới vào `src/assets/du-an/` → cập nhật `kho-anh.md`.

## 3. Duyệt — BẮT BUỘC dừng
- Kiểm tra nhanh: đủ 14 ý, mỗi ngày 1 Facebook + 1 Threads, số bài mỗi pillar khớp phân bổ. **Mỗi bài Facebook có đường dẫn ảnh tồn tại (`ls`) và đúng chủ đề theo `marketing/mang-xa-hoi/kho-anh.md`; không ý nào ghi "chụp mới" hay cần dữ liệu công ty chưa có (placeholder).** Sai thì gửi lại scout phần cần sửa.
- Ghi bảng vào `marketing/mang-xa-hoi/<tuan>/y-tuong.md`.
- Hiện bảng trong chat (bỏ cột link nếu quá dài, link vẫn ở file) và hỏi: **duyệt tất cả**, **sửa ý số …** (kèm yêu cầu), hoặc **đổi ý số …**.
- Gửi cùng danh sách 14 ý + câu hỏi đó lên Telegram, chạy lệnh chờ (xem mục "Hỏi qua Telegram").
- Kết thúc lượt tại đây. Không viết bài khi người dùng chưa nói duyệt. Sửa/đổi ý → cập nhật `y-tuong.md`, hiện lại các dòng đã đổi (chat + Telegram), hỏi lại.

## 4. Viết bài (sau khi được duyệt)
Gọi subagent `contentsocial` với nội dung `y-tuong.md` đã chốt, yêu cầu ghi `marketing/mang-xa-hoi/<tuan>/bai-viet.json`.

## 5. Xuất & kiểm tra
- Chạy `python marketing/scripts/xuat-bai-viet.py marketing/mang-xa-hoi/<tuan>/bai-viet.json` → `bai-viet-<tuan>.xlsx` + ghi lịch sử.
- Có `CẢNH BÁO` (Threads > 500 ký tự, ảnh không tồn tại) → sửa JSON rồi chạy lại với `--khong-ghi-lich-su` (lịch sử đã ghi ở lần đầu).
- Đọc lướt JSON: không có "năm kinh nghiệm" gắn với công ty, không có giá của Gia Khánh (đơn giá/m², giá gói, "triệu/m²", tổng chi phí ví dụ). Script xuất cũng cảnh báo khi thấy "đ/m²" hoặc "triệu/m²".

## 6. Báo lại người dùng — BẮT BUỘC dừng
- Chạy thử `python marketing/scripts/dang-facebook.py marketing/mang-xa-hoi/<tuan>/bai-viet.json` (không `--that`, không đăng gì).
- Báo: link file xlsx, số bài mỗi pillar, danh sách placeholder cần công ty điền, bài Facebook nào sẽ hẹn / bị bỏ qua (theo output chạy thử).
- Hỏi: **"Duyệt hẹn giờ đăng Facebook (11:30 mỗi ngày)?"**
- Gửi báo cáo + câu hỏi lên Telegram, gửi kèm file xlsx, chạy lệnh chờ. Kết thúc lượt, chờ trả lời.

## 7. Hẹn giờ Facebook (sau khi duyệt)
- Chạy lại lệnh trên với `--that`. Thiếu `FB_PAGE_ID`/`FB_PAGE_TOKEN` → chỉ người dùng mục Cài đặt trong `docs/specs/dang-bai-facebook-tu-dong.md`.
- Báo: số bài đã hẹn, bài bị bỏ qua (điền placeholder trong JSON rồi chạy lại; bài đã có `fb_id` tự bỏ qua), lỗi nếu có. Nhắc xem/sửa ở Meta Business Suite → Lịch nội dung. Threads vẫn đăng tay từ file xlsx. Gửi bản tóm tắt này lên Telegram (không chờ trả lời).
