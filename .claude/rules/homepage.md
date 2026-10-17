---
paths:
  - "src/pages/index.astro"
  - "src/components/**"
---

# Bố cục trang chủ

Tham khảo cấu trúc `betaviet.vn_ (1).png`, nhưng **mẫu quá dày — tối đa ~7 section**, mỗi section một thông điệp:

1. **Header** — logo trái, menu, nút "Nhận báo giá" + hotline. Sticky, nền trắng, bóng nhẹ khi cuộn.
2. **Hero** — slider kiểu betaviet.vn (`HeroSlider.astro`, JS thuần, không thư viện): hiện chỉ 1 slide: hero chính (tiêu đề ≤ 10 từ, 1 dòng mô tả, 2 nút CTA); banner thêm sau dựng bằng `scripts/banners.mjs` (đã bỏ banner thương hiệu). Fade 1s, tự chuyển 7s, mũi tên, vuốt trên mobile.
3. **Con số** — 3–4 chỉ số thật: 10+ năm kinh nghiệm đội ngũ, 10+ nhân sự, 4 nhóm dịch vụ, khảo sát miễn phí. Không bịa số công trình.
4. **Dịch vụ** — 4 thẻ ngắn, 1 hàng (icon + tên + 1 câu + "Xem chi tiết").
5. **Công trình tiêu biểu** — lưới 3 cột, nút "Xem tất cả".
6. **Vì sao chọn Gia Khánh + Quy trình 6 bước** — gộp 1 section.
7. **CTA** — bỏ khỏi trang chủ (form báo giá ở `/bao-gia`, `/lien-he`, `/du-an`).
8. **Footer** — giới thiệu ngắn, link nhanh, liên hệ, MST, người đại diện.

Không đưa lên trang chủ: khuyến mãi, video, chi nhánh, tin tức, bảng giá đầy đủ (để ở `/bao-gia`).

Trước khi thêm section vào trang chủ, hỏi: nó có làm trang dày như mẫu không?
