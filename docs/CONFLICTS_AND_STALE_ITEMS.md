# CONFLICTS AND STALE ITEMS — mâu thuẫn và mục lỗi thời

> Cập nhật: 05/11/2026. Đối chiếu `docs/CODEX_MASTER_PROMPT.md`, `docs/FIRST_TASK.md`, `README.md`, `docs/MIGRATION_CHECKLIST.md` (bản trước đợt cập nhật này) với toàn bộ tin nhắn người dùng trong cuộc trò chuyện ChatGPT gốc (`docs/DECISION_LOG.md`).
> Theo quy tắc của dự án: **không tự chọn cách hòa giải khi chưa có quyết định**. Cột "Đề xuất xử lý" chỉ là gợi ý để người dùng chọn; mục nào ghi "đã ghi chú" nghĩa là tài liệu cũ vẫn giữ nguyên chữ, chỉ được gắn chú thích `[CẬP NHẬT 2026-11-05]`.

## A. Cần người dùng quyết định

| ID | Vấn đề | Tài liệu cũ | Quyết định/tin nhắn người dùng | Đề xuất xử lý |
|---|---|---|---|---|
| C-01 | Hệ số thu hút khách theo sao, mốc 1★ | `CODEX_MASTER_PROMPT.md` §5 và `FIRST_TASK.md`: 0,75× ở 1★ đến 1,30× ở 5★ | #82 (C-05/C-06): người dùng duyệt "0,7×–1,3×"; bảng trợ lý khi đó: 1★ 0,70, 2★ 0,85, 3★ 1,00, 4★ 1,15, 5★ 1,30. Con số 0,75× chỉ thấy lần đầu trong lời trợ lý ở #547 ("đã xác lập"), không tìm thấy tin nhắn người dùng duyệt 0,75 | Người dùng chọn 0,70× hay 0,75×. Cách nội suy cho điểm sao không nguyên vẫn chưa duyệt |
| C-02 | Chi phí mở rộng diện tích | `CODEX_MASTER_PROMPT.md` §8: L30 40.000, L40 80.000, L50 160.000 (cộng với các mốc trước = 314.000 Xu) | #112 duyệt F-06/F-07 "tổng 459.000 Xu" với L30 55.000, L40 120.000, L50 250.000 (xem `APPROVED_TABLES.md` §4). Nhưng #415 (H-41) ghi "chưa quy định chi phí Xu vì E-47A tạm hoãn" | Xác nhận bảng 459.000 Xu vẫn có hiệu lực hay phải chốt lại tại E-47A |
| C-03 | Giá món ăn | `CODEX_MASTER_PROMPT.md` §7: 10/12/16/20/25/30 Xu | Trong cuộc trò chuyện chỉ thấy một bảng đề xuất khác (#84: 20/26/34/42/54/70 Xu, kèm Level mở khóa và phí mở khóa), tự ghi là chưa duyệt. Không tìm thấy tin nhắn người dùng duyệt bộ giá nào. #231 người dùng nhận xét doanh thu quá cao; #239 hoãn cân bằng (E-47A) | Không dùng bộ giá nào như thông số khóa cho tới khi chốt E-47A. Nếu bộ 10–30 Xu đến từ PDF hoặc chat khác, cần nguồn |
| C-04 | Cơ sở của chi phí nâng cấp Bếp/Phục vụ và "+2%/cấp" | `CODEX_MASTER_PROMPT.md` §6: cấp 2 Bếp 200 Xu, Phục vụ 160 Xu; +2% công suất mỗi cấp | Người dùng chỉ duyệt: tối đa cấp 50, tăng giá 18%/cấp tới cấp 30 rồi 15%/cấp (#85, #224). Mức 200/160 Xu chỉ thấy trong bảng "giá nâng cấp mẫu" của trợ lý (#47); "+2%/cấp" trong đề xuất của trợ lý (#88), người dùng chỉ nêu "2% mỗi cấp" riêng cho dọn bàn (#187) | Xác nhận lại giá cấp 2 và hệ số công suất khi chốt E-47A |
| C-05 | Công thức XP | `CODEX_MASTER_PROMPT.md` §3: "5 XP per completed cashier payment" | #82: 1 XP trên 20 Xu giá gốc món bán, không tính Buff. #89: đường cong level `ceil(12 × Level^1.5)` | Đã ghi chú ở master prompt. Cách hiểu "XP mỗi level hay cộng dồn" suy ra từ bảng so sánh của trợ lý (#88: Level 5 ≈ 205 XP cộng dồn), không do người dùng nêu — cần xác nhận khi lập trình |
| C-06 | Xu khởi đầu, giá nội thất, giá bán lại | — | E-47A tạm hoãn (#239, #528, #420, #425) | Chốt tại E-47A cùng cân bằng doanh thu |

## B. Tài liệu cũ đã lỗi thời so với quyết định của người dùng (đã ghi chú trong master prompt)

| ID | Tài liệu cũ nói | Quyết định sau cùng |
|---|---|---|
| S-01 | Duplicate = 20 mảnh; nâng bậc 20/20/40/40 mảnh (120 tổng) | H-23C chốt lại: mảnh mỗi lần Roll trùng theo độ hiếm 20/40/80/100/160; mảnh cần theo bậc ở `APPROVED_TABLES.md` §1; 4 lần Roll trùng để lên bậc 5 (#285, #289) |
| S-02 | Buff Legendary tốc độ +20–25% | H-16A/H-27A: Legendary tốc độ 25–35%, thu nhập 10–12% (`APPROVED_TABLES.md` §2). Trần tốc độ +40%/nhân viên |
| S-03 | "Other pity-reset behavior unspecified" | R-03A (#64) và H-29A–D (#300): hai bộ đếm theo loại vé, dùng chung hai nghề, đổi nghề không mất tiến trình; Roll độ hiếm trước rồi nâng kết quả dưới ngưỡng; Roll trùng vẫn tính và reset khi đạt ngưỡng; kết quả ở ô chờ vẫn là Roll hoàn tất |
| S-04 | Cửa bổ sung: giá TBD | F-30A (#153): 1.500 Xu/cửa. Số cửa tối đa vẫn chưa chốt |
| S-05 | Kho dự bị 20 (#68) | 50 (#242) |
| S-06 | Đề cập "nhóm nâng cấp Bàn ghế" (U-01) | Bỏ ở U-03 (#116), thay bằng mua/đặt nội thất và mở rộng diện tích |
| S-07 | `README.md`, `AGENTS.md`, `MIGRATION_CHECKLIST.md`: mã nguồn P1 chưa có trong repo | `P1_CODEX_PACKAGE/` đã có mã nguồn, HTML demo, test (xem `MIGRATION_CHECKLIST.md`) |
| S-08 | `MIGRATION_CHECKLIST.md`: repo private | Người dùng đã chuyển public (05/11/2026) |
| S-09 | `FIRST_TASK.md`: chưa có đề xuất H-45.2.1 | ChatGPT đã đưa ba cấu hình A/B/C (khuyến nghị A) ở cuối chat; người dùng **chưa** phản hồi APPROVED/REVISION. Đề xuất đó là chưa duyệt, xem `OPEN_DECISIONS.md` mục 1 |
| S-10 | H-31B và H-36A | Có hai phương án liên tiếp: H-31B A (#317) bị thay bởi B (#319); H-36A A (#355) bị thay bởi B (#357). Bản hiệu lực: H-31B(B) chỉ khóa khi người chơi chủ động; H-36A(B) hàng đợi Bếp FIFO |
| S-11 | `SOURCE_PRECEDENCE_AND_DIFF.md` và `CODEX_MASTER_PROMPT.md` §12: PDF gốc chưa được commit | PDF đã có tại `docs/Dac_ta_...v1.0.pdf`, SHA256 khớp bản gốc (kiểm tra 05/11/2026) |

## C. Việc chưa thể xác minh từ export

- Ảnh tham chiếu game Restaurant Streets ở #135 không có trong export (chỉ có con trỏ ảnh).
- File PDF đặc tả gốc đã có trong `docs/` (SHA256 khớp), nhưng chưa được đối chiếu từng dòng với các quyết định mới; `docs/SOURCE_PRECEDENCE_AND_DIFF.md` mới liệt kê các khác biệt đã biết.
