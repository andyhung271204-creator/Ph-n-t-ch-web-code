Trạng thái: Đã xong

# Đăng bài Facebook tự động (nối skill len-lich-noi-dung)

## Mục tiêu
Sau khi duyệt bài tuần, một lệnh hẹn giờ cả 7 bài Facebook vào lịch của Page (Graph API `scheduled_publish_time`). Meta tự đăng lúc 11:30 mỗi ngày, máy không cần bật.

## Có cần làm không? Đã có sẵn gì?
- Dùng lại `bai-viet.json` của skill, cách đọc token từ biến môi trường giống `gui-zalo.py`.
- Hẹn giờ dùng tính năng có sẵn của Meta → không cần Task Scheduler, n8n.

## Phạm vi
- Làm: Facebook Page, có duyệt trước khi hẹn, bỏ qua bài còn placeholder.
- Không làm: Threads (vẫn đăng tay), thông báo Zalo.

## File
- `marketing/scripts/dang-facebook.py` (mới)
- `.claude/skills/len-lich-noi-dung/SKILL.md` (thêm bước 6–7)

## Cách dùng
```
python marketing/scripts/dang-facebook.py marketing/mang-xa-hoi/<tuan>/bai-viet.json          # chạy thử
python marketing/scripts/dang-facebook.py marketing/mang-xa-hoi/<tuan>/bai-viet.json --that   # hẹn thật
```
Bỏ qua bài: còn `[...]`, có `ghi_chu`, đã có `fb_id`, giờ đăng đã qua/còn < 15 phút, thiếu ảnh. Hẹn xong, `fb_id` được ghi vào JSON → điền placeholder rồi chạy lại chỉ hẹn những bài còn thiếu.

## Cài đặt 1 lần
1. Vào https://developers.facebook.com → **Tạo ứng dụng** (loại Business), thêm sản phẩm liên quan tới Pages.
2. Mở **Graph API Explorer**, chọn app, thêm quyền `pages_manage_posts`, `pages_read_engagement`, `pages_show_list` → **Generate Access Token** (đăng nhập tài khoản quản trị Page).
3. Đổi sang token dài hạn: trong **Access Token Debugger** bấm **Extend Access Token**, rồi gọi `me/accounts` bằng token dài hạn đó → lấy `id` và `access_token` của Page Gia Khánh (Page token lấy từ user token dài hạn thì không hết hạn).
4. Đặt biến môi trường (PowerShell), mở terminal mới sau khi đặt:
   ```
   setx FB_PAGE_ID "<id page>"
   setx FB_PAGE_TOKEN "<page access token>"
   ```
Không ghi token vào repo.

## Kiểm tra
- Chạy thử trên `2026-11-23/bai-viet.json`: 3 bài sẽ hẹn, 4 bài bỏ qua vì placeholder. Đạt.
- `--that` khi thiếu biến môi trường → báo rõ, exit 1. Đạt.
- Hẹn thật: chưa chạy, chờ người dùng cài token. Sau đó xem Meta Business Suite → Lịch nội dung → Đã lên lịch.
