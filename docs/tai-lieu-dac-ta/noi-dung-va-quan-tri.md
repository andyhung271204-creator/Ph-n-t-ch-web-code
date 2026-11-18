# Nội dung và quản trị

## Nội dung lấy từ đâu?

- Thông tin công ty, dịch vụ, quy trình, bảo hành, giá: hồ sơ `Ho-so-tong-quan-Gia-Khanh.docx`, đã chuyển vào `src/data/company.ts`.
- Bản chữ từng trang: `noi-dung/*.md` (trang-chu, gioi-thieu, dich-vu-*, du-an, bao-gia, lien-he, cam-nang).
- Bài Cẩm nang: `noi-dung/cam-nang/<slug>.md`, tên file chính là URL bài.

## Quy tắc nội dung

- Công ty mới thành lập (2026): "trên 10 năm kinh nghiệm" là của **đội ngũ**, không phải của công ty. Không bịa số công trình.
- Mọi chỗ có giá kèm câu: *"Đơn giá chưa gồm VAT, chưa gồm phá dỡ và ép cọc. Báo giá chính xác sau khi khảo sát thực tế."*
- Chỉ dùng ảnh công trình thật của Gia Khánh làm ảnh công trình. Ảnh do Stitch sinh chỉ để trang trí.
- MST, địa chỉ, người đại diện luôn có ở footer.
- Giọng văn ngắn gọn, đáng tin, tránh "số 1", "tốt nhất".
- Mạng xã hội không đăng giá của Gia Khánh (chỉ website có giá).

## Cẩm nang (blog)

### Chuyên mục (`noi-dung/chuyen-muc.json`)

| Mã | Tên |
|---|---|
| `chi-phi` | Chi phí xây nhà |
| `thiet-ke` | Thiết kế nhà |
| `sua-chua` | Sửa chữa – cải tạo |
| `noi-that` | Hoàn thiện nội thất |

### Bài hiện có

| Bài | Chuyên mục | Ngày | Trạng thái |
|---|---|---|---|
| Chống thấm nhà vệ sinh, sân thượng: nguyên nhân và cách xử lý | Sửa chữa | 19/11/2026 | Đăng |
| Hợp đồng xây nhà trọn gói: những điều khoản cần có | Chi phí | 16/11/2026 | Đăng |
| Xây nhà trọn gói hay phần thô: nên chọn gói nào? | Chi phí | 12/11/2026 | **Nháp** |
| Xây nhà 3 tầng 50m² hết bao nhiêu tiền? Ví dụ tính từng bước | Chi phí | 09/11/2026 | Đăng |
| Chi phí xây nhà phố trọn gói: những yếu tố quyết định tổng chi phí | Chi phí | 16/10/2026 | Đăng |
| Cách tính diện tích xây dựng nhà để dự trù ngân sách | Chi phí | 15/10/2026 | Đăng |
| Lưu ý khi thiết kế nhà phố, nhà ống ở Hà Nội | Thiết kế | 14/10/2026 | Đăng |
| Kiểm tra nhà cũ trước khi cải tạo: cần xem những gì? | Sửa chữa | 13/10/2026 | Đăng |
| Chọn vật liệu hoàn thiện nội thất theo ngân sách | Nội thất | 12/10/2026 | Đăng |

Trang chủ hiện cố định 3 bài: Chi phí xây nhà phố trọn gói (nổi bật), Kiểm tra nhà cũ, Cách tính diện tích.

### Trang quản trị `/admin`

Dùng Sveltia CMS, đăng nhập bằng GitHub. Mỗi lần **Lưu** là một commit lên `main`, web tự build lại sau vài phút.

- **Chưa duyệt:** bài có tích "Bản nháp". Bài mới tạo luôn là nháp.
- **Đã đăng:** bỏ tích "Bản nháp" thì bài chuyển sang đây và lên web.
- **Cài đặt → Chuyên mục:** sửa tên, đổi thứ tự chuyên mục. Không đổi/xoá mã chuyên mục đang có bài, nếu không web sẽ không build được.

**Các trường của bài:** Tiêu đề · Đường dẫn URL (không đổi sau khi đăng) · Chuyên mục · Ngày đăng · Bản nháp · Tóm tắt · Ảnh bìa (bắt buộc, ảnh công trình thật) · Tiêu đề SEO · Mô tả SEO · Nội dung.

**Quy ước khi viết nội dung:**

| Viết trong bài | Hiện trên web |
|---|---|
| `[ẢNH: mô tả]` | Khung chờ ảnh nét đứt |
| `[cần xác nhận: …]` | Đoạn tô vàng ⚠ |
| Câu hỏi in đậm kết thúc bằng `?`, Shift+Enter, câu trả lời | Mục hỏi đáp thu gọn (và vào schema FAQPage) |
| Một dòng chứa `[Nhận báo giá miễn phí]` | Cụm 3 nút: báo giá · gọi · Zalo |
| Mục `## Nguồn tham khảo` cuối bài | Ẩn, chỉ để biên tập |

### Viết bài tự động

Mỗi thứ Hai, routine cloud chạy skill `viet-cam-nang`: viết 2 bài theo bảng đề tài trong `marketing/seo/tu-khoa.md`, đẩy lên `main` ở dạng nháp. Người dùng duyệt trong `/admin` rồi bỏ tích "Bản nháp" để đăng.

## Việc còn chờ / điểm cần lưu ý

- **Chờ công ty xác nhận** (đang hiện "Đang cập nhật"): giờ làm việc; đơn giá nhà cấp 4, nhà tân cổ điển/từ 6 tầng, biệt thự; chức danh "Giám đốc"; thời gian gọi lại sau khi nhận form. Xong thì đổi `daXacNhan = true`.
- **Bảo hành** (5 năm kết cấu, 3 năm chống thấm, 1 năm hoàn thiện/điện nước, 6 tháng sửa nhỏ) đang hiển thị theo mức phổ biến, cần công ty xác nhận lại trước khi đưa vào hợp đồng.
- **Diện tích 48 mẫu nhà** là số ước tính từ ảnh, giá theo mẫu chỉ để tham khảo; thay bằng số thật khi có hồ sơ thiết kế.
- **15 trang công trình** mới có ảnh, chưa có tên thật, địa điểm, quy mô, năm (`src/data/projects.ts`). Chưa có ảnh đủ trước – trong – sau.
- **Hero trang chủ** mới có 1 slide; 2 banner (`thuong-hieu`, `cai-tao`) đã dựng sẵn trong `src/assets/slider/` nhưng chưa bật.
- **Messenger** đang trỏ link chia sẻ fanpage; đổi sang `https://m.me/<username>` khi fanpage có username.
- Mục "Bảng đơn giá của UBND" trên trang Báo giá chưa đưa lên, chờ đối chiếu văn bản hiện hành.
- Bài "Chống thấm nhà vệ sinh, sân thượng" có ngày đăng 19/11/2026 (sau hôm nay) nhưng vẫn hiện trên web vì web chỉ lọc theo "Bản nháp", không lọc theo ngày.
