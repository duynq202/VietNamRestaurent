# Migration status

> Cập nhật 05/11/2026.

- [x] Repository `duynq202/VietNamRestaurent`, nhánh `main` (đã chuyển **public**).
- [x] ChatGPT design context captured into Markdown working documents.
- [x] Full P1 approved prototype sources đã có trong `P1_CODEX_PACKAGE/` (TypeScript `src/`, `dist/`, HTML demo `P1_STANDALONE_DEMO.html`, `tests/`, `P1_MANIFEST.json`, `docs/P1_CODEX_HANDOFF.md`). Ngày 05/11/2026 đã chạy `node --test tests/*.test.mjs` trên bản `dist/` có sẵn: **6/6 đạt**. Chưa chạy lại `tsc`/`npm run build` (chưa cài TypeScript trong môi trường kiểm tra).
- [x] Original design SRS v1.0 PDF (15 trang, 2026-10-24) đã có trong repo tại `docs/Dac_ta_phan_tich_thiet_ke_game_nha_hang_pixel_Viet_Nam_v1.0.pdf`. Ngày 05/11/2026 đã tính SHA256 của file này: `b4b27335a62bafc2017afd15a673c36eab9b7f3e4f922c97248e896a468be5ef`, **khớp** SHA256 gốc ghi trong `SOURCE_PRECEDENCE_AND_DIFF.md`. (Ghi chú cũ yêu cầu đặt ở `docs/reference/SRS_v1_2026-10-24.pdf`; đường dẫn hiện tại là `docs/`, giữ nguyên.)
- [x] Conflicts between original SRS and later P2 decisions documented in `docs/SOURCE_PRECEDENCE_AND_DIFF.md`.
- [x] Toàn bộ quyết định của người dùng trong cuộc trò chuyện "Lập trình prototype nhà hàng" (đến 27/10/2026) đã được chép nguyên văn vào `docs/DECISION_LOG.md`; bảng số liệu đã duyệt ở `docs/APPROVED_TABLES.md`.
- [x] Mâu thuẫn và mục lỗi thời giữa tài liệu cũ và quyết định mới ghi ở `docs/CONFLICTS_AND_STALE_ITEMS.md`.
- [ ] Người dùng giải quyết các mâu thuẫn mục A (C-01 … C-06) trong `docs/CONFLICTS_AND_STALE_ITEMS.md`.
- [ ] Entire PDF reconciled line-by-line with all approved later decisions.
- [ ] Any missing earlier detailed H-36D/H-37B(A) test definitions checked against primary sources.
- [ ] Mọi quyết định còn mở trong `docs/OPEN_DECISIONS.md` được người dùng duyệt độc lập.
- [ ] Explicit user authorization to start P2 implementation. **Chưa có.**

No full automatic transfer of ChatGPT conversation history occurs through GitHub. Markdown handoff documents are a careful summary of known context; `docs/DECISION_LOG.md` chép nguyên văn tin nhắn người dùng nhưng không chứa lời của trợ lý.
