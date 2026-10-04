---
paths:
  - "src/**/*.{astro,css}"
  - "tailwind.config.*"
---

# Design system

Phong cách: **tối giản, hiện đại, chuyên nghiệp**. Hai màu chủ đạo **trắng + xanh lá theo logo**. Ưu tiên khoảng trắng hơn lượng thông tin.

## Màu (khai báo trong theme Tailwind, không dùng mã màu rời)

| Token | Hex | Dùng cho |
|---|---|---|
| `primary` | `#178A3E` | Nút, link, tiêu đề nhấn, icon (chữ trắng trên nền này đạt AA) |
| `primary-bright` | `#3DBE3A` | Chỉ trang trí: gạch chân tiêu đề, viền, đường kẻ chéo — **không** dùng làm nền chữ trắng hay màu chữ |
| `primary-dark` | `#0D5A2C` | Hover, footer, dải CTA |
| `primary-light` | `#ECF7EE` | Nền section xen kẽ, nền thẻ nhẹ |
| `ink` | `#1A2433` | Chữ chính |
| `muted` | `#5B6B7F` | Chữ phụ |
| `line` | `#E3E8EF` | Viền |
| `white` | `#FFFFFF` | Nền chính |

- Mã xanh lấy gần đúng từ logo; khi có file logo vector thì chỉnh lại cho khớp.
- Không thêm màu nhấn thứ ba. Lỗi form dùng đỏ mặc định của Tailwind, chỉ ở đó.
- Section xen kẽ nền `white` / `primary-light`.
- Có thể dùng motif đường chéo xanh như banner `logo dài.jpg` cho hero/CTA, tiết chế.

## Khoảng cách (thoáng hơn mẫu)

- Padding dọc section: `py-16` mobile, `py-24` desktop.
- Container: `max-w-6xl mx-auto px-4 md:px-6`.
- Tiêu đề section → nội dung: `mb-12` trở lên.
- Gap lưới: `gap-6` mobile, `gap-8` desktop. Tối đa **3 cột** thẻ (4 cột chỉ cho con số).
- Đoạn văn `max-w-prose leading-relaxed`; mô tả thẻ ≤ 2 dòng.

## Typography

- H1 hero: `text-4xl md:text-5xl font-bold`.
- Tiêu đề section: `text-2xl md:text-3xl font-bold`, căn giữa, kèm 1 dòng phụ `text-muted`. Viết hoa chỉ cho tiêu đề section.
- Body `text-base`, không nhỏ hơn 14px.

## Thành phần

- Bo góc `rounded-lg` (thẻ, ảnh), `rounded-md` (nút). Bóng `shadow-sm`, hover `shadow-md`.
- Nút chính: nền `primary`, chữ trắng, hover `primary-dark`. Nút phụ: viền `primary`, nền trong suốt.
- Ảnh dự án `aspect-[4/3] object-cover`, hover `scale-105` 300ms.
- Nút nổi góc phải dưới: tối đa 2 (Gọi, Zalo).
- Bảng giá: trên mobile chuyển thành thẻ xếp dọc hoặc bọc `overflow-x-auto` trong khung riêng (không để cả trang cuộn ngang).
