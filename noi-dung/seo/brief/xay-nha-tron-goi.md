# Brief — /dich-vu/xay-nha-tron-goi

File đích: `noi-dung/dich-vu-xay-nha-tron-goi.md` (giữ frontmatter `slug`, `url`, `meta_title`, `meta_description`).
Nguồn dữ kiện: `noi-dung/ho-so-doanh-nghiep.md`, `src/data/company.ts` (`prices`, `packages`, `warranty`, `daXacNhan`). Bản đồ từ khoá: `noi-dung/seo/tu-khoa.md` (đã duyệt). Audit: `noi-dung/seo/audit.md`.

## Từ khoá

- **Chính:** xây nhà trọn gói Hà Nội — có trong meta title, H1, câu đầu trang, 1 H2.
- **Phụ:** dịch vụ xây nhà trọn gói · xây nhà trọn gói là gì · xây nhà trọn gói hay phần thô · phần thô và nhân công hoàn thiện · nhà thầu xây nhà trọn gói uy tín (diễn đạt tự nhiên, không nhồi) · hợp đồng xây nhà trọn gói (1 đoạn ngắn).
- **Địa phương:** Đông Anh, Gia Lâm, Hoài Đức, Thanh Trì, Hà Đông — 1 đoạn "khu vực" + 1 FAQ. Trụ sở ở Đông Anh (Quốc lộ 3) là dữ kiện thật, được nêu.
- **Không dùng làm trọng tâm:** "giá/đơn giá xây nhà 1m²" (của `/bao-gia`), "sửa nhà trọn gói" (của trang sửa chữa), "cách tính diện tích" (cẩm nang).

## Meta

- `meta_title` ≤ 60 ký tự, có từ khoá chính + "Gia Khánh". Lưu ý: code tự thêm `| Gia Khánh` vào title, nên trong `src/data/services.ts` chỉ ghi phần trước.
- `meta_description` 140–158 ký tự: từ khoá chính, 2 lợi ích thật (dự toán chi tiết trước khi ký, thanh toán theo giai đoạn / bảo hành bằng văn bản), CTA "Nhận báo giá miễn phí".

## Dàn ý

H1: ngắn hơn bản cũ, mở bằng "Xây nhà trọn gói tại Hà Nội". Lead 40–60 chữ = định nghĩa + Gia Khánh làm gì (dạng đoạn AI trích được).

1. **H2: Xây nhà trọn gói là gì?** — định nghĩa 40–60 chữ (một nhà thầu lo vật tư + nhân công từ móng đến hoàn thiện, theo một hợp đồng, một dự toán). Gia Khánh nhận loại nhà nào (nhà phố, nhà ống, nhà cấp 4, biệt thự nhỏ).
2. **H2: Ai nên chọn xây nhà trọn gói?** — giữ ý "dành cho ai" của bản cũ; link sang sửa chữa cho người cần cải tạo.
3. **H2: Trọn gói gồm những hạng mục nào?** — danh sách hạng mục (giữ từ bản cũ).
4. **H2: Nên chọn trọn gói hay phần thô + nhân công hoàn thiện?** — mở bằng câu trả lời thẳng (chọn theo thời gian & mức muốn tự kiểm soát vật tư); giữ bảng "Gồm / Chủ nhà tự lo" từ `packages`; nhắc gói nhân công xây dựng (từ 1.400.000 đ/m²). Đây là chỗ khoảng trống đối thủ — viết kỹ.
5. **H2: Xây nhà trọn gói tại Hà Nội giá bao nhiêu?** — CHỈ 2–3 câu: nhà phố/nhà ống 2–5 tầng phần thô + NC hoàn thiện 3.300.000 đ/m², trọn gói 5.000.000 đ/m² (đã hiển thị trên web, dùng được); các loại nhà khác báo theo khảo sát; ghi chú VAT/phá dỡ/ép cọc nguyên văn; link `/bao-gia` (bảng đầy đủ) và `/cam-nang/cach-tinh-dien-tich-xay-dung` (ví dụ tính). Không làm bảng giá thứ hai (xung đột X1, X2). Dev sẽ quyết giữ hay bỏ bảng giá hiện có — người viết chỉ cần đề xuất.
6. **H2: Quy trình xây nhà trọn gói tại Gia Khánh** — 6 bước (không đổi tên bước, lấy từ `company.ts`); khảo sát miễn phí.
7. **H2: Làm sao hạn chế phát sinh chi phí?** — gộp các lợi ích "Vì sao chọn" vào dạng trả lời: dự toán chi tiết, phát sinh chỉ khi đồng ý bằng văn bản/tin nhắn, thanh toán theo giai đoạn sau nghiệm thu, kỹ sư giám sát, ảnh tiến độ qua Zalo. Đoạn ngắn "Hợp đồng ghi những gì" (phạm vi, bảng vật tư theo chủng loại, tiến độ theo mốc, thanh toán, bảo hành).
8. **H2: Bảo hành công trình bao lâu?** — bảng 4 hạng mục; số năm đang `[cần xác nhận]` → giữ placeholder.
9. **H2: Gia Khánh nhận xây nhà ở khu vực nào?** — đoạn địa phương (trụ sở Đông Anh; nội thành + Đông Anh, Gia Lâm, Hoài Đức, Thanh Trì, Hà Đông…).
10. **Lưu ý trước khi xây** (giữ, có thể gộp vào mục 5).
11. **H2: Câu hỏi thường gặp về xây nhà trọn gói** — 7–9 câu, trả lời ≤ 50 chữ, câu đầu trả lời thẳng:
    - Khảo sát, báo giá có mất phí không?
    - Xây nhà trọn gói mất bao lâu? (placeholder thời gian)
    - Trọn gói có đắt hơn tự thuê thợ không? (trả lời trung thực, không bịa %: so cái được — một đầu mối, giá chốt trước — với cái mất)
    - Có cần thuê người giám sát riêng không?
    - Thanh toán thế nào?
    - Đơn giá đã gồm VAT, phá dỡ, ép cọc chưa?
    - Ở xa, theo dõi công trình thế nào?
    - Nhà trong ngõ nhỏ có xây được không? (placeholder điều kiện đường vào)
    - Bỏ FAQ "phục vụ khu vực nào" nếu đã có H2 mục 9.
12. **CTA cuối + form** — giữ như cũ.

H2 dạng câu hỏi ở trên là đề xuất; được rút gọn nếu tiêu đề quá dài trên mobile (≤ ~55 ký tự).

## Link nội bộ (đặt trong thân bài, anchor mô tả)

- `/bao-gia` — "bảng báo giá xây nhà"
- `/cam-nang/cach-tinh-dien-tich-xay-dung` — ví dụ tính diện tích
- `/cam-nang/chi-phi-xay-nha-pho-tron-goi` — yếu tố ảnh hưởng chi phí
- `/dich-vu/sua-chua-cai-tao-nha` — cải tạo, nâng tầng
- `/dich-vu/thiet-ke-kien-truc-noi-that` — thiết kế trước khi xây
- `/du-an` — "công trình Gia Khánh đã thi công" (không gọi tên công trình cụ thể: chưa có thông tin hạng mục/địa điểm)
- `/lien-he` hoặc `#bao-gia`
Mọi URL nội bộ viết **có `/` cuối** (sửa lỗi T1 trong audit).

## Schema (dev làm ở bước 5)

- `Service`: name "Xây nhà trọn gói", serviceType, provider = `GeneralContractor` (tham chiếu @id trong BaseLayout), areaServed = Hà Nội + các huyện, offers 2 gói nhà phố (giá từ `packages`, priceCurrency VND, unitText m²).
- `FAQPage`: đúng các câu trong FAQ hiển thị (bỏ câu có placeholder chưa xác nhận khỏi schema).
- `BreadcrumbList`: Trang chủ › Dịch vụ › Xây nhà trọn gói.

## Điểm yếu cần sửa (từ audit)

- H2 dạng nhãn → câu hỏi; mỗi section mở bằng câu trả lời thẳng 40–60 chữ.
- Thêm định nghĩa đầu trang; thêm so sánh trọn gói vs phần thô.
- Thêm link `/du-an` và 2 bài cẩm nang.
- Địa danh trong thân bài, không chỉ ở FAQ.
- Không lặp ví dụ tính giá (để cẩm nang/`/bao-gia`).

## Quy tắc sự thật

- Không viết "X năm kinh nghiệm của công ty"; kinh nghiệm thuộc **đội ngũ** (`company.ts` ghi "trên 10 năm"; hồ sơ còn mâu thuẫn 7/10 → để `[cần xác nhận]` nếu nêu số).
- Không bịa số công trình, % tiết kiệm, thời gian thi công, thời gian phản hồi, bảo hành.
- Không "số 1", "tốt nhất", "uy tín hàng đầu".
- Không nhắc phí thiết kế miễn/giảm (chưa xác nhận).
