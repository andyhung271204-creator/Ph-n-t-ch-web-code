# Brief — /dich-vu/sua-chua-cai-tao-nha

File đích: `noi-dung/dich-vu-sua-chua-cai-tao-nha.md` (ghi đè, giữ frontmatter `slug`, `url`, `meta_title`, `meta_description`).
Chuẩn giọng văn + cấu trúc: `noi-dung/dich-vu-xay-nha-tron-goi.md` và `marketing/seo/brief/xay-nha-tron-goi.md` (đã duyệt). **Đọc "Quy tắc chung" ở cuối brief này trước.**
Từ khoá: mục `/dich-vu/sua-chua-cai-tao-nha` trong `marketing/seo/tu-khoa.md` (đã duyệt). Audit: `marketing/seo/audit.md`.

## Từ khoá
- Chính: **sửa chữa cải tạo nhà Hà Nội** (meta title, H1, câu đầu trang, 1 H2).
- Phụ: sửa nhà trọn gói Hà Nội · chống thấm nhà · xử lý nứt tường nhà · cải tạo nhà cũ / nâng tầng · sửa chữa điện nước nhà ở · bảo trì nhà ở.
- Địa phương: sửa nhà Đông Anh, Gia Lâm, Hoài Đức, Thanh Trì, Hà Đông — 1 đoạn "khu vực" + gắn tự nhiên vào thân bài.
- Ranh giới: "sửa nhà trọn gói" thuộc trang này (X3). Phần kiểm tra nhà cũ chi tiết, nguyên nhân thấm/nứt sâu, "sửa hay xây lại", cấp phép thuộc cẩm nang `kiem-tra-truoc-khi-cai-tao-nha-cu` (X10): ở đây mỗi ý chỉ 2 câu rồi link. Không dùng "xây nhà trọn gói" làm H2.

## Meta
- `meta_title` ≤ 60 ký tự (bản hiện tại 66, quá dài). Code tự thêm `| Gia Khánh`; ghi trong frontmatter có `| Gia Khánh` như file mẫu.
- `meta_description` 140–158 ký tự, có từ khoá chính, lợi ích thật (khảo sát miễn phí, báo giá từng hạng mục, bảo hành bằng văn bản), CTA.

## Dàn ý (H2 dạng câu hỏi khi hợp, mỗi section mở bằng đoạn trả lời thẳng 40–60 chữ)
1. Hero: H1 chứa từ khoá chính; lead 40–60 chữ.
2. **Khi nào nhà cần sửa chữa, cải tạo?** — dấu hiệu (thấm, nứt, điện nước cũ, thiếu công năng); link cẩm nang kiểm tra nhà cũ.
3. **Gia Khánh nhận sửa chữa, cải tạo những hạng mục nào?** — 3 mảng: cải tạo – sửa chữa nhà; chống thấm và xử lý nứt; điện nước và bảo trì. Không nhắc phá dỡ / ép cọc.
4. **Nhà thấm, nứt tường: nguyên nhân thường gặp và cách xử lý** — bảng "triệu chứng → nguyên nhân thường gặp → hướng xử lý" (thấm trần tầng dưới, nứt chéo/ngang, ống rỉ). Nguyên tắc "tìm nguyên nhân trước khi sơn". Không nêu tên vật liệu/thương hiệu chưa có trong hồ sơ, không hứa số năm bảo hành.
5. **Chi phí sửa nhà tính theo gì?** — trả lời định tính: tính theo hạng mục sau khảo sát, yếu tố ảnh hưởng. **Không nêu đơn giá.** Link `/bao-gia/`.
6. **Sửa nhà, nâng tầng có cần xin giấy phép không?** — 2 câu; nêu "tuỳ quy mô và hiện trạng, đối chiếu quy định hiện hành" rồi link cẩm nang. `[cần xác nhận: phạm vi hỗ trợ pháp lý của Gia Khánh]`.
7. **Quy trình sửa chữa tại Gia Khánh** — 6 bước (tên bước lấy từ `src/data/company.ts`); khảo sát miễn phí.
8. **Bảo hành** — bảng 4 hạng mục, số năm giữ placeholder `[cần xác nhận]` (hồ sơ gợi ý nhưng chưa chốt; không tự chốt).
9. **Gia Khánh nhận sửa nhà ở khu vực nào?** — đoạn địa phương (trụ sở Đông Anh; danh sách `company.area` / `areaList` đã công khai nên không để placeholder ngoại thành).
10. **FAQ về sửa chữa, cải tạo nhà** — 7–8 câu, trả lời ≤ 50 chữ, câu đầu trả lời thẳng: vì sao nhà thấm dù đã sơn lại; thấm trần có phải đục cả sàn không; vết nứt có nguy hiểm không (2 câu + link); sửa có phải chuyển ra ngoài ở không; sửa mất bao lâu (placeholder thời gian); chi phí tính thế nào; nhà trong ngõ nhỏ có sửa được không (placeholder điều kiện); nên sửa hay xây lại (2 câu + link).
11. CTA cuối + form (giữ như file mẫu).

## Link nội bộ (viết có `/` cuối)
`/cam-nang/kiem-tra-truoc-khi-cai-tao-nha-cu/` (≥2 chỗ) · `/bao-gia/` · `/du-an/` ("công trình Gia Khánh đã thi công", không gọi tên công trình) · `/dich-vu/hoan-thien-thi-cong-noi-that/` · `/dich-vu/xay-nha-tron-goi/` (1 lần, khi nhà cũ nên xây lại) · `#bao-gia`.

## Schema (dev làm ở bước 5)
`Service` (tự sinh trong `src/pages/dich-vu/[slug].astro`), `FAQPage` (tự sinh từ `Faq.astro`; bỏ khỏi schema câu còn placeholder), `BreadcrumbList` (`PageHeader.astro`).

## Điểm yếu cần sửa (từ audit)
H2 nhãn → câu hỏi; thêm link thân bài (hiện chỉ có breadcrumb); thêm từ khoá địa phương "sửa nhà Đông Anh"; giảm title; thêm bảng triệu chứng.

## Quy tắc chung (mọi brief đợt này)
- Kinh nghiệm: **"đội ngũ có trên 10 năm kinh nghiệm"** (người dùng đã chốt 2026-10-21, không placeholder). Không viết "công ty X năm" (thành lập 2026).
- Ảnh trong `src/assets/mau-nha/` là công trình Gia Khánh **đã thi công thật** (người dùng xác nhận); được ghi "đã thi công". Không có địa điểm/quy mô/năm cho từng công trình → không bịa.
- Không bịa số liệu, giá, bảo hành, thời gian thi công, thời gian phản hồi, số công trình, chứng chỉ. Mục `[cần xác nhận]` trong hồ sơ → giữ `[cần xác nhận: ...]`.
- Chỉ các đơn giá đã hiển thị công khai: nhà phố/nhà ống 2–5 tầng phần thô + NC hoàn thiện 3.300.000 đ/m², trọn gói 5.000.000 đ/m², nhân công xây dựng từ 1.400.000 đ/m². Câu ghi chú giá nguyên văn: "Đơn giá chưa gồm VAT, chưa gồm phá dỡ và ép cọc. Báo giá chính xác sau khi khảo sát thực tế."
- Không giới thiệu dịch vụ phá dỡ / ép cọc. Không "số 1", "tốt nhất", "hàng đầu". Không em dash. Không phí thiết kế miễn/giảm (chưa xác nhận).
- Tên đầy đủ, không để "Gia Khánh" đơn lẻ ở những chỗ định nghĩa: "Công ty TNHH Xây dựng và Đầu tư Gia Khánh" (X14).
- Nội dung pháp lý (giấy phép, Nghị định 207/2026/NĐ-CP): **chưa đối chiếu văn bản gốc** → không khẳng định, chỉ nói chung và link.
- Mọi URL nội bộ có `/` cuối. Kết file bằng "# Kiểm tra lại" với **Đã suy diễn** và **Cần xác nhận**.
