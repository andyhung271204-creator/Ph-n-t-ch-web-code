# Quy trình làm tính năng (bắt buộc)

Mọi thay đổi code đi theo 5 bước. Không nhảy bước. Luôn áp dụng tinh thần skill `ponytail` (làm ít nhất có thể mà vẫn đúng).

1. **Ý tưởng**: người dùng nêu ý tưởng. Nếu còn mơ hồ thì hỏi tối đa vài câu ngắn rồi mới viết tài liệu.
2. **Tài liệu**: viết `docs/specs/<slug>.md` (slug không dấu, dùng gạch ngang). Ở bước này **chưa sửa code**.
   - Dòng đầu: `Trạng thái: Nháp`
   - Các mục: Mục tiêu · **Có cần làm không? Đã có sẵn gì để dùng lại?** (ponytail: component, helper, CSS native có sẵn) · Phạm vi (làm / không làm) · File sẽ động tới · Nội dung / giao diện dự kiến · Cách kiểm tra · Câu hỏi mở
   - Ý tưởng nào thừa hoặc đã có sẵn thì nói thẳng trong tài liệu.
   - Nếu có phần nội dung chữ thì phác luôn trong tài liệu (theo `content.md`, `company.md`).
   - Ngắn gọn, tiếng Việt có dấu. Đưa người dùng link file.
3. **Chỉnh sửa**: người dùng góp ý thì sửa tài liệu, lặp lại đến khi người dùng nói rõ "duyệt" / "ok code đi". Khi đó đổi dòng đầu thành `Trạng thái: Đã duyệt`.
4. **Code + test**: code đúng phạm vi đã duyệt, theo ponytail (dùng lại thứ có sẵn, ưu tiên CSS native, không thêm dependency). Phát sinh ngoài phạm vi thì dừng lại hỏi, rồi cập nhật tài liệu. Thay đổi UI vẫn đi qua Stitch (xem `workflow.md`). Test theo thứ tự:
   1. `npm run build` phải qua.
   2. `node scripts/kiem-tra.mjs [/trang ...]` (chạy trên `npm run build && npm run preview`; không chạy trên `npm run dev` vì đường dẫn có "Môn học" làm dev server báo 404 giả): kiểm tra ở 375/768/1280px không cuộn ngang, không lỗi console, vùng chạm ≥ 44px, link nội bộ không 404. Một script dùng chung cho mọi tính năng; chỉ viết test riêng khi có logic thật (vd. form).
   3. Chụp screenshot desktop/mobile theo `workflow.md` và đối chiếu design.
   4. Soát: chạy skill `ponytail:ponytail-review` và `code-review` trên phần vừa viết, sửa những gì đúng. Nếu động tới nội dung trang thì gọi thêm agent `seo-reviewer`.
5. **Handoff**: báo lại những gì đã làm · kết quả từng bước test ở trên (đạt / không đạt, có lỗi thì nói thật) · chỗ khác với tài liệu · việc còn lại · link localhost. Đổi trạng thái thành `Trạng thái: Đã xong`. Chỉ commit/push khi người dùng bảo.

**Ngoại lệ, làm thẳng không cần tài liệu**: sửa nhỏ (chữ, khoảng cách, lỗi rõ ràng); các skill/routine có quy trình riêng (`viet-cam-nang`, `quet-seeding`, `len-lich-noi-dung`, `viet-lai-noi-dung-web`); người dùng nói rõ "làm luôn".
