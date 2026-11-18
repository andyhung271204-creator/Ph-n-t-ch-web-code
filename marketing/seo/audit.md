# Audit SEO + AI SEO — Gia Khánh

Ngày: 2026-10-21 · Phạm vi: toàn site (bổ sung các trang còn lại cùng ngày).
Nguồn: `npm run build` → `dist/client/`, live `https://xaydunggiakhanh.vn`.

## Lỗi kỹ thuật toàn site

| # | Lỗi | Mức | Ghi chú |
|---|---|---|---|
| T1 | ✅ Đã sửa 2026-10-21. Link nội bộ không có `/` cuối (`/dich-vu/xay-nha-tron-goi`), canonical + sitemap có `/` cuối → mọi click nội bộ bị **307** sang bản có `/` | Cao | Live đã xác nhận 307. Sửa: thống nhất `trailingSlash` trong `astro.config` hoặc thêm `/` vào `navLinks`, `services`… |
| T2 | ✅ Đã sửa (`src/pages/llms.txt.ts`). Không có `llms.txt` (live trả 404) | Trung bình | Tạo `public/llms.txt` ở bước 5 |
| T3 | `robots.txt` chưa nêu rõ chính sách cho bot AI (`OAI-SearchBot`, `PerplexityBot`, `Claude-SearchBot`, `Google-Extended`) | Thấp | Hiện `Allow: /` cho tất cả — không chặn, chỉ chưa tường minh |
| T4 | ✅ Đã sửa cho trang dịch vụ (Service, FAQPage qua `Faq.astro`, BreadcrumbList qua `PageHeader.astro`); còn thiếu ở cẩm nang (T6). JSON-LD chỉ có `GeneralContractor` ở mọi trang; thiếu `Service`, `FAQPage`, `BreadcrumbList` trên trang con | Cao | Trang có breadcrumb hiển thị và FAQ nhưng không có schema tương ứng |
| T5 | Giá trị chưa xác nhận hiển thị "Đang cập nhật" (cờ `daXacNhan = false`) | Trung bình | Trang xây nhà trọn gói có **7** chỗ "Đang cập nhật" (3 dòng giá × 2 + thời gian thi công…) — yếu tín hiệu tin cậy, AI không trích được |

## `/dich-vu/xay-nha-tron-goi`

**Hiện trạng**
- Title: `Xây nhà trọn gói tại Hà Nội | Gia Khánh` (40 ký tự) — tốt.
- Description (~155 ký tự) có từ khoá chính, lợi ích, CTA — tốt.
- H1: "Xây nhà trọn gói tại Hà Nội: một đầu mối lo từ móng đến chìa khóa" — có từ khoá, hơi dài.
- H2: Dịch vụ này dành cho ai · Trọn gói gồm những hạng mục nào · Đơn giá tham khảo theo m² · Quy trình 6 bước · Vì sao chọn Gia Khánh · Bảo hành bằng văn bản · Câu hỏi thường gặp · CTA.
- 8 FAQ (dùng `Faq.astro`), ~1.600 chữ cả menu/footer.
- Link nội bộ: chỉ menu/footer + `/bao-gia`, `/dich-vu/sua-chua-cai-tao-nha`. Không link `/du-an`, không link bài cẩm nang liên quan.
- Ảnh: 3 phối cảnh, alt mô tả tốt.

**Điểm yếu nội dung**
1. H2 dạng nhãn ("Đơn giá tham khảo theo m²"), không phải câu hỏi khách gõ ("Xây nhà trọn gói giá bao nhiêu 1m²?") → khó khớp truy vấn hội thoại / AI Overviews.
2. Section không mở bằng câu trả lời thẳng; đoạn mở đầu ngắn, thiếu định nghĩa "xây nhà trọn gói là gì" — dạng đoạn AI hay trích.
3. Bảng giá chỉ chốt được nhà phố 2 – 5 tầng (3,3 tr / 5 tr đ/m²), 3 loại còn lại "Đang cập nhật".
4. Thiếu ví dụ tính chi phí cụ thể (vd. nhà 4 tầng 50 m² đất) — loại nội dung AI và người đọc cần nhất; hiện đẩy sang `/bao-gia`.
5. Thiếu so sánh trọn gói vs phần thô vs tự xây (khách hay hỏi "nên xây trọn gói hay phần thô").
6. Thiếu thời gian thi công, bảo hành có số cụ thể (đang placeholder).
7. Không có bằng chứng: không link công trình (`/du-an`), không trích đánh giá khách.
8. Nguy cơ ăn thịt từ khoá với `/cam-nang/chi-phi-xay-nha-pho-tron-goi` và `/bao-gia` (cùng ý định "giá xây nhà trọn gói").
9. Không có địa danh cụ thể ngoài "Hà Nội" trong thân bài (Đông Anh, Gia Lâm… chỉ ở FAQ khu vực).

## Bổ sung: các trang còn lại (2026-10-21, sau khi sửa T1)

Trạng thái chung: `/dich-vu/xay-nha-tron-goi/` đã làm xong (chuẩn mẫu). 3 trang dịch vụ còn lại đã có `Service` + `BreadcrumbList` + `FAQPage`. Mọi trang có `BreadcrumbList` trừ trang chủ. Mọi trang có 1 "Đang cập nhật" ở footer (giờ làm việc) — chấp nhận.

| # | Lỗi kỹ thuật bổ sung | Mức |
|---|---|---|
| T6 | Bài cẩm nang thiếu `Article`; FAQ trong bài viết bằng `<details>` trong Markdown nên **không** sinh `FAQPage` | Cao |
| T7 | `/du-an/cong-trinh-NN/` mỏng (~36 chữ), title/H1 chung chung "Công trình 01", không có địa điểm/hạng mục | Trung bình (chờ dữ liệu thật, hồ sơ mục 4) |
| T8 | Trang chủ không có câu hỏi/FAQ; meta description 169 ký tự (dài) | Thấp |

| Trang | Title / H1 hiện tại | Điểm yếu |
|---|---|---|
| `/` | "Xây nhà trọn gói, sửa nhà tại Hà Nội" (title + H1) | **Xung đột từ khoá** với `/dich-vu/xay-nha-tron-goi/` (cùng "xây nhà trọn gói Hà Nội"). ~700 chữ, H2 nhãn; không có đoạn định nghĩa Gia Khánh là ai/làm gì ở đâu dạng AI trích được ngoài hero; desc 169 ký tự. |
| `/gioi-thieu/` | "Giới thiệu" / "Giới thiệu Gia Khánh" | Title không có từ khoá (nên có "công ty xây dựng Đông Anh/Hà Nội"). H2 nhãn; thiếu link sang `/du-an/`, `/bao-gia/`. Kinh nghiệm "trên 10 năm" (đội ngũ) — đúng quy tắc nhưng hồ sơ còn mâu thuẫn 7/10. |
| `/dich-vu/` | "Dịch vụ xây dựng, sửa chữa nhà ở Hà Nội" / H1 "Dịch vụ" | H1 quá ngắn, không từ khoá. Lặp nội dung gói/quy trình/bảo hành của trang con và `/bao-gia/` (nguy cơ trùng). 5 FAQ. |
| `/dich-vu/sua-chua-cai-tao-nha/` | title 66 ký tự (dài) | H2 nhãn ("Khi nào nhà cần sửa", "Ba mảng dịch vụ"); không link trong thân bài (chỉ breadcrumb) — thiếu link cẩm nang "kiểm tra trước khi cải tạo", `/bao-gia/`, `/du-an/`. Từ khoá địa phương "sửa nhà Đông Anh" chưa có. |
| `/dich-vu/thiet-ke-kien-truc-noi-that/` | ổn | H2 nhãn; không link thân bài (thiếu cẩm nang "lưu ý thiết kế nhà phố", xây nhà trọn gói). Đơn giá thiết kế chưa xác nhận. |
| `/dich-vu/hoan-thien-thi-cong-noi-that/` | H1 dài (~15 từ) | 2 "Đang cập nhật"; ít link (thiếu cẩm nang "chọn vật liệu hoàn thiện", xây nhà trọn gói). H2 một phần đã là câu hỏi. |
| `/bao-gia/` | "Báo giá xây nhà theo mẫu tại Hà Nội" / H1 "Báo giá xây nhà" | Sitemap yêu cầu: bảng đơn giá/m², gói, **cách tính diện tích + ví dụ**, bảo hành, **FAQ** — hiện thiếu FAQ, thiếu cách tính/ví dụ, không link thân bài (cẩm nang diện tích, chi phí, dịch vụ). Là trang giữ cụm "báo giá/đơn giá xây nhà 1m²" (X1). |
| `/du-an/` | "Mẫu nhà Gia Khánh đã thi công" / H1 "Công trình" | ~290 chữ, 48 H3 "Mẫu nhà N" vô nghĩa với SEO. Không đoạn mở đầu, không link sang dịch vụ/báo giá. |
| `/lien-he/` | "Liên hệ – Nhận báo giá miễn phí" | Mỏng (~190 chữ); desc 113 ký tự; thiếu giờ làm việc (chưa xác nhận), khu vực phục vụ, thời gian phản hồi. Có thể thêm 3–4 FAQ ngắn (khảo sát, khu vực). |
| `/cam-nang/` | "Cẩm nang xây nhà" | Mỏng (~115 chữ), không đoạn giới thiệu. |
| 5 bài cẩm nang | title/desc tốt, 1.500–2.150 chữ | H2 đánh số ("1. …") — nên bỏ số, chuyển dạng câu hỏi; thiếu `Article` + `FAQPage`; chưa có tác giả/ngày cập nhật hiển thị (E-E-A-T). `chi-phi-xay-nha-pho-tron-goi` và `cach-tinh-dien-tich-xay-dung` cần giữ ranh giới X1/X2 với `/bao-gia/`. |
