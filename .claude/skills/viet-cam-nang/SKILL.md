---
name: viet-cam-nang
description: Viết 2 bài Cẩm nang mỗi tuần cho website Gia Khánh, chấm SEO, commit lên main ở dạng nháp (draft) để người dùng duyệt trong /admin. Chạy tự động mỗi thứ Hai qua routine, hoặc khi người dùng gõ /viet-cam-nang.
---

# Viết bài Cẩm nang tuần

Tham số tuỳ chọn: ngày thứ Hai của tuần (`yyyy-mm-dd`). Không có → thứ Hai của tuần hiện tại (giờ VN). Gọi là `<tuan>`.
Chạy không cần người dùng trả lời: **không dừng hỏi**, chỗ nào thiếu dữ kiện thì để placeholder và ghi vào báo cáo.

## 1. Chuẩn bị
- `git pull` (bài có thể vừa được sửa qua CMS).
- Đọc bảng "Đề xuất bài cẩm nang mới" và "Danh sách xung đột từ khoá" trong `marketing/seo/tu-khoa.md`.
- Liệt kê `noi-dung/cam-nang/*.md` (slug đã có).
- Ảnh: chạy `node scripts/anh-cam-nang.mjs` để liệt kê ảnh công trình thật (`src/assets/mau-nha/`, `src/assets/du-an/`) đủ lớn và chưa bài nào dùng. Người dùng thêm ảnh mới vào hai thư mục này hằng tuần. Tên mẫu nhà theo thư mục (`mau-nha/05` …) có trong `houseModels` ở `src/data/company.ts`.
  - Mỗi bài cần 1 ảnh bìa + 2–3 ảnh trong bài, tổng cộng 6–8 ảnh cho 2 bài, không trùng nhau.
  - Danh sách còn dưới 8 ảnh → dùng hết số còn lại, bài nào thiếu ảnh trong thân bài thì bỏ qua (không chèn ô `[ẢNH: …]`). Ghi vào báo cáo "cần thêm ảnh".

## 2. Chọn 2 đề tài
- Chỉ lấy dòng có cột `Trạng thái` trống. Thứ tự ưu tiên: Cao → TB → Thấp (không ghi = TB), rồi theo số thứ tự.
- **Bỏ qua** dòng có ghi chú "Cần chủ công ty xác nhận", "Chỉ viết khi có dữ liệu thật" hoặc phụ thuộc điều kiện còn `[cần xác nhận]`. Ghi lý do vào báo cáo, không đổi Trạng thái.
- Đề tài pháp lý (giấy phép, nghị định): tìm và đọc văn bản gốc (thuvienphapluat.vn, chinhphu.vn). Không đối chiếu được → bỏ qua, ghi lý do.
- Không đủ 2 đề tài → gọi agent `seo-keyword` (chờ kết quả): bổ sung 4–6 đề tài mới vào cuối bảng, cùng định dạng, không trùng từ khoá đã có và tôn trọng bảng xung đột X. Sau đó chọn tiếp.
- Đặt slug không dấu theo từ khoá chính; slug đã tồn tại → chọn đề tài khác, **không ghi đè** file cũ.
- Chọn `category` trong `noi-dung/chuyen-muc.json` (`chi-phi`, `thiet-ke`, `sua-chua`, `noi-that`).

## 3. Viết
Gọi 2 agent `contentweb` song song trong một lượt. Prompt mỗi agent gồm:
- Đề tài: tiêu đề, từ khoá chính, câu hỏi cần trả lời, ghi chú tránh trùng của dòng đó, toàn văn các xung đột X được nhắc tới.
- File đích `noi-dung/cam-nang/<slug>.md`, chỉ được tạo đúng file này. Lấy định dạng theo `noi-dung/cam-nang/cach-tinh-dien-tich-xay-dung.md`. Frontmatter:
  - `title`, `slug`, `category`, `excerpt` (1–2 câu), `meta_title` (kết thúc bằng ` | Gia Khánh`), `meta_description` (≤160 ký tự), `url: /cam-nang/<slug>/`
  - `draft: true`
  - `date`: bài 1 = `<tuan>`, bài 2 = `<tuan>` + 3 ngày, đều `T01:00:00.000Z` (08:00 giờ VN)
  - `cover`: một đường dẫn trong danh sách ảnh chưa dùng (dạng `/src/assets/mau-nha/05/2.jpg`), chia trước cho từng agent để không trùng.
- Ảnh trong bài: giao cho mỗi agent 4–5 ảnh ứng viên chưa dùng. Agent tự `Read` từng ảnh để xem nội dung, rồi chọn 2–3 ảnh hợp với từng mục.
  - Chạy `node scripts/anh-cam-nang.mjs <slug> src/assets/...` (đường dẫn **không** có `/` ở đầu, vì Git Bash sẽ đổi đường dẫn bắt đầu bằng `/`).
  - Chèn đường dẫn script in ra: `![<alt tiếng Việt mô tả đúng ảnh>](/uploads/cam-nang/<slug>/<file>.webp)`, ngay sau đoạn văn liên quan.
  - Alt hoặc câu dẫn có thể ghi "Mẫu nhà Gia Khánh đã thi công". Không ghi tên chủ nhà, địa điểm, năm hay chi phí của công trình.
  - Không chèn `[ẢNH: …]`.
- Nội dung:
  - Đọc `.claude/skills/copywriting/SKILL.md` và `references/ai-tells.md`.
  - `# Tiêu đề`, dòng `**Sapo:**` trả lời thẳng câu hỏi chính trong 40–60 chữ.
  - H2 dạng câu hỏi, mỗi mục mở bằng câu trả lời thẳng.
  - Mục `## Câu hỏi thường gặp`: mỗi câu là `**Câu hỏi?**`, xuống dòng, rồi câu trả lời.
  - Một dòng `[Nhận báo giá miễn phí]` ở cuối bài.
  - Có 2–4 link nội bộ (`/dich-vu/...`, `/bao-gia/`, bài cẩm nang liên quan).
- Sự thật: theo `.claude/rules/content.md`.
  - Giá chỉ dùng số đang có ở `/bao-gia/` (`src/pages/bao-gia.astro`, `src/data/`), kèm câu "Đơn giá chưa gồm VAT, chưa gồm phá dỡ và ép cọc. Báo giá chính xác sau khi khảo sát thực tế."
  - Bảo hành, thời gian thi công, phạm vi hỗ trợ pháp lý chưa chốt → `[cần xác nhận: …]`.
  - Không viết "X năm kinh nghiệm" cho công ty (kinh nghiệm trên 10 năm là của đội ngũ), không bịa công trình hay khách hàng.
  - Có mục `## Nguồn tham khảo` cuối bài, liệt kê nguồn đã dùng (mục này không hiện trên web).

## 4. Duyệt
- Gọi agent `seo-reviewer` cho từng bài (song song).
- "Cần sửa" → gửi lại `contentweb` kèm bảng sửa. Tối đa 2 vòng; vẫn chưa đạt thì giữ bản nháp, ghi các điểm còn lại vào báo cáo.

## 5. Kiểm tra cứng
- `npm run build` phải chạy được. Lỗi ảnh bìa hoặc chuyên mục → sửa frontmatter rồi build lại.
- Grep 2 file mới, không được có: `năm kinh nghiệm` gắn với công ty, `số 1`, `tốt nhất`, `uy tín nhất`.
- Kiểm tra `draft: true`.

## 6. Ghi trạng thái & commit
- Cột `Trạng thái` của dòng đề tài trong `tu-khoa.md`: `nháp: <slug> (<tuan>)`.
- Commit chỉ các file `noi-dung/cam-nang/<slug>.md` mới, thư mục `public/uploads/cam-nang/<slug>/` và `marketing/seo/tu-khoa.md`, message `Cẩm nang tuần <tuan>: <slug1>, <slug2> (nháp)`, rồi `git push origin main`.
- Push bị từ chối → `git pull --rebase` rồi push lại. Không dùng `--force`.

## 7. Báo cáo
Kết thúc bằng:
- 2 tiêu đề, slug, chuyên mục, kèm link duyệt `https://xaydunggiakhanh.vn/admin/#/collections/cam-nang`.
- Ảnh đã dùng mỗi bài, số ảnh chưa dùng còn lại (chạy lại `node scripts/anh-cam-nang.mjs | wc -l`). Còn dưới 8 thì nhắc người dùng thêm ảnh.
- Danh sách `[cần xác nhận …]` trong từng bài. Công ty phải điền các mục này trước khi bỏ tích "Bản nháp".
- Kết quả seo-reviewer, đề tài bị bỏ qua và lý do, số đề tài còn lại trong bảng.
