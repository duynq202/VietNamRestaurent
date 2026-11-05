# VietNamRestaurent — Vietnamese Pixel Restaurant

Repository chính thức cho dự án game quản lý nhà hàng Pixel Việt Nam được bàn giao từ ChatGPT sang Codex.

**Trạng thái:** P1 prototype đã được người dùng duyệt. P2 hiện đang THẢO LUẬN THIẾT KẾ; **CHƯA CẤP PHÉP LẬP TRÌNH P2**. Nhiều quyết định P2 đã được chốt đến 27/10/2026 (xem `docs/DECISION_LOG.md`); còn các mục mở ở `docs/OPEN_DECISIONS.md`.

## Hướng dẫn cho Codex

Đọc theo thứ tự:
1. [AGENTS.md](AGENTS.md): nguyên tắc bắt buộc.
2. [docs/CODEX_MASTER_PROMPT.md](docs/CODEX_MASTER_PROMPT.md): prompt đầy đủ và thông số dự án.
3. [docs/OPEN_DECISIONS.md](docs/OPEN_DECISIONS.md): quyết định còn mở.
4. [docs/FIRST_TASK.md](docs/FIRST_TASK.md): nhiệm vụ đầu tiên.
5. [docs/MIGRATION_CHECKLIST.md](docs/MIGRATION_CHECKLIST.md): tình trạng bàn giao và nguồn còn thiếu.
6. [docs/DECISION_LOG.md](docs/DECISION_LOG.md): toàn bộ quyết định của người dùng (nguyên văn) đến 27/10/2026.
7. [docs/APPROVED_TABLES.md](docs/APPROVED_TABLES.md): các bảng số liệu P2 đã được duyệt.
8. [docs/CONFLICTS_AND_STALE_ITEMS.md](docs/CONFLICTS_AND_STALE_ITEMS.md): mâu thuẫn và mục lỗi thời cần người dùng quyết định.

**Nguồn có trong repo (kiểm tra 05/11/2026):** mã nguồn P1 trong `P1_CODEX_PACKAGE/` (6/6 test đạt trên `dist/` có sẵn) và PDF đặc tả `docs/Dac_ta_...v1.0.pdf` (SHA256 khớp bản gốc). **Không tái tạo P1 từ suy đoán; không sửa P1 khi chưa được phép.**

Chỉ tiếp tục thiết kế một quyết định mỗi lần, trình bày bằng tiếng Việt, dừng chờ phê duyệt.

## Mục tiêu trước mắt

Tiếp tục mục H-45.2.1 (cân bằng lưu lượng khách), hướng đến áp lực vừa phải và khoảng 4.0 sao trung bình khi chưa có buff nhân viên mạnh. ChatGPT đã đưa đề xuất A/B/C (khuyến nghị A) nhưng người dùng **chưa** duyệt; mục này chưa chốt số liệu, không được tự quyết thay người dùng. Trước đó cần chốt mâu thuẫn C-01 (hệ số 0,70× hay 0,75× ở 1★) trong `docs/CONFLICTS_AND_STALE_ITEMS.md`.

Repository: https://github.com/duynq202/VietNamRestaurent
