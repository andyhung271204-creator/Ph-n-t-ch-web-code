# Sơ đồ trang

## Menu chính

Trang chủ · Giới thiệu · Dịch vụ · Công trình · Cẩm nang · Báo giá · Liên hệ, cùng nút **"Nhận báo giá"** và số hotline ở góc phải header.

## Danh sách URL

| Trang | URL | File code |
|---|---|---|
| Trang chủ | `/` | `src/pages/index.astro` |
| Giới thiệu | `/gioi-thieu/` | `src/pages/gioi-thieu.astro` |
| Dịch vụ (tổng) | `/dich-vu/` | `src/pages/dich-vu/index.astro` |
| Dịch vụ con (4 trang) | `/dich-vu/<slug>/` | `src/pages/dich-vu/[slug].astro` + `src/components/dich-vu/*.astro` |
| Công trình (tổng) | `/du-an/` | `src/pages/du-an/index.astro` |
| Công trình con (15 trang) | `/du-an/<slug>/` | `src/pages/du-an/[slug].astro` |
| Cẩm nang (tổng) | `/cam-nang/` | `src/pages/cam-nang/index.astro` |
| Bài Cẩm nang | `/cam-nang/<slug>/` | `src/pages/cam-nang/[slug].astro` |
| Báo giá | `/bao-gia/` | `src/pages/bao-gia.astro` |
| Liên hệ | `/lien-he/` | `src/pages/lien-he.astro` |
| Trang quản trị | `/admin/` | `public/admin/` (Sveltia CMS) |
| Dành cho AI | `/llms.txt` | `src/pages/llms.txt.ts` |
| Sitemap | `/sitemap-index.xml` | tự sinh |

Mọi URL kết thúc bằng `/`. Truy cập thiếu `/`, qua `www` hoặc `http` sẽ tự chuyển hướng 301 về dạng chuẩn `https://xaydunggiakhanh.vn/.../`.

## Phần chung mọi trang

- **Header** dính trên cùng: logo, menu, hotline (ẩn ở màn hình vừa), nút "Nhận báo giá". Mobile: nút ☰ mở menu, phím Esc đóng.
- **Footer** xanh đậm: tên công ty, MST, người đại diện, trụ sở, hotline, email, giờ làm việc; danh sách 4 dịch vụ; liên kết nhanh + fanpage; bản đồ Google Maps.
- **3 nút nổi** góc phải dưới: Messenger, Zalo, Gọi. Cứ 20 giây lắc nhẹ và phát sáng để gây chú ý.
- **Phần đầu trang con** (`PageHeader`): breadcrumb, tiêu đề H1, đoạn mở đầu, thường kèm 3 nút: Nhận báo giá miễn phí · Gọi ngay · Chat Zalo.
- **FAQ** cuối trang dạng thu gọn/mở rộng (`<details>`), có dữ liệu cấu trúc FAQPage cho Google.

---

## 1. Trang chủ `/`

| # | Section | Nội dung |
|---|---|---|
| 1 | Hero | Giới thiệu ngắn công ty, MST, trụ sở, nút CTA. Đã có sẵn khung slider nhưng hiện chỉ 1 slide (banner `src/assets/slider/` chưa bật). |
| 2 | Đội ngũ + con số | 4 ô: 10+ năm kinh nghiệm đội ngũ · 10+ kỹ sư, KTS, quản lý · 4 nhóm dịch vụ · Khảo sát và báo giá miễn phí |
| 3 | Dịch vụ | Lưới 4 thẻ dịch vụ dẫn sang trang con |
| 4 | Mẫu nhà đã thi công | 6 mẫu nhà (01, 03, 05, 06, 12, 16), nút "Xem tất cả công trình" |
| 5 | Vì sao chọn + Quy trình | 4 thẻ lý do (ảnh nền minh hoạ) bên trái, quy trình 6 bước dạng dòng thời gian bên phải |
| 6 | Cẩm nang | 1 bài nổi bật lớn + 2 bài nhỏ, nút "Xem tất cả bài viết" |
| 7 | FAQ | 5 câu: công ty là ai, khu vực, chọn nhà thầu, phí khảo sát, quy trình |

## 2. Giới thiệu `/gioi-thieu/`

Bố cục 2 cột: **mục lục dính bên trái** (logo + 7 mục), nội dung bên phải.

1. Gia Khánh là công ty gì?
2. Tầm nhìn (đến 2031), sứ mệnh, bảng 5 giá trị cốt lõi: Minh bạch · Tận tâm · Đúng hẹn · Chất lượng · Trách nhiệm
3. 4 dịch vụ (link sang trang con)
4. Đội ngũ: người đứng đầu, kỹ sư, kiến trúc sư, quản lý thi công
5. Bảng thông tin pháp lý để đối chiếu (tên, MST, loại hình, trụ sở, người đại diện…)
6. Xem công trình và báo giá ở đâu
7. FAQ (4 câu)

## 3. Dịch vụ `/dich-vu/`

1. Gia Khánh nhận những dịch vụ nào? (4 thẻ)
2. Bạn đang ở tình huống nào, chọn dịch vụ nào? (gợi ý theo tình huống)
3. Gói thi công và giá
4. Làm việc với Gia Khánh thế nào? (quy trình)
5. FAQ

### Bốn trang dịch vụ con

| Slug | Tên | Các section chính |
|---|---|---|
| `xay-nha-tron-goi` | Xây nhà trọn gói | Trọn gói gồm hạng mục nào · Trọn gói hay phần thô · Giá bao nhiêu · Quy trình · Giám sát · Bảo hành · FAQ |
| `sua-chua-cai-tao-nha` | Sửa chữa – cải tạo nhà | Khi nào cần sửa · Hạng mục nhận (cải tạo, chống thấm & nứt, điện nước) · Nguyên nhân thấm nứt · Chi phí tính theo gì · Giấy phép · Quy trình · Bảo hành · Khu vực · FAQ |
| `thiet-ke-kien-truc-noi-that` | Thiết kế kiến trúc & nội thất | Hồ sơ gồm gì · Thiết kế riêng hay thiết kế + thi công · Phí thiết kế · Quy trình · Chọn phong cách · Nhà dưới 3 tầng có cần thiết kế · FAQ |
| `hoan-thien-thi-cong-noi-that` | Hoàn thiện & thi công nội thất | Hoàn thiện khác nội thất thế nào · 9 nhóm hạng mục · Chọn mức vật tư · Tính theo m² không · Quy trình · Bảo hành · FAQ |

Mỗi trang con có dữ liệu cấu trúc `Service` cho Google.

## 4. Công trình `/du-an/`

1. Các kiểu nhà đã thi công (8 nhóm: nhà ống 4–5 tầng, nhà phố 3–4 tầng, tân cổ điển, nhà 2 tầng, biệt thự…)
2. Ảnh 48 mẫu nhà, mỗi mẫu 3 ảnh, bấm để phóng to
3. Có thể xây theo mẫu có sẵn không?
4. Ảnh thi công thực tế theo từng công trình (15 thẻ dẫn sang trang con)
5. FAQ (4 câu)
6. Form "Chọn mẫu nhà bạn thích, nhận báo giá miễn phí"

**Trang công trình con** (`nha-da-hoan-thien`, `noi-that`, `quan-cafe`, `do-be-tong`, `cong-trinh-01` … `cong-trinh-11`): thông tin hạng mục/địa điểm/quy mô/năm (chỉ hiện ô đã có dữ liệu) + thư viện ảnh.

## 5. Cẩm nang `/cam-nang/`

- Giới thiệu 4 chuyên mục: Chi phí xây nhà · Thiết kế nhà · Sửa chữa – cải tạo · Hoàn thiện nội thất
- Mỗi chuyên mục một khối: mô tả, danh sách bài, link sang dịch vụ liên quan. Chuyên mục chưa có bài tự ẩn.

**Trang bài viết:** ảnh bìa, tóm tắt in nghiêng, thân bài, cụm nút báo giá/gọi/Zalo giữa bài, FAQ thu gọn, khối "Bài viết khác" (3 bài). Có dữ liệu cấu trúc `Article` + `FAQPage`.

## 6. Báo giá `/bao-gia/`

1. **Xây nhà 1 m² hết bao nhiêu?** 3 thẻ gói (nhà phố, nhà ống 2–5 tầng):
   - Phần thô + nhân công hoàn thiện: 3.300.000 đ/m²
   - Trọn gói (đề xuất): 5.000.000 đ/m²
   - Nhân công xây dựng: từ 1.400.000 đ/m²
   - Bảng đơn giá các loại nhà khác (nhà cấp 4, tân cổ điển/từ 6 tầng, biệt thự): hiện "Đang cập nhật"
2. **Diện tích tính giá:** hệ số móng 40%, tầng và tum 100%, sân thượng không mái 30%
3. **Bảng giá 48 mẫu nhà:** ảnh, diện tích ước tính, giá phần thô, giá trọn gói (mobile hiển thị dạng thẻ)
4. Vì sao báo giá giữa các nhà thầu chênh nhau?
5. Thanh toán và phát sinh chi phí
6. FAQ (8 câu)
7. Form "Nhận báo giá chi tiết" (có thêm ô chọn mẫu nhà)

Mọi chỗ có giá đều kèm: *"Đơn giá chưa gồm VAT, chưa gồm phá dỡ và ép cọc. Báo giá chính xác sau khi khảo sát thực tế."*

## 7. Liên hệ `/lien-he/`

1. Form "Nhận báo giá miễn phí" + danh sách thông tin nên chuẩn bị trước khi khảo sát
2. Thẻ thông tin liên hệ (hotline, MST, trụ sở, email, fanpage, giờ làm việc) + bản đồ Google Maps
3. Khu vực nhận công trình
4. FAQ (4 câu)
