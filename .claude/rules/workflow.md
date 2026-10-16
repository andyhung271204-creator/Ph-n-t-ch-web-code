# Quy trình kiểm tra sau thay đổi (bắt buộc)

- **Thiết kế UI qua Stitch trước khi code (tự động, không cần hỏi trước)**: mỗi khi thiết kế mới hoặc đổi giao diện (trang, section, component), tự gọi Stitch (MCP `stitch`: `generate_screen_from_text`, `edit_screens`, `generate_variants`) theo `design-system.md`, rồi mới chuyển sang Astro/Tailwind. Nếu sinh nhiều variant thì cho người dùng chọn; một phương án thì cứ làm tiếp. Sửa nhỏ (chữ, khoảng cách, lỗi) không cần qua Stitch.
  - Project Stitch duy nhất: **Gia Khánh – Redesign website** `projects/17579383945988234325`. Sửa màn hình đã có bằng `edit_screens` thay vì tạo màn mới trùng tên.
  - **Tự export asset về local** ngay sau khi chốt màn hình: `get_screen` → tải `htmlCode.downloadUrl` và `screenshot.downloadUrl` + `=s0` (không có hậu tố chỉ ra thumbnail ~232px) bằng `curl -L` vào `design/stitch/<slug>.html` và `design/stitch/<slug>.png` (slug không dấu theo trang, vd. `lien-he`, `trang-chu-hero`). Ghi đè bản cũ cùng slug. Code Astro dựa theo file HTML này.
  - Ảnh trong HTML của Stitch mà web thực sự dùng → tải về `src/assets/stitch/<slug>-<n>.<ext>` và import qua `<Image />`, không hot-link URL Google. Ảnh do Stitch sinh chỉ dùng làm minh hoạ/trang trí, **không** đăng làm công trình của Gia Khánh (xem `content.md`).

- **Sau mỗi thay đổi lớn** (thêm/sửa section, trang, layout, theme): chụp screenshot desktop (1280px) và mobile (375px), so sánh với design gốc `betaviet.vn_ (1).png` — về bố cục, nhịp section, kiểu thẻ. Không so màu (ta dùng xanh lá, mẫu dùng cam). Báo lại điểm khác biệt chính.
- **Mobile-friendly**: mobile-first; kiểm tra ở 375px, 768px, 1280px; không cuộn ngang; vùng chạm ≥ 44px.
- **Mọi section phải có animation khi scroll** — chi tiết trong `animation.md`.
- **Sau mỗi lần thay đổi web**: đảm bảo server đang chạy (`npm run dev` hoặc `npm run preview`) và đưa người dùng link localhost của trang vừa sửa (vd. `http://localhost:4321/bao-gia`).

```bash
npm run build && npm run preview   # http://localhost:4321
npx playwright screenshot --full-page --viewport-size=1280,800 http://localhost:4321 shots/desktop.png
npx playwright screenshot --full-page --viewport-size=375,812  http://localhost:4321 shots/mobile.png
```

Thư mục `shots/` nằm trong `.gitignore`.
