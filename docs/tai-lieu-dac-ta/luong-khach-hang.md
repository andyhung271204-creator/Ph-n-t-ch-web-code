# Luồng khách hàng: CTA, form, đo lường

## Các điểm chạm để khách liên hệ

| Điểm chạm | Ở đâu | Hành động |
|---|---|---|
| Nút "Nhận báo giá" | Header mọi trang | Sang `/lien-he/` |
| Nút "Nhận báo giá miễn phí" | Đầu mỗi trang con, giữa bài Cẩm nang | Cuộn tới form hoặc sang trang có form |
| Nút "Gọi ngay" | Đầu trang, thẻ liên hệ, form | `tel:0964531577` |
| Nút "Chat Zalo" | Đầu trang, thẻ liên hệ | `https://zalo.me/0964531577` |
| 3 nút nổi (Messenger, Zalo, Gọi) | Góc phải dưới, mọi trang | Mở fanpage / Zalo / gọi |
| Form báo giá | `/lien-he/`, `/bao-gia/`, `/du-an/` | Xem bên dưới |

## Form "Nhận báo giá miễn phí"

Component: `src/components/QuoteForm.astro`.

**Các ô:** Họ tên (bắt buộc) · Số điện thoại (bắt buộc, 9–15 ký tự số) · Khu vực · Nhu cầu. Trang Báo giá có thêm ô chọn **Mẫu nhà quan tâm** (48 mẫu).

**Khi khách bấm gửi:**

```
Khách bấm "Nhận báo giá miễn phí"
   ├─ 1. Mở Zalo của Gia Khánh trong tab mới
   ├─ 2. Gửi dữ liệu về /api/lead
   │      ├─ Lưu vào cơ sở dữ liệu D1 (bảng leads)
   │      └─ Báo tin nhắn "Lead mới từ website" qua Zalo Bot (nếu đã cài token)
   ├─ 3. Ghi sự kiện generate_lead vào Google Analytics
   └─ 4. Sao chép nội dung form vào clipboard để khách dán vào Zalo
```

- Nếu trình duyệt tắt JavaScript: form vẫn mở Zalo nhưng không lưu lead.
- Chống spam: ô ẩn `website` (honeypot). Bot điền ô này thì bị bỏ qua.
- Lỗi mạng khi lưu lead không chặn việc mở Zalo.

**Bảng `leads`** (`migrations/0001_leads.sql`): `id`, `name`, `phone`, `area`, `need`, `model`, `created_at`.

## Đo lường (Google Analytics 4)

Mã GA đặt trong biến môi trường `PUBLIC_GA_ID` (file `.env`), chỉ nạp ở bản build thật, không nạp khi chạy `npm run dev`.

| Sự kiện | Khi nào |
|---|---|
| `page_view` | Mỗi lần xem trang (mặc định GA) |
| `click_call` | Bấm bất kỳ link `tel:` nào |
| `click_zalo` | Bấm bất kỳ link Zalo nào |
| `generate_lead` | Gửi form báo giá |

Bài Cẩm nang gắn thêm `content_group` = tên chuyên mục, để xem chuyên mục nào hút người đọc.
