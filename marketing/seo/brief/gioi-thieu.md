# Brief — /gioi-thieu

File đích: `noi-dung/gioi-thieu.md` (tạo mới; frontmatter `slug: gioi-thieu`, `url: /gioi-thieu/`, `meta_title`, `meta_description` như `noi-dung/dich-vu-xay-nha-tron-goi.md`). Nội dung hiện tại: `src/pages/gioi-thieu.astro`, `src/data/company.ts` (`about`, `vision`, `mission`, `values`, `team`…).
Chuẩn: bản mẫu `noi-dung/dich-vu-xay-nha-tron-goi.md`, `noi-dung/trang-chu.md`. **Quy tắc chung** ở cuối `marketing/seo/brief/sua-chua-cai-tao-nha.md`. Từ khoá: mục `/gioi-thieu` + X6, X14 trong `marketing/seo/tu-khoa.md`.

## Từ khoá
- Chính: **Công ty TNHH Xây dựng và Đầu tư Gia Khánh**.
- Phụ: công ty xây dựng Đông Anh (tiêu điểm địa phương của trang này) · Gia Khánh xây dựng Đông Anh · thông tin công ty Gia Khánh (MST, địa chỉ, người đại diện) · đội ngũ kỹ sư, kiến trúc sư xây nhà ở Hà Nội.
- Ý định: kiểm tra nhà thầu trước khi liên hệ. Đây là trang AI trích khi được hỏi "Gia Khánh là công ty gì".

## Meta
`meta_title` ≤ 60 ký tự (có tên đầy đủ hoặc "Gia Khánh" + "công ty xây dựng Đông Anh"); `meta_description` 140–158 ký tự: tên đầy đủ, MST, Đông Anh, đội ngũ, dịch vụ.

## Dàn ý (mỗi section mở bằng đoạn trả lời thẳng 40–60 chữ; H2 dạng câu hỏi khi hợp)
1. Hero: H1 có tên công ty (VD "Giới thiệu Công ty TNHH Xây dựng và Đầu tư Gia Khánh"); lead định nghĩa: ai, ở đâu (xã Đông Anh, Hà Nội), MST, làm gì.
2. **Gia Khánh là công ty gì?** — từ `company.about` / hồ sơ; công ty mới thành lập (KHÔNG hiển thị ngày thành lập), đội ngũ có trên 10 năm kinh nghiệm.
3. **Tầm nhìn, sứ mệnh và giá trị cốt lõi** — lấy nguyên ý `company.ts` (5 giá trị: Minh bạch · Tận tâm · Đúng hẹn · Chất lượng · Trách nhiệm).
4. **Gia Khánh làm những dịch vụ nào?** — 4 dịch vụ + link từng trang; nói rõ không giới thiệu phá dỡ, ép cọc (chỉ cần không nhắc).
5. **Đội ngũ gồm những ai?** — hơn 10 người: kỹ sư xây dựng, kiến trúc sư, quản lý thi công; người đứng đầu ông Đỗ Như Duy (chức danh `[cần xác nhận]`).
6. **Thông tin pháp lý để bạn đối chiếu** — tên đầy đủ, tên tiếng Anh, MST 0111442677, trụ sở, người đại diện, hotline (từ `company`).
7. **Xem công trình và báo giá** — 1 đoạn + link `/du-an/`, `/bao-gia/`, `/lien-he/`. Không số công trình.
8. FAQ ngắn (3–4): Gia Khánh có trụ sở ở đâu; MST để tra cứu; đội ngũ có kinh nghiệm bao lâu (đội ngũ, không phải công ty); có xem công trình đã làm không.

## Link (có `/` cuối)
4 trang dịch vụ · `/du-an/` · `/bao-gia/` · `/lien-he/`.

## Schema
`BreadcrumbList` (có sẵn), `FAQPage` qua `Faq.astro`. `GeneralContractor` ở layout.

## Điểm yếu cần sửa (audit)
Title "Giới thiệu" không có từ khoá; H2 nhãn; thiếu link `/du-an/`, `/bao-gia/`.
