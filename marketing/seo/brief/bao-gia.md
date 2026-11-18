# Brief — /bao-gia

File đích: `noi-dung/bao-gia.md` (chưa có, tạo mới theo format frontmatter `slug`, `url`, `meta_title`, `meta_description` như `noi-dung/dich-vu-xay-nha-tron-goi.md`). Nội dung hiện tại trên web: `src/pages/bao-gia.astro`, dữ liệu `src/data/company.ts` (`packages`, `prices`, bảng 48 mẫu nhà).
Chuẩn: `noi-dung/dich-vu-xay-nha-tron-goi.md`. **Quy tắc chung** ở mục cuối `marketing/seo/brief/sua-chua-cai-tao-nha.md` — đọc và áp dụng.
Từ khoá: mục `/bao-gia` + X1, X2, X15, X17 trong `marketing/seo/tu-khoa.md`.

## Từ khoá
- Chính: **báo giá xây nhà Hà Nội**.
- Phụ: đơn giá xây nhà trọn gói theo m² · giá xây nhà phần thô 1m2 · bảng giá xây nhà trọn gói · báo giá xây nhà theo mẫu · giá nhân công xây nhà · xây nhà 3 tầng 50m² hết bao nhiêu (chỉ 1 câu + link bài cẩm nang sẽ có, chưa link nếu bài chưa tồn tại).
- Địa phương: không cần; một câu "áp dụng cho nhà ở Hà Nội và các huyện lân cận".
- **Trang này GIỮ cụm giá/đơn giá (X1).** Cách tính diện tích đầy đủ + ví dụ 5×20 m thuộc cẩm nang `cach-tinh-dien-tich-xay-dung` (X2, X17): ở đây tóm tắt 3–4 dòng + link. Yếu tố ảnh hưởng chi phí thuộc cẩm nang `chi-phi-xay-nha-pho-tron-goi`.

## Meta
`meta_title` ≤ 60 ký tự; `meta_description` 140–158 ký tự: từ khoá chính, "đơn giá theo m² phần thô và trọn gói", "chưa gồm VAT" nếu còn chỗ, CTA.

## Dàn ý (giữ các khối dữ liệu đã có trên trang; viết mới phần chữ)
1. Hero: H1 chứa từ khoá chính; lead 40–60 chữ: báo giá ước tính theo m² sàn quy đổi, gồm 3 gói, kèm bảng theo mẫu nhà; ghi chú VAT.
2. **Xây nhà 1 m² hết bao nhiêu?** — 3 gói (`packages`): Phần thô + NC hoàn thiện 3.300.000; Trọn gói 5.000.000; Nhân công xây dựng từ 1.400.000 đ/m² (nhà phố, nhà ống 2–5 tầng); gồm / chủ nhà tự lo. Các loại nhà khác: "Đang cập nhật" hoặc `[cần xác nhận: đơn giá]` (nhà cấp 4, tân cổ điển / từ 6 tầng, biệt thự). Ghi chú giá nguyên văn ngay cạnh số.
3. **Diện tích tính giá là diện tích nào?** — 3–4 dòng (móng, các tầng, tum/sân thượng quy đổi theo hệ số khác nhau, không phải diện tích đất) + link cẩm nang diện tích.
4. **Bảng giá theo mẫu nhà** — đoạn mở 40–60 chữ cho bảng 48 mẫu: ước tính = diện tích sàn quy đổi × đơn giá. **Ảnh là các mẫu nhà Gia Khánh đã thi công** (thống nhất với `/du-an/`, X15). Không nêu địa điểm/quy mô thực của từng mẫu.
5. **Vì sao báo giá giữa các nhà thầu chênh nhau?** — định tính, ngắn, link cẩm nang chi phí.
6. **Thanh toán và phát sinh** — thanh toán theo giai đoạn sau nghiệm thu; phát sinh chỉ làm khi chủ nhà đồng ý bằng văn bản/tin nhắn.
7. **Bảng đơn giá của UBND thành phố có phải giá xây nhà thực tế không?** — 1–2 câu làm rõ (bảng đơn giá xây mới nhà ở dùng tính bồi thường, không phải giá thị trường); không dẫn số hay văn bản cụ thể nếu chưa kiểm chứng.
8. **FAQ** (6–8 câu, trang hiện chưa có): xây nhà 1 m² hết bao nhiêu; trọn gói và phần thô khác nhau thế nào (2 câu + link `/dich-vu/xay-nha-tron-goi/`); diện tích tính giá là gì (2 câu + link); đơn giá đã gồm VAT, phá dỡ, ép cọc chưa; mẫu nhà trong bảng là công trình thật hay phối cảnh (đã thi công); thanh toán thế nào; giá nhân công riêng bao nhiêu; nhà 3 tầng 50 m² hết bao nhiêu (trả lời bằng cách tính ngắn dựa trên đơn giá đã xác nhận nếu phép tính đúng, hoặc chỉ link cẩm nang — ưu tiên link, không tự tính ví dụ dài).
9. **Nhận báo giá chi tiết** — CTA + form.

## Link nội bộ (có `/` cuối)
`/cam-nang/cach-tinh-dien-tich-xay-dung/` · `/cam-nang/chi-phi-xay-nha-pho-tron-goi/` · `/dich-vu/xay-nha-tron-goi/` · `/dich-vu/sua-chua-cai-tao-nha/` (khi khách chỉ cần sửa) · `/du-an/` · `/lien-he/`.

## Schema
`BreadcrumbList` đã có; thêm `FAQPage` tự sinh từ `Faq.astro` khi trang có FAQ. Dev cân nhắc `Offer` — chỉ gói đã xác nhận.

## Điểm yếu cần sửa (từ audit)
Thiếu FAQ; thiếu tóm tắt cách tính diện tích; không có link thân bài; H1 ngắn không có địa danh; mô tả mâu thuẫn ("phối cảnh tham khảo" vs "đã thi công").
