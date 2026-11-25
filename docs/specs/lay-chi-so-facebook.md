Trạng thái: Đã xong

# Lấy chỉ số Facebook Page ra CSV

## Mục tiêu
Lấy chỉ số Page Facebook của Gia Khánh **từ 01/10/2026 đến hôm nay** và lưu thành CSV để mở bằng Google Sheets, dùng đối chiếu bài đăng với kết quả.

## Có cần làm không? Đã có sẵn gì để dùng lại?
- Business Suite có sẵn nút **Export data**, làm tay được một lần. Script chỉ đáng viết nếu cần lặp lại hoặc ghép với lịch bài.
- Dùng lại: `FB_PAGE_ID`, `FB_PAGE_TOKEN` (đã có trong môi trường), thư viện `requests`, cách gọi Graph API và không in token của `marketing/scripts/dang-facebook.py`.
- Không thêm dependency. Không đẩy lên Google Sheets (CSV mở thẳng bằng Sheets là đủ).

## Phạm vi
**Làm**
- Một script `marketing/scripts/lay-chi-so-facebook.py`, chạy tay: `python marketing/scripts/lay-chi-so-facebook.py [--tu 2026-10-01] [--den hôm nay]`.
- Nhóm A, chỉ số Page theo ngày → `marketing/kpi/trang-theo-ngay.csv`:
  - `page_follows` (tổng người theo dõi), `page_daily_follows_unique` (theo dõi mới)
  - `page_total_media_view_unique` (số người xem), `page_media_view` (lượt xem)
  - `page_post_engagements` (tương tác)
- Nhóm B, từng bài đăng trong khoảng ngày → `marketing/kpi/bai-viet.csv`:
  - ngày đăng, nội dung (cắt 80 ký tự), link bài
  - `post_media_view`, `post_total_media_view_unique`, reaction, bình luận, chia sẻ
- Metric nào API trả lỗi (Meta đang bỏ/đổi tên) thì bỏ qua, ghi tên metric đó ra màn hình, không dừng cả script.

**Không làm**
- Không đẩy lên Google Sheets, không chạy tự động hằng tuần, không vẽ biểu đồ.
- Không lấy dữ liệu quảng cáo (Ads).

## File sẽ động tới
- Thêm: `marketing/scripts/lay-chi-so-facebook.py`, `marketing/kpi/trang-theo-ngay.csv`, `marketing/kpi/bai-viet.csv`
- Không sửa file có sẵn.

## Giao diện / nội dung dự kiến
Không có UI. Đầu ra là 2 file CSV (UTF-8 có BOM để Sheets/Excel đọc đúng tiếng Việt). In ra màn hình: số ngày, số bài, metric bị bỏ qua.

## Cách kiểm tra
1. Chạy thử 7 ngày gần nhất: `--tu 2026-11-17`. Kiểm tra CSV có đủ cột, số ngày/bài khớp với Page.
2. So 2–3 số (người theo dõi, lượt xem một bài) với màn hình Insights trong Business Suite. Số có thể lệch vì cách tính mới.
3. Chạy đủ 01/10 → hôm nay (55 ngày, trong giới hạn 93 ngày/lần gọi của Meta).
4. Kiểm tra output không chứa token.

## Kết quả chạy thử (24/11/2026)
- Token hiện tại chỉ có `pages_show_list`, `business_management`, `pages_read_engagement`, `pages_manage_posts` → **thiếu `read_insights`**: chỉ số Page và lượt xem từng bài trả rỗng. `bai-viet.csv` lấy được 20 bài (ngày, nội dung, link, chia sẻ).
- Reaction và bình luận từng bài cần `pages_read_user_content` → đã bỏ khỏi `bai-viet.csv`.
- Metric cũ `page_impressions`, `page_fans`, `post_impressions` đã bị Meta xoá (báo lỗi), nên chỉ dùng metric mới.
- Cần làm tiếp: tạo lại Page token với `read_insights` (và `pages_read_user_content` nếu cần reaction/bình luận).

## Kết quả sau khi có token read_insights (24/11/2026)
- Thêm `read_insights` vào quyền của app Page Poster (use case) rồi tạo lại Page token trong Graph API Explorer.
- Chạy 01/10 → 24/11: `trang-theo-ngay.csv` 55 ngày, `bai-viet.csv` 20 bài, không metric nào bị bỏ qua.
- Đối chiếu: tổng `page_media_view` 1.757 (gồm 9 lượt của 24/11), Business Suite hiện 1,7K cho 01/10–23/11 → khớp.
- Khác tài liệu: cột reaction lấy từ `post_reactions_by_type_total` (tổng các loại), thay cho `reactions.summary`; **không có cột bình luận** (cần `pages_read_user_content`). Script tự thử lại tối đa 3 lần khi Meta báo lỗi tạm (code 2).
- Token Explorer chỉ sống 1–2 giờ và không được ghi đè `FB_PAGE_TOKEN`. Chạy lại cần token mới (xem mục Cài đặt trong `dang-bai-facebook-tu-dong.md` để lấy token dài hạn có `read_insights`).

## Câu hỏi mở
- Token hiện tại có quyền `read_insights` chưa? Chưa biết, sẽ rõ ở lần gọi thử đầu. Nếu thiếu: tạo lại Page token trong Graph API Explorer, thêm `read_insights`.
- Page có thể bị Meta ẩn một số insights nếu dưới 100 người theo dõi.
- Mốc bắt đầu là **01/10/2026**, hiểu đúng chưa?
