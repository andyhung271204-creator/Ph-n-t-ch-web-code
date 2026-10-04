---
paths:
  - "src/**/*.astro"
  - "astro.config.*"
---

# Accessibility, SEO, form

- Menu mobile dạng hamburger, đóng được bằng Esc; điều hướng bằng bàn phím, focus ring rõ.
- SEO: `<title>` + `meta description` riêng mỗi trang, Open Graph, `lang="vi"`, schema.org `GeneralContractor` (tên, địa chỉ, SĐT, khu vực phục vụ) ở layout, `@astrojs/sitemap`. Dùng từ khóa địa phương ("sửa nhà Đông Anh", "xây nhà trọn gói Hà Nội").
- Mục tiêu Lighthouse ≥ 90 (Performance, Accessibility, SEO).
- Form: validate bằng thuộc tính HTML (`required`, `type="tel"`); backend gửi form chọn sau (Formspree / Netlify Forms…).
