# Giao diện

Thiết kế theo bố cục tham khảo `betaviet.vn_ (1).png` nhưng đổi sang tông **xanh lá** của logo Gia Khánh. Một số màn hình được dựng trước trên Stitch (bản xuất nằm ở `design/stitch/`).

## Màu (khai báo trong `src/styles/global.css`)

| Tên | Mã | Dùng cho |
|---|---|---|
| `primary` | `#178a3e` | Nút chính, tiêu đề nhấn, link |
| `primary-bright` | `#3dbe3a` | Điểm nhấn nhỏ, icon footer |
| `primary-dark` | `#0d5a2c` | Footer, nút khi hover |
| `primary-light` | `#ecf7ee` | Nền section xen kẽ |
| `ink` | `#1a2433` | Chữ chính |
| `muted` | `#5b6b7f` | Chữ phụ |
| `line` | `#e3e8ef` | Viền, đường kẻ |

Nút Zalo (`#0068FF`) và Messenger (gradient) giữ màu thương hiệu gốc.

## Chữ

Font **Be Vietnam Pro** (Google Fonts), độ đậm 400/500/600/700. Tiêu đề section thường viết dạng câu hỏi ("Xây nhà 1 m² hết bao nhiêu?") để khớp cách khách tìm trên Google và AI.

## Bố cục

- Khung nội dung rộng tối đa `max-w-6xl`, lề 16px trên mobile.
- Section cách nhau 64px (mobile) / 96px (desktop), nền trắng và xanh nhạt xen kẽ.
- Thiết kế **mobile-first**, kiểm tra ở 375 / 768 / 1280px, không cuộn ngang, vùng bấm ≥ 44px.
- Bảng dài (bảng giá 48 mẫu) trên mobile chuyển thành thẻ, mỗi ô có nhãn riêng.

## Thành phần dùng lại (`src/components/`)

| Component | Vai trò |
|---|---|
| `Header`, `Footer` | Đầu và chân trang |
| `HeroSlider` | Hero trang chủ (slider, hiện 1 slide) |
| `PageHeader` | Breadcrumb + H1 + đoạn mở đầu của trang con |
| `SectionHeading` | Tiêu đề + mô tả mỗi section |
| `ServiceGridClassic` | Lưới 4 dịch vụ ở trang chủ |
| `ServiceSteps` | Các bước quy trình trong trang dịch vụ |
| `ProjectCard`, `Gallery` | Thẻ công trình, thư viện ảnh |
| `PostCard` | Thẻ bài Cẩm nang |
| `QuoteForm` | Form báo giá |
| `Faq` | Câu hỏi thường gặp + schema FAQPage |
| `Bullets`, `InfoList`, `Icon`, `ImageSlot` | Danh sách, icon, khung ảnh |

`ServiceGrid.astro` hiện không trang nào dùng (đã thay bằng `ServiceGridClassic`).

## Lớp CSS dùng chung

`.container-page` · `.section` · `.btn` / `.btn-primary` / `.btn-outline` · `.card` · `.field` · `.eyebrow` · `.icon-tile` · `.post-body` (định dạng thân bài Cẩm nang).

## Animation

- **Hiện dần khi cuộn:** mọi section có `data-reveal`, trượt lên 20px và hiện rõ khi vào màn hình (IntersectionObserver). Các thẻ trong lưới hiện lệch nhau qua biến `--d`.
- **Nút nổi:** lắc nhẹ + phát sáng 1,5 giây, mỗi 20 giây.
- **Hover:** ảnh phóng nhẹ, thẻ đậm bóng, gạch chân menu chạy ra.
- Người dùng bật "giảm chuyển động" trong hệ điều hành thì tắt hết animation. Không có JS thì nội dung vẫn hiện đầy đủ.

## Ảnh

- Ảnh qua `<Image />` của Astro, tự chuyển WebP và lazy-load.
- `src/assets/mau-nha/01…48/`: ảnh 48 mẫu nhà Gia Khánh đã thi công.
- `src/assets/du-an/`: ảnh từng công trình.
- `src/assets/stitch/`: ảnh do Stitch sinh, **chỉ để trang trí** (thẻ "Vì sao chọn"), không phải công trình thật.
- Mọi ảnh có `alt` tiếng Việt; ảnh trang trí `alt=""`.
