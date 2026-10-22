# Brief — /dich-vu (trang tổng)

File đích: `noi-dung/dich-vu.md` (tạo mới; frontmatter `slug: dich-vu`, `url: /dich-vu/`, `meta_title`, `meta_description`). Nội dung hiện tại: `src/pages/dich-vu/index.astro`, `src/data/services.ts`, `src/data/company.ts`.
Chuẩn: `noi-dung/dich-vu-xay-nha-tron-goi.md`. **Quy tắc chung** ở cuối `noi-dung/seo/brief/sua-chua-cai-tao-nha.md`. Từ khoá: mục `/dich-vu` + **X9** trong `noi-dung/seo/tu-khoa.md`.

## Từ khoá
- Chính: **dịch vụ xây dựng nhà ở Hà Nội**.
- Phụ: dịch vụ xây dựng và sửa chữa nhà · xây nhà, sửa nhà, thiết kế nội thất Hà Nội.
- **X9:** trang tổng KHÔNG lặp bảng gói, quy trình chi tiết, bảng bảo hành và FAQ của trang con / `/bao-gia/`. Mỗi thứ 1–2 câu + link.

## Meta
`meta_title` ≤ 60; `meta_description` 140–158.

## Dàn ý
1. Hero: H1 "Dịch vụ xây dựng và sửa chữa nhà ở tại Hà Nội" (thay H1 "Dịch vụ"); lead 40–60 chữ: 4 nhóm dịch vụ của Công ty TNHH Xây dựng và Đầu tư Gia Khánh.
2. **4 nhóm dịch vụ** — mỗi dịch vụ: tên, 1–2 câu, "Xem chi tiết" (link). Dùng `description` của `services.ts` hoặc viết mới ngắn.
3. **Bạn đang ở tình huống nào, chọn dịch vụ nào?** — bảng "tình huống → dịch vụ" (khoảng trống đối thủ): có đất muốn xây mới → xây nhà trọn gói; nhà thấm/nứt/xuống cấp → sửa chữa; cần bản vẽ trước → thiết kế; xong phần thô / làm mới nội thất → hoàn thiện; chưa chắc sửa hay xây lại → bài cẩm nang kiểm tra nhà cũ.
4. **Gói thi công và giá** — 2 câu: có 3 gói (phần thô + NC hoàn thiện, trọn gói, nhân công), xem đơn giá ở `/bao-gia/`. Không bảng.
5. **Làm việc với Gia Khánh thế nào?** — 2–3 câu tóm 6 bước + bảo hành bằng văn bản, link trang con. Không bảng bảo hành.
6. FAQ cấp hub (4 câu): nên xây mới hay sửa, bắt đầu từ đâu; có làm cả thiết kế và thi công không; khảo sát, báo giá có miễn phí không; xem giá ở đâu.
7. CTA.

## Link (có `/` cuối)
4 trang dịch vụ · `/bao-gia/` · `/cam-nang/kiem-tra-truoc-khi-cai-tao-nha-cu/` · `/du-an/` · `/lien-he/`.

## Schema
`BreadcrumbList` (có sẵn), `FAQPage` qua `Faq.astro` (thay 5 FAQ cũ về xây nhà trọn gói).
