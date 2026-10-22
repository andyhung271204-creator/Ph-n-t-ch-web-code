# Brief — /du-an

File đích: `noi-dung/du-an.md` (tạo mới; frontmatter `slug: du-an`, `url: /du-an/`, `meta_title`, `meta_description`). Nội dung hiện tại: `src/pages/du-an/index.astro`, `src/pages/du-an/[slug].astro`, `src/data/projects.ts`, `houseModels` trong `src/data/company.ts`.
Chuẩn: `noi-dung/dich-vu-xay-nha-tron-goi.md`. **Quy tắc chung** ở cuối `noi-dung/seo/brief/sua-chua-cai-tao-nha.md`. Từ khoá: mục `/du-an` + X15 trong `noi-dung/seo/tu-khoa.md`.

## Từ khoá
- Chính: **mẫu nhà đã thi công Hà Nội**.
- Phụ (đúng loại hình có trong 48 mẫu `houseModels`): mẫu nhà ống 4 tầng · mẫu nhà phố 2 tầng hiện đại · mẫu biệt thự 2 tầng mái Thái · mẫu biệt thự tân cổ điển · công trình nhà ở đã thi công.
- Không gắn tên huyện/địa điểm cho mẫu (chưa có dữ liệu thật).

## Meta
`meta_title` ≤ 60 ký tự; `meta_description` 140–158 ký tự (bản cũ 122).

## Dàn ý
1. Hero: H1 có từ khoá (VD "Mẫu nhà Gia Khánh đã thi công tại Hà Nội"); lead 40–60 chữ: 48 mẫu nhà đã thi công, nhóm loại hình, có thể thi công theo mẫu hoặc điều chỉnh theo diện tích, nhu cầu.
2. **Gia Khánh đã thi công những kiểu nhà nào?** — đoạn 40–60 chữ + danh sách nhóm loại hình (chỉ loại có trong `houseModels`).
3. **Lưới mẫu nhà** — ghi chú dev: thay tiêu đề thẻ "Mẫu nhà N" bằng tên loại hình từ `houseModels` (VD "Mẫu 03: nhà 2 tầng mái Thái"); alt mô tả loại hình + "Gia Khánh đã thi công". Không thêm diện tích/địa điểm/năm.
4. **Có thể xây theo mẫu có sẵn không?** — có, hoặc điều chỉnh theo diện tích và nhu cầu; giá ước tính từng mẫu xem `/bao-gia/` (bảng theo mẫu); thiết kế xem trang thiết kế.
5. **Công trình thi công thực tế** — 1 đoạn giới thiệu các trang `/du-an/<slug>/` (ảnh thi công thực tế: đổ bê tông, nội thất, quán cà phê…) nếu index đang liệt kê; không bịa thông tin hạng mục/địa điểm.
6. FAQ ngắn (3–4): xây theo mẫu được không; mẫu này giá khoảng bao nhiêu (link `/bao-gia/` bằng chữ); có ảnh trước – trong – sau không (trả lời trung thực: đang cập nhật theo từng công trình); công trình ở đâu (chưa có dữ liệu → câu trung tính "Gia Khánh nhận công trình tại Hà Nội và các huyện lân cận", không gắn mẫu với địa điểm).
7. CTA + form (giữ như hiện có).

## Trang con `/du-an/<slug>/` (T7)
Đề xuất cho dev: title/description dùng `name` + "Gia Khánh thi công" và category nếu có; không bịa địa điểm. Không cần viết từng trang.

## Link (có `/` cuối)
`/bao-gia/` · `/dich-vu/xay-nha-tron-goi/` · `/dich-vu/thiet-ke-kien-truc-noi-that/` · `/lien-he/`.

## Schema
`BreadcrumbList` (có sẵn), `FAQPage` qua `Faq.astro`.
