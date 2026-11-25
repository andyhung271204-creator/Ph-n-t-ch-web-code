# Xây dựng Gia Khánh

Website giới thiệu **Công ty TNHH Xây dựng và Đầu tư Gia Khánh**, đơn vị xây dựng và sửa chữa nhà ở tại Hà Nội. Website: https://xaydunggiakhanh.vn

Mục tiêu của website là để khách hàng tin tưởng nhanh và để lại số điện thoại, gọi điện hoặc chat Zalo.

## Nội dung chính

- **Trang chủ, Giới thiệu**: năng lực, giá trị cốt lõi, thông tin pháp lý của công ty.
- **Dịch vụ**: 4 nhóm gồm xây nhà trọn gói, sửa chữa – cải tạo, thiết kế kiến trúc & nội thất, hoàn thiện & thi công nội thất.
- **Mẫu nhà / Công trình**: thư viện ảnh, bấm vào ảnh để phóng to kèm form nhận báo giá.
- **Báo giá**: bảng đơn giá theo m², các gói, cách tính diện tích, bảo hành, câu hỏi thường gặp.
- **Cẩm nang**: bài viết chia sẻ kinh nghiệm xây sửa nhà, soạn qua trang quản trị `/admin`.
- **Liên hệ**: form nhận báo giá (lưu vào Cloudflare D1), bản đồ, thông tin liên hệ.

## Công nghệ

| Phần | Công cụ |
|---|---|
| Framework | Astro (xuất static) + Tailwind CSS |
| Hosting | Cloudflare Workers (tự build khi push lên `main`) |
| Lưu dữ liệu form | Cloudflare D1 (`migrations/`) |
| Quản lý bài viết | Sveltia CMS tại `/admin` |
| Kiểm tra giao diện | Playwright (`scripts/kiem-tra.mjs`) |

## Chạy trên máy

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # kết quả trong dist/
```

## Cấu trúc thư mục

```
src/          Code website (trang, component, dữ liệu công ty, ảnh)
public/       File tĩnh và trang quản trị /admin
scripts/      Script kiểm tra giao diện, xử lý ảnh, banner
migrations/   Cấu trúc database D1
noi-dung/     Nội dung chữ cho từng trang
docs/         Tài liệu đặc tả và các spec tính năng
marketing/    Kế hoạch nội dung mạng xã hội, SEO, seeding, KPI
.claude/      Quy tắc làm việc, agent và skill của Claude Code
```

Các quy tắc về nội dung, thiết kế, SEO và quy trình làm tính năng nằm trong [CLAUDE.md](CLAUDE.md) và thư mục `.claude/rules/`. Tài liệu đặc tả sản phẩm nằm trong [docs/tai-lieu-dac-ta/](docs/tai-lieu-dac-ta/README.md).

## Thông tin công ty

- Mã số thuế: 0111442677
- Trụ sở: Đường Quốc lộ 3, thôn Lộc Hà, xã Đông Anh, TP Hà Nội
- Hotline / Zalo: 0964 531 577
