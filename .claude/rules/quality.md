---
paths:
  - "src/**/*.astro"
  - "astro.config.*"
---

# Accessibility, SEO, form

- Menu mobile dạng hamburger, đóng được bằng Esc; điều hướng bằng bàn phím, focus ring rõ.
- SEO: `<title>` + `meta description` riêng mỗi trang, Open Graph, `lang="vi"`, schema.org `GeneralContractor` (tên, địa chỉ, SĐT, khu vực phục vụ) ở layout, `@astrojs/sitemap`. Dùng từ khóa địa phương ("sửa nhà Đông Anh", "xây nhà trọn gói Hà Nội").
- Mỗi trang một từ khóa chính, không trùng trang khác (bản đồ ở `marketing/seo/tu-khoa.md`).
- AI SEO: mỗi section mở bằng 1–2 câu trả lời thẳng; nêu rõ "Gia Khánh", "Hà Nội"/tên huyện thay vì chỉ "chúng tôi"; trang có FAQ thêm schema `FAQPage`, trang dịch vụ thêm `Service`, trang con thêm `BreadcrumbList`, bài cẩm nang thêm `Article`. Có `public/llms.txt`.
- Mục tiêu Lighthouse ≥ 90 (Performance, Accessibility, SEO).
- Form: validate bằng thuộc tính HTML (`required`, `type="tel"`); backend gửi form chọn sau (Formspree / Netlify Forms…).
