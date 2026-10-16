# CLAUDE.md — Xây dựng Gia Khánh (xaydunggiakhanh)

Website giới thiệu **Công ty TNHH Xây dựng và Đầu tư Gia Khánh**: dịch vụ, năng lực, công trình, báo giá và liên hệ.
Mục tiêu: khách hàng tin tưởng nhanh và để lại số điện thoại / gọi / chat Zalo.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # output: dist/
```

## Rules

Quy tắc chi tiết nằm trong `.claude/rules/`:

| File | Chủ đề | Nạp khi |
|---|---|---|
| `workflow.md` | Thiết kế UI qua Stitch, screenshot so sánh design, mobile-friendly (bắt buộc) | Luôn luôn |
| `company.md` | Thông tin công ty, dịch vụ, quy trình, CTA, logo | Luôn luôn |
| `content.md` | Sự thật & pháp lý, ngôn ngữ, giọng văn | Luôn luôn |
| `architecture.md` | Tech stack, cấu trúc thư mục, sitemap | Luôn luôn |
| `homepage.md` | Bố cục trang chủ | `src/pages/index.astro`, `src/components/**` |
| `design-system.md` | Màu, khoảng cách, typography, thành phần | `src/**/*.{astro,css}`, `tailwind.config.*` |
| `animation.md` | Animation khi scroll (bắt buộc) | `src/**/*.{astro,css}` |
| `quality.md` | Accessibility, SEO, form | `src/**/*.astro`, `astro.config.*` |

Khi dựng dự án lần đầu (chưa có `src/`), đọc thủ công `design-system.md`, `animation.md`, `homepage.md`, `quality.md` vì chúng chưa tự nạp.
