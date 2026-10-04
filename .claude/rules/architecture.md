# Tech stack, cấu trúc thư mục, sitemap

## Tech stack

- **Astro** (static output) + **Tailwind CSS**. Không dùng framework JS phía client trừ khi thật cần.
- Tương tác nhỏ (menu mobile, accordion FAQ, scroll animation) → CSS + vài dòng JS vanilla. Accordion dùng `<details>`. Không thêm thư viện slider/animation.
- Ảnh: `<Image />` của Astro (WebP/AVIF, lazy-load).
- Font: **Be Vietnam Pro** (Google Fonts), weight 400/500/600/700.
- Screenshot: Playwright (devDependency).
- Tái sử dụng component có sẵn trước khi viết mới; không thêm dependency khi vài dòng CSS/JS làm được.

## Cấu trúc thư mục

```
src/
  layouts/BaseLayout.astro     # <head>, SEO, Header, Footer, nút Gọi/Zalo nổi, script scroll-reveal
  components/                  # Header, Footer, Hero, SectionHeading, ServiceCard, ProjectCard, StatItem, CTA...
  pages/                       # index, gioi-thieu, dich-vu, du-an, bao-gia, lien-he (+ dich-vu/[slug], du-an/[slug])
  content/                     # dịch vụ, dự án (Content Collections)
  data/company.ts              # MỘT nguồn duy nhất cho tên, địa chỉ, SĐT, MST, email, mạng xã hội
  assets/                      # logo, ảnh công trình
```

Không hard-code SĐT/địa chỉ/MST trong component — luôn import từ `src/data/company.ts`.

## Sitemap

| Trang | URL | Nội dung chính |
|---|---|---|
| Trang chủ | `/` | Tóm tắt, dẫn sang trang chi tiết (xem `homepage.md`) |
| Giới thiệu | `/gioi-thieu` | Giới thiệu đầy đủ, tầm nhìn – sứ mệnh, giá trị cốt lõi, đội ngũ, thông tin pháp lý |
| Dịch vụ | `/dich-vu`, `/dich-vu/[slug]` | 4 nhóm dịch vụ |
| Công trình | `/du-an`, `/du-an/[slug]` | Thẻ dự án; chi tiết có gallery trước – trong – sau |
| Báo giá | `/bao-gia` | Bảng đơn giá/m², các gói, cách tính diện tích + ví dụ, bảo hành, FAQ |
| Liên hệ | `/lien-he` | Form, Google Maps (iframe), thông tin liên hệ |
