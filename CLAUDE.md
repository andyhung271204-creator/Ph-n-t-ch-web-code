# CLAUDE.md — Xây dựng Gia Khánh (xaydunggiakhanh)

Website giới thiệu **Công ty TNHH Xây dựng và Đầu tư Gia Khánh**: dịch vụ, năng lực, công trình, báo giá và liên hệ.
Mục tiêu: khách hàng tin tưởng nhanh và để lại số điện thoại / gọi / chat Zalo.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # output: dist/
```

## Cấu trúc thư mục gốc

- **Code website**: `src/`, `public/`, `scripts/` (kiểm tra, ảnh, banner), `migrations/`, `design/stitch/`, `docs/`.
- **Nội dung website** (chữ cho từng trang, Cẩm nang): `noi-dung/`.
- **Marketing** (tách riêng khỏi code): `marketing/`
  - `mang-xa-hoi/` lịch bài Facebook/Threads + file content pillar
  - `seeding/` hàng đợi bình luận seeding
  - `seo/` từ khoá, audit, brief
  - `nghien-cuu/` báo cáo, ghi chú nghiên cứu khách hàng, đối thủ
  - `scripts/` script riêng cho marketing (xuất bài, seeding, gửi Zalo)

## Deploy & bài viết

- Deploy = push lên `main` (Cloudflare Workers Builds tự build). Không chạy `npm run deploy` từ máy khi chưa pull.
- Bài Cẩm nang soạn qua `/admin` (Sveltia CMS, `public/admin/config.yml`) và được commit thẳng lên GitHub → luôn `git pull` trước khi sửa trên máy.
- Mỗi thứ Hai, routine cloud chạy skill `viet-cam-nang` để tự viết 2 bài Cẩm nang và push lên `main` ở dạng nháp (`draft: true`). Đề tài lấy từ bảng "Đề xuất bài cẩm nang mới" trong `marketing/seo/tu-khoa.md`, cột Trạng thái. Duyệt rồi bỏ tích "Bản nháp" trong `/admin` thì bài mới lên web.

## Rules

Quy tắc chi tiết nằm trong `.claude/rules/`:

| File | Chủ đề | Nạp khi |
|---|---|---|
| `quy-trinh-tinh-nang.md` | Ý tưởng → tài liệu (`docs/specs/`) → duyệt → code → test → handoff | Luôn luôn |
| `workflow.md` | Thiết kế UI qua Stitch, screenshot so sánh design, mobile-friendly (bắt buộc) | Luôn luôn |
| `company.md` | Thông tin công ty, dịch vụ, quy trình, CTA, logo | Luôn luôn |
| `content.md` | Sự thật & pháp lý, ngôn ngữ, giọng văn | Luôn luôn |
| `architecture.md` | Tech stack, cấu trúc thư mục, sitemap | Luôn luôn |
| `homepage.md` | Bố cục trang chủ | `src/pages/index.astro`, `src/components/**` |
| `design-system.md` | Màu, khoảng cách, typography, thành phần | `src/**/*.{astro,css}`, `tailwind.config.*` |
| `animation.md` | Animation khi scroll (bắt buộc) | `src/**/*.{astro,css}` |
| `quality.md` | Accessibility, SEO, form | `src/**/*.astro`, `astro.config.*` |

Khi dựng dự án lần đầu (chưa có `src/`), đọc thủ công `design-system.md`, `animation.md`, `homepage.md`, `quality.md` vì chúng chưa tự nạp.
