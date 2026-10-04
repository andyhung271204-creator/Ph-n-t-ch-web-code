---
paths:
  - "src/**/*.{astro,css}"
---

# Animation khi scroll (bắt buộc)

- Mọi `<section>` (và các thẻ con trong lưới) có hiệu ứng xuất hiện: fade + trượt lên 16–24px, 500–600ms, `ease-out`; thẻ trong lưới trễ dần 80–100ms.
- Cài đặt: 1 `IntersectionObserver` trong `BaseLayout` thêm class `is-visible` cho phần tử có `data-reveal`; chạy một lần rồi `unobserve`. Không dùng thư viện (AOS, GSAP…).
- Nội dung phải hiển thị khi JS tắt: chỉ ẩn ban đầu khi `<html>` có class `js` (gắn bằng script inline trong `<head>`).
- `@media (prefers-reduced-motion: reduce)` → tắt animation, hiện ngay.
- Section mới thêm vào mà thiếu `data-reveal` là lỗi.
