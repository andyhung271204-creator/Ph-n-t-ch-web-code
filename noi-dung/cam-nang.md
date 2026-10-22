---
slug: cam-nang
url: /cam-nang/
meta_title: "Cẩm nang xây nhà, kinh nghiệm sửa nhà ở Hà Nội | Gia Khánh"
meta_description: "Đọc cẩm nang xây nhà của Gia Khánh: chi phí, thiết kế, sửa chữa cải tạo, hoàn thiện nội thất cho gia chủ ở Hà Nội. Giá trong bài chỉ để tham khảo."
---

<!-- meta_title: 58 ký tự; meta_description: 146 ký tự -->

# 1. Hero

# Cẩm nang xây nhà, sửa nhà cho gia đình ở Hà Nội

Cẩm nang xây nhà do Công ty TNHH Xây dựng và Đầu tư Gia Khánh biên soạn cho gia chủ ở Hà Nội, gồm các bài về chi phí, thiết kế, sửa chữa cải tạo và hoàn thiện nội thất. Giá trong bài chỉ để tham khảo. Báo giá chính xác sau khi kỹ sư khảo sát thực tế.

---

## 2. Cẩm nang gồm những chuyên mục nào?

Cẩm nang chia thành bốn chuyên mục theo từng giai đoạn làm nhà: dự trù chi phí, thiết kế, sửa chữa cải tạo và hoàn thiện nội thất. Mỗi chuyên mục có mô tả ngắn, danh sách bài viết và đường dẫn sang dịch vụ liên quan.

<!-- Mỗi chuyên mục: tên (chuyen-muc.json) + 1 câu mô tả bên dưới, dev đưa vào code; danh sách bài do code lấy theo category. -->

### Chi phí xây nhà

Đơn giá theo mét vuông, cách quy đổi diện tích sàn và những khoản ngoài đơn giá, để gia đình dự trù ngân sách trước khi khảo sát. Xem [bảng báo giá](/bao-gia/).

### Thiết kế nhà

Những điểm nên chốt sớm khi thiết kế nhà phố, nhà ống: ánh sáng, thông gió, cầu thang và công năng từng tầng. Xem [dịch vụ thiết kế kiến trúc và nội thất](/dich-vu/thiet-ke-kien-truc-noi-that/).

### Sửa chữa – cải tạo

Cần kiểm tra gì ở nhà cũ trước khi sửa: kết cấu, thấm dột, điện nước, và khi nào nên sửa hay xây lại. Xem [dịch vụ sửa chữa cải tạo nhà](/dich-vu/sua-chua-cai-tao-nha/).

### Hoàn thiện nội thất

Cách cân đối gỗ, sơn, gạch, trần và thiết bị theo ngân sách của gia đình. Xem [dịch vụ hoàn thiện và thi công nội thất](/dich-vu/hoan-thien-thi-cong-noi-that/).

---

## 3. CTA cuối trang

### Cần báo giá cho ngôi nhà của bạn?

Giá trong cẩm nang chỉ để tham khảo. Để lại số điện thoại, kỹ sư Gia Khánh sẽ khảo sát và báo giá miễn phí. Xem thêm các [dịch vụ xây dựng và sửa chữa nhà](/dich-vu/) hoặc [bảng báo giá](/bao-gia/).

**[Nhận báo giá miễn phí]** · **[Gọi ngay]** (0964 531 577) · **[Chat Zalo]**

---

# Kiểm tra lại

## Đã suy diễn

- Lead ghi "do Công ty TNHH Xây dựng và Đầu tư Gia Khánh biên soạn" (đã bỏ "đội ngũ kỹ sư" vì hồ sơ không ghi ai là tác giả từng bài).
- Câu mở mục 2 "bốn chuyên mục theo từng giai đoạn làm nhà": diễn giải thứ tự chi phí, thiết kế, sửa chữa, hoàn thiện; không có nguyên văn trong nguồn. 4 link cuối mỗi mô tả chuyên mục thêm theo ý reviewer.
- 4 câu mô tả chuyên mục: viết từ tiêu đề và `excerpt` của 5 bài hiện có (xem `noi-dung/cam-nang/`) và tên chuyên mục trong `noi-dung/chuyen-muc.json`; không có nguyên văn trong nguồn.
- Câu mô tả "Chi phí xây nhà" nói về "những khoản ngoài đơn giá" theo nội dung bài `chi-phi-xay-nha-pho-tron-goi` (VAT, phá dỡ, ép cọc...), không nêu số.
- Mục CTA cuối trang là bổ sung của tôi (brief mục A không yêu cầu); bỏ được nếu dev không muốn thêm section.
- Không có FAQ, theo brief.

## Cần xác nhận

1. Không có placeholder trong bản nháp này.
2. Chuyên mục mới: nếu thêm bài #7 đến #11 (xem `tu-khoa.md`), có thể cần thêm chuyên mục hoặc sửa lại 4 câu mô tả (ví dụ chuyên mục "Sửa chữa – cải tạo" sẽ thêm chống thấm, vết nứt; "Thiết kế nhà" thêm cấp phép).
3. Dev: 4 câu mô tả hiện chưa có chỗ trong `src/pages/cam-nang/index.astro` (chỉ có `SectionHeading title`); cần thêm `subtitle` cho từng chuyên mục, có thể lưu vào `chuyen-muc.json`.
