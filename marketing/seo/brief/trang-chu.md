# Brief — / (trang chủ)

File đích: `noi-dung/trang-chu.md` (chưa có, tạo mới theo format frontmatter `slug`, `url`, `meta_title`, `meta_description`; `slug: trang-chu`, `url: /`). Nội dung hiện tại: `src/pages/index.astro`, `src/components/HeroSlider.astro`, `src/data/company.ts`.
Chuẩn: `noi-dung/dich-vu-xay-nha-tron-goi.md`. **Quy tắc chung** ở mục cuối `marketing/seo/brief/sua-chua-cai-tao-nha.md` — đọc và áp dụng. Bố cục: `.claude/rules/homepage.md` (tối đa ~7 section, không bảng giá đầy đủ, không tin tức/khuyến mãi; **không làm trang dày**).
Từ khoá: mục `/ (trang chủ)` + X8, X14, X16 trong `marketing/seo/tu-khoa.md`.

## Từ khoá
- Chính: **công ty xây dựng nhà ở Hà Nội**.
- Phụ: công ty xây dựng và sửa chữa nhà ở · nhà thầu xây dựng nhà ở dân dụng Hà Nội · xây dựng Gia Khánh (thương hiệu) · dịch vụ xây dựng nhà ở (chỉ dẫn xuống `/dich-vu/`).
- Địa phương: "Hà Nội" + 1 lần nhắc trụ sở Đông Anh. **Không** lặp danh sách huyện làm tiêu điểm (X5, X16). "Công ty xây dựng Đông Anh" giao cho `/gioi-thieu/`.
- **Xử lý X8:** title và H1 **không** chứa "xây nhà trọn gói". Hướng: "Gia Khánh – công ty xây dựng, sửa chữa nhà ở tại Hà Nội" (hoặc biến thể ≤ 60 ký tự). "Xây nhà trọn gói" và "sửa nhà" chỉ ở tên thẻ dịch vụ và link.
- X14: luôn "Công ty TNHH Xây dựng và Đầu tư Gia Khánh" kèm Đông Anh / MST khi định nghĩa; không để "Gia Khánh" đơn lẻ ở chỗ AI cần nhận diện.

## Meta
`meta_title` ≤ 60 ký tự (có `| Gia Khánh` nếu còn chỗ); `meta_description` ≤ 155 ký tự (bản cũ 169): ai – làm gì – ở đâu, khảo sát miễn phí, CTA.

## Dàn ý
1. **Hero:** H1 theo X8; lead 40–60 chữ dạng định nghĩa đầy đủ: Công ty TNHH Xây dựng và Đầu tư Gia Khánh, trụ sở Đông Anh, Hà Nội, nhận xây nhà, sửa chữa – cải tạo, thiết kế, hoàn thiện nội thất cho gia đình. Nút "Nhận báo giá miễn phí", "Gọi ngay", "Chat Zalo".
2. **Con số** (nếu giữ): chỉ số thật — đội ngũ **trên 10 năm** kinh nghiệm, hơn 10 nhân sự, 4 nhóm dịch vụ, khảo sát miễn phí. Không bịa số công trình.
3. **Gia Khánh làm những dịch vụ nào?** — 4 thẻ ngắn (tên + 1 câu + "Xem chi tiết"): Xây nhà trọn gói · Sửa chữa – cải tạo nhà · Thiết kế kiến trúc & nội thất · Hoàn thiện & thi công nội thất. Mỗi thẻ link trang dịch vụ.
4. **Mẫu nhà Gia Khánh đã thi công** — 1 câu mở đầu + lưới + "Xem tất cả công trình" (`/du-an/`).
5. **Vì sao chọn Gia Khánh và làm việc theo quy trình nào?** — gộp "Vì sao chọn" + 6 bước; mở bằng câu trả lời thẳng; đưa dữ kiện kiểm chứng được cho người đang cân nhắc nhà thầu (MST, địa chỉ, hợp đồng ghi rõ giá trị – tiến độ – thanh toán theo giai đoạn – bảo hành, kỹ sư giám sát, báo cáo tiến độ qua Zalo). Không viết số năm kinh nghiệm *của công ty*.
6. **FAQ ngắn (4–5 câu)** — Gia Khánh là công ty gì, ở đâu; nhận công trình khu vực nào (Hà Nội và các huyện lân cận theo `company.area`); chọn nhà thầu xây nhà cần kiểm tra gì và Gia Khánh đáp ứng thế nào (chỉ dữ kiện thật); khảo sát, báo giá có miễn phí không; quy trình làm việc. Dev quyết vị trí FAQ để trang không dày; có thể gom làm accordion gọn trước footer.
7. **Cẩm nang** — 1 câu + 3 bài mới nhất/nổi bật (giữ cấu trúc hiện tại); không thêm tin tức.
(Không có CTA/form trên trang chủ theo `homepage.md`.)

## Link nội bộ (có `/` cuối)
4 trang dịch vụ · `/du-an/` · `/gioi-thieu/` (ở đoạn định nghĩa hoặc FAQ) · `/bao-gia/` (1 câu) · 2–3 bài cẩm nang · `/lien-he/`.

## Schema
`GeneralContractor` giữ ở layout. Thêm `FAQPage` khi trang có FAQ (tự sinh từ `Faq.astro`). Trang chủ không có BreadcrumbList.

## Điểm yếu cần sửa (từ audit)
Trùng từ khoá với trang xây nhà trọn gói (title + H1); H2 nhãn; thiếu đoạn "ai–làm gì–ở đâu" dạng AI trích; không FAQ; meta description 169 ký tự. Ngoài code: đề xuất đăng ký Google Business Profile (chủ công ty).
