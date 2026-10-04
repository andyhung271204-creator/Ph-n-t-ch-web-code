# Quy trình kiểm tra sau thay đổi (bắt buộc)

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
