# Nguồn quét seeding Facebook

Skill `quet-seeding` đọc file này mỗi lần chạy (5 giờ/lần). Thêm/bớt nguồn bằng cách sửa file. Mỗi lần chỉ quét tối đa 5 nguồn.

## Từ khoá tìm bài trên Facebook
Dùng `https://www.facebook.com/search/posts/?q=<từ khoá>`
- cần tư vấn sửa nhà hà nội
- nhà bị thấm dột
- chống thấm trần nhà
- xin báo giá xây nhà hà nội
- cải tạo nhà cũ hà nội
- nhà bị nứt tường
- tìm thợ xây nhà hà nội

## Nhóm Facebook (người dùng bổ sung link)
Nhóm chủ nhà/xây dựng ở Hà Nội. Cần tài khoản đăng nhập trong Chrome đã là thành viên nhóm.
- [Link nhóm]
- [Link nhóm]

## Nhận kết quả (Zalo Bot)
Sau mỗi lần quét có bài mới, agent gửi file Excel cho bạn qua Zalo Bot bằng `marketing/scripts/gui-zalo.py`. Token và chat id nằm trong biến môi trường người dùng `ZALO_BOT_TOKEN`, `ZALO_CHAT_ID` (không ghi trong repo).

## Không quét
- Fanpage đối thủ: đã có trong `marketing/mang-xa-hoi/nguon.md` (dùng để lấy ý tưởng bài, không phải để seeding).
