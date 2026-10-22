# Brief — /lien-he

File đích: `noi-dung/lien-he.md` (tạo mới; frontmatter `slug: lien-he`, `url: /lien-he/`, `meta_title`, `meta_description`). Nội dung hiện tại: `src/pages/lien-he.astro`, `src/data/company.ts`.
Chuẩn: `noi-dung/dich-vu-xay-nha-tron-goi.md`. **Quy tắc chung** ở cuối `noi-dung/seo/brief/sua-chua-cai-tao-nha.md`. Từ khoá: mục `/lien-he` + X14.

## Từ khoá
- Chính: **liên hệ Gia Khánh xây dựng**.
- Phụ: số điện thoại Gia Khánh xây dựng · địa chỉ Gia Khánh xây dựng Đông Anh · đặt lịch khảo sát nhà miễn phí · nhận báo giá xây nhà miễn phí.
- NAP đồng nhất: tên đầy đủ + địa chỉ + SĐT lấy từ `company`, giống footer và schema.

## Meta
`meta_title` ≤ 60 ký tự; `meta_description` 140–158 ký tự (bản cũ 113): SĐT/Zalo, trụ sở Đông Anh, khảo sát miễn phí.

## Dàn ý (trang ngắn, chuyển đổi là chính)
1. Hero: H1 "Liên hệ Gia Khánh…" + lead 40–60 chữ: gọi/Zalo/để lại số; kỹ sư khảo sát miễn phí.
2. **Bạn đang có kế hoạch xây hoặc sửa nhà?** — form (giữ) + 1 đoạn: cần chuẩn bị gì cho buổi khảo sát (địa chỉ, nhu cầu, ảnh hiện trạng nếu có — suy luận, ghi Đã suy diễn).
3. **Thông tin liên hệ** — tên đầy đủ, MST, trụ sở, hotline/Zalo, email/fanpage nếu có trong `company` (placeholder → không hiện), giờ làm việc `[cần xác nhận]`, bản đồ (giữ iframe).
4. **Khu vực phục vụ** — 1 câu từ `company.area`.
5. FAQ 3–4: khảo sát có miễn phí không, cần chuẩn bị gì; nhận công trình khu vực nào; để lại số bao lâu được gọi lại (`[cần xác nhận]` → câu trung tính); giờ làm việc (`[cần xác nhận]` → câu trung tính hoặc bỏ).

## Link (có `/` cuối)
`/bao-gia/` · `/dich-vu/` · `/du-an/`.

## Schema
`BreadcrumbList` (có sẵn), `FAQPage` qua `Faq.astro`.
