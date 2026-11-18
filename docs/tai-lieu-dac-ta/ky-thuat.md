# Kỹ thuật

## Công nghệ

| Phần | Dùng |
|---|---|
| Khung web | Astro 7 (trang tĩnh, build sẵn HTML) |
| CSS | Tailwind CSS 4 |
| JavaScript phía trình duyệt | Vanilla, vài đoạn nhỏ (menu mobile, slider, hiện dần khi cuộn, form) |
| Hosting | Cloudflare Workers (adapter `@astrojs/cloudflare`) |
| Cơ sở dữ liệu | Cloudflare D1 (`xaydunggiakhanh-db`), chỉ lưu lead |
| Quản trị bài viết | Sveltia CMS tại `/admin`, lưu thẳng vào GitHub |
| Kiểm thử | Playwright (`scripts/kiem-tra.mjs`) |
| Tên miền | `xaydunggiakhanh.vn` (và `www.`) |

Không dùng React/Vue, không thư viện slider hay animation.

## Cấu trúc thư mục

```
src/
  pages/            Các trang (mỗi file = 1 URL), api/lead.ts, llms.txt.ts
  components/       Thành phần giao diện; dich-vu/ chứa thân 4 trang dịch vụ
  layouts/          BaseLayout: <head>, SEO, Header, Footer, nút nổi, GA4
  data/
    company.ts      MỘT nguồn duy nhất: tên, MST, SĐT, địa chỉ, giá, bảo hành, 48 mẫu nhà
    services.ts     4 dịch vụ: slug, tên, tiêu đề, meta SEO
    projects.ts     15 công trình
    posts.ts        Đọc bài Cẩm nang từ noi-dung/cam-nang/*.md
    images.ts       Tìm ảnh theo tên thư mục trong src/assets/
  assets/           Logo, ảnh mẫu nhà, công trình, dịch vụ, cẩm nang
  styles/global.css Màu, lớp dùng chung, animation
  worker.ts         Chuyển hướng 301 về URL chuẩn rồi giao cho Astro
public/admin/       Cấu hình CMS
noi-dung/           Bản chữ từng trang + bài Cẩm nang (.md)
migrations/         SQL tạo bảng leads
scripts/            kiem-tra.mjs, banners.mjs, anh-cam-nang.mjs
design/stitch/      Bản thiết kế xuất từ Stitch
marketing/          Tài liệu marketing (tách khỏi code)
```

**Quy tắc:** SĐT, địa chỉ, MST không viết cứng trong component, luôn lấy từ `src/data/company.ts`. Đổi một chỗ, cả web đổi theo.

## Cờ `daXacNhan`

Trong `company.ts`, `daXacNhan = false`. Hàm `xn()` hiện "Đang cập nhật" thay cho các số liệu công ty chưa xác nhận: giờ làm việc, giá 3 loại nhà ngoài nhà phố, chức danh người đại diện, thời gian gọi lại. Đổi thành `true` khi công ty xác nhận đủ.

## SEO kỹ thuật

- `<title>` tự thêm "| Gia Khánh" (trừ khi tiêu đề đã có tên thương hiệu), có meta description, canonical, Open Graph (ảnh banner).
- Dữ liệu cấu trúc JSON-LD:
  - `GeneralContractor` (mọi trang): tên, MST, SĐT, địa chỉ, khu vực phục vụ
  - `Service` (trang dịch vụ con)
  - `Article` + `FAQPage` (bài Cẩm nang)
  - `FAQPage` (mọi khối FAQ)
- `sitemap-index.xml` tự sinh, `robots.txt` cho phép tất cả.
- `/llms.txt`: bản tóm tắt cho ChatGPT, Perplexity…; tự cập nhật theo dịch vụ, bài viết và thông tin công ty.
- URL không dấu, có `/` cuối; 301 từ `www`, `http` và URL thiếu `/`.

## API

`POST /api/lead` (`src/pages/api/lead.ts`, chạy trên server, không build tĩnh):
- Nhận form: `ho-ten`, `sdt`, `khu-vuc`, `nhu-cau`, `mau-nha`, `website` (honeypot)
- Kiểm tra họ tên và SĐT, cắt độ dài từng ô
- Ghi vào D1, gửi tin qua Zalo Bot nếu có secret `ZALO_BOT_TOKEN` và `ZALO_CHAT_ID`

## Chạy và deploy

```bash
npm install
npm run dev                       # http://localhost:4321
npm run build && npm run preview  # chạy bản build để kiểm tra
node scripts/kiem-tra.mjs         # 375/768/1280px: cuộn ngang, lỗi console, vùng chạm, link 404
```

**Deploy:** push lên nhánh `main` → Cloudflare Workers Builds tự build và đưa lên. Bài viết lưu qua `/admin` cũng là một commit lên `main`, nên luôn `git pull` trước khi sửa trên máy.

**Biến môi trường / secret:** `PUBLIC_GA_ID` (GA4), `ZALO_BOT_TOKEN`, `ZALO_CHAT_ID` (Zalo Bot), binding `DB` (D1) trong `wrangler.jsonc`.
