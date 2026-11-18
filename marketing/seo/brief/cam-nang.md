# Brief — /cam-nang (trang danh sách) + 5 bài cẩm nang

**Quy tắc chung** ở cuối `marketing/seo/brief/sua-chua-cai-tao-nha.md` áp dụng cho tất cả. Từ khoá từng bài: mục tương ứng trong `marketing/seo/tu-khoa.md` (đã duyệt), cùng các xung đột X1, X2, X10, X11, X13, X17, X18.

## A. Trang danh sách `/cam-nang/`
File đích: `noi-dung/cam-nang.md` (tạo mới; `slug: cam-nang`, `url: /cam-nang/`, `meta_title`, `meta_description`). Hiện tại: `src/pages/cam-nang/index.astro`, `noi-dung/chuyen-muc.json`.
- Chính: **cẩm nang xây nhà**; phụ: kinh nghiệm xây nhà · kinh nghiệm sửa nhà · cẩm nang xây nhà Hà Nội.
- H1 "Cẩm nang xây nhà, sửa nhà" (hoặc biến thể có từ khoá) + lead 40–60 chữ: bài do đội ngũ kỹ sư Gia Khánh soạn cho gia chủ ở Hà Nội; nói rõ giá trong bài chỉ để tham khảo, báo giá chính xác sau khảo sát.
- Mỗi chuyên mục (theo `chuyen-muc.json`): 1 câu mô tả ngắn (đề xuất trong file; dev đưa vào code).
- Không FAQ. Meta description 140–158 (bản cũ 109).

## B. 5 bài cẩm nang — sửa TRỰC TIẾP file bài (`noi-dung/cam-nang/<slug>.md`)
Các file này là nội dung chạy thật trên web (soạn qua CMS). Quy tắc bắt buộc:
- **Giữ nguyên frontmatter** và các khoá: `title`, `slug`, `category`, `date`, `draft`, `excerpt`, `cover`, `meta_title`, `meta_description`, `url`. Được sửa giá trị `title`, `excerpt`, `meta_title` (≤ 60, có "| Gia Khánh"), `meta_description` (140–158). Không đổi `slug`, `category`, `cover`, `date`. `url` thêm `/` cuối.
- Giữ dòng `# H1` đầu bài (code tự bỏ khi render) và **giữ đúng định dạng FAQ** để code chuyển thành `<details>` và schema: mỗi câu `**Câu hỏi kết thúc bằng dấu hỏi?**` rồi xuống dòng là câu trả lời, các câu cách nhau 1 dòng trống. Trả lời ≤ 50 chữ, câu đầu trả lời thẳng.
- Giữ các dấu `[ẢNH: …]`, mục `## Nguồn tham khảo` (chỉ biên tập), và dòng CTA chứa `[Nhận báo giá miễn phí]` / `[Gọi ngay]` (code thay bằng nút).
- `[cần xác nhận …]` hiện trên web dạng ô vàng: GIỮ dấu này cho dữ kiện thật sự chưa chốt, nhưng **giảm tối đa**: chỗ nào viết được câu trung tính không cần số/khẳng định thì viết câu trung tính và bỏ dấu.
- H2: **bỏ số thứ tự** ("1. …"), chuyển dạng câu hỏi khi hợp; mỗi H2 mở bằng đoạn trả lời thẳng 40–60 chữ. Thêm/giữ đoạn mở đầu bài (sapo) 40–60 chữ trả lời câu hỏi chính.
- Link nội bộ có `/` cuối; anchor mô tả. Mỗi bài link về trang dịch vụ liên quan + `/bao-gia/` khi nói giá.
- Pháp lý (giấy phép, quy chuẩn, Nghị định 207/2026/NĐ-CP): **không khẳng định điều chưa đối chiếu văn bản gốc**. Viết chung "tuỳ quy mô, đối chiếu quy định hiện hành tại thời điểm xin phép", giữ `[cần xác nhận: …]` nếu bài cần nêu cụ thể.
- Giá: chỉ dùng đơn giá đã công khai (nhà phố/nhà ống 2–5 tầng 3.300.000 / 5.000.000 đ/m², nhân công từ 1.400.000), kèm câu ghi chú giá nguyên văn. Không bịa số thị trường mới; số thị trường đã có trong bài giữ nếu có nguồn ở "Nguồn tham khảo".
- Không làm dài thêm quá ~15% so với bài cũ; ưu tiên sửa cấu trúc, câu mở, link, tính trung thực.

### Ranh giới từng bài
| Bài | Từ khoá chính | Giữ | Không làm |
|---|---|---|---|
| `cach-tinh-dien-tich-xay-dung` | cách tính diện tích xây dựng nhà | 3 loại diện tích, công thức, hệ số Gia Khánh (40/100/30) vs hệ số thị trường, ví dụ 5×20 m 4 tầng + tum (chỉ diện tích), FAQ | Không thêm ví dụ giá dài (X2/X17); link `/bao-gia/` cho đơn giá |
| `chi-phi-xay-nha-pho-tron-goi` | chi phí xây nhà phố trọn gói | Yếu tố ảnh hưởng, khoản ngoài đơn giá (VAT, phá dỡ, ép cọc, xin phép, nội thất rời, vận chuyển ngõ nhỏ), hạn chế phát sinh, checklist hỏi nhà thầu, FAQ | Không lặp bảng gói của trang xây nhà trọn gói (X4): 2 câu + link `/dich-vu/xay-nha-tron-goi/`; không bảng giá (X1) |
| `chon-vat-lieu-hoan-thien-noi-that` | chọn vật liệu hoàn thiện nội thất | Nguyên tắc ngân sách, gỗ/sàn/sơn/trần/thiết bị, bảng 3 phân khúc theo chủng loại, nồm ẩm Hà Nội, mẹo tránh hàng nhái, FAQ | Không nêu giá chưa xác nhận; link `/dich-vu/hoan-thien-thi-cong-noi-that/` (X13) |
| `kiem-tra-truoc-khi-cai-tao-nha-cu` | kiểm tra nhà cũ trước khi cải tạo | Kết cấu, thấm, điện, nước, mối mọt, giấy phép (chung), ngõ hẹp, sửa hay xây lại, checklist, FAQ | Giữ phần tìm hiểu; phần dịch vụ link `/dich-vu/sua-chua-cai-tao-nha/` (X10) |
| `luu-y-khi-thiet-ke-nha-pho` | lưu ý khi thiết kế nhà phố | Nhà ống mặt tiền hẹp, giếng trời, cầu thang, công năng, WC, chiều cao tầng, quy định cấp phép (chung), dự trù điện nước/thang máy, checklist, FAQ | Không khẳng định Nghị định 207/2026; tách quy chuẩn với phong thuỷ; link `/dich-vu/thiet-ke-kien-truc-noi-that/` (X11). FAQ hiện "nhãn chưa rõ": chuyển đúng định dạng câu hỏi in đậm + trả lời |

## Schema (dev làm)
Bài: `Article` (headline, description, datePublished = `date`, author/publisher = Công ty TNHH Xây dựng và Đầu tư Gia Khánh, image = ảnh bìa, mainEntityOfPage) + `FAQPage` sinh từ các câu FAQ của bài + `BreadcrumbList` (có sẵn).
