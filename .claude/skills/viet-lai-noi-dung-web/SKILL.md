---
name: viet-lai-noi-dung-web
description: Viết lại nội dung website Gia Khánh theo chuẩn SEO và AI SEO (Google, ChatGPT, Perplexity, Gemini). Kiểm tra hiện trạng, lập bản đồ từ khoá, viết brief, viết, duyệt rồi đưa lên code. Dùng khi người dùng gõ /viet-lai-noi-dung-web hoặc nhờ tối ưu SEO / viết lại nội dung trang web.
---

# Viết lại nội dung web chuẩn SEO + AI SEO

Tham số: tên trang (`xay-nha-tron-goi`, `bao-gia`, `trang-chu`…) hoặc `tat-ca`. Không có → hỏi.
Thư mục làm việc: `noi-dung/seo/`. Luôn `git pull` trước khi bắt đầu (bài cẩm nang có thể được sửa qua CMS).

Thứ tự khi `tat-ca`: 4 trang dịch vụ → `/bao-gia` → `/` → `/gioi-thieu` → `/du-an`, `/lien-he`, `/dich-vu` → cẩm nang. Làm **1 trang dịch vụ trước làm mẫu**, người dùng duyệt giọng văn rồi mới làm song song phần còn lại.

## 0. Kiểm tra hiện trạng (bỏ qua nếu `noi-dung/seo/audit.md` < 30 ngày)
- `npm run build`, đọc HTML trong `dist/` của các trang cần làm: title, description, H1–H3, JSON-LD, link nội bộ.
- Áp dụng skill `seo-audit` (on-page, local SEO) và `ai-seo` (`references/agent-readiness.md`, `content-patterns.md`).
- Ghi `noi-dung/seo/audit.md`: lỗi kỹ thuật + điểm yếu nội dung từng trang.

## 1. Bản đồ từ khoá — BẮT BUỘC dừng
- Gọi agent `seo-keyword` (chờ kết quả) với danh sách trang + audit → `noi-dung/seo/tu-khoa.md`.
- Hiện bảng tổng hợp + xung đột từ khoá, hỏi người dùng duyệt. Kết thúc lượt. Bỏ qua bước này nếu file đã có và người dùng đã duyệt.

## 2. Brief từng trang
Ghi `noi-dung/seo/brief/<slug>.md`: từ khoá chính/phụ/địa phương, dàn ý H1–H3 (H2 dạng câu hỏi khi hợp), câu hỏi FAQ, link nội bộ, schema cần có (`Service`, `FAQPage`, `BreadcrumbList`, `Article`), điểm yếu cần sửa từ audit, nguồn dữ kiện (`noi-dung/ho-so-doanh-nghiep.md`, `src/data/company.ts`).

## 3. Viết
Gọi agent `contentweb` cho từng trang (nhiều trang → gọi song song trong một lượt), prompt gồm:
- Đường dẫn brief và file đích `noi-dung/<trang>.md` (ghi đè; giữ format frontmatter `slug`, `url`, `meta_title`, `meta_description` như `noi-dung/dich-vu-xay-nha-tron-goi.md`). Trang chưa có file → tạo theo format đó.
- Đọc `.claude/skills/copywriting/SKILL.md` và `references/ai-tells.md`; mỗi section mở bằng câu trả lời thẳng 40–60 chữ.
- Được phép sửa đúng file đích.

## 4. Duyệt — BẮT BUỘC dừng
- Gọi agent `seo-reviewer` cho từng bản nháp. "Cần sửa" → gửi lại `contentweb` kèm bảng sửa, tối đa 2 vòng; vẫn chưa đạt → nêu cho người dùng.
- Hiện cho người dùng: tóm tắt từng trang (H1, meta title, số FAQ), danh sách **Đã suy diễn** và **Cần xác nhận**. Hỏi duyệt. Kết thúc lượt.

## 5. Đưa lên code (sau khi được duyệt)
- Cập nhật `src/pages/*.astro`, `src/components/dich-vu/*.astro`, `src/data/*.ts` theo bản đã duyệt. Tái dùng component có sẵn (`Faq.astro`, `SectionHeading.astro`, `Bullets.astro`…); section mới về bố cục thì qua Stitch theo `workflow.md`.
- Schema JSON-LD: giữ `GeneralContractor` trong `BaseLayout.astro`, thêm theo brief (`Service` trang dịch vụ, `FAQPage` nơi có FAQ, `BreadcrumbList` trang con, `Article` bài cẩm nang). Dữ liệu lấy từ `src/data/company.ts`, không hard-code.
- Lần đầu: tạo `public/llms.txt` (giới thiệu ngắn, danh sách trang chính + mô tả 1 dòng) theo `ai-seo`.

## 6. Kiểm tra & báo lại
- `npm run build` không lỗi; grep `dist/` xác nhận title, description, JSON-LD đúng mỗi trang.
- Screenshot 375px và 1280px theo `workflow.md`; không vỡ bố cục.
- Báo lại: link localhost từng trang đã sửa, từ khoá chính mỗi trang, placeholder cần công ty điền, đề xuất bài cẩm nang mới từ `tu-khoa.md`.
