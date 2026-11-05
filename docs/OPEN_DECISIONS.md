# Pending decisions (NOT APPROVED)

> Cập nhật 05/11/2026 theo toàn bộ cuộc trò chuyện ChatGPT đến 27/10/2026 (xem `docs/DECISION_LOG.md`).
> Không diễn giải mục tiêu, ví dụ hay giả thuyết thành thông số đã duyệt. Mỗi lần chỉ đề xuất một quyết định, dừng chờ APPROVED / REVISION.

## 1. H-45.2.1 — hiệu chỉnh lưu lượng khách (HIỆN TẠI)

Đã khóa liên quan: H-45.R(B) sao nhà hàng ảnh hưởng xác suất người đi đường quyết định ghé (#544); H-45.1(C) người đi đường muốn ghé tới cửa, nếu đầy thì quay đi, không tạo đánh giá (#548); R mới = 0,95·R cũ + 0,05·S; hạn giao món 30 s; H-37B(A), H-36D.

Mục tiêu người dùng (#552, **chưa phải thông số**): tăng số khách, áp lực vừa phải, sao trung bình khoảng 4 khi không có buff mạnh (1 Đầu bếp Common + 1 Phục vụ Common, 1 bàn + 2 ghế, không buff mạnh).

Đề xuất mới nhất của ChatGPT (cuối chat, **CHƯA được duyệt, CHƯA có phản hồi APPROVED/REVISION**, chưa chạy mô phỏng nào):

| Thông số | A — Cân bằng mới (khuyến nghị) | B — Đông khách | C — Phố đông, ít người ghé |
|---|---:|---:|---:|
| Người đi đường/phút | 20 | 24 | 24 |
| Khoảng cách trung bình | 3 s | 2,5 s | 2,5 s |
| Xác suất muốn ghé tại 3★ | 20% | 22% | 16% |
| Lượt muốn ghé/phút tại 3★ | 4,0 | 5,28 | 3,84 |

Các số ở bảng trên là giả thuyết thiết kế. Cần giữ tách bạch: người đi đường quan sát → người quyết định ghé → khách được nhận → khách phục vụ xong.
Điều kiện chặn: phải chốt C-01 (hệ số 0,70× hay 0,75× ở 1★) và cách nội suy theo điểm sao (xem `docs/CONFLICTS_AND_STALE_ITEMS.md`).

## 2. Nhu cầu khách cơ bản theo Level người chơi
Chưa chốt.

## 3. Số cửa tối đa trên tường trái
Giá cửa bổ sung **đã khóa 1.500 Xu/cửa** (F-30A, #153); mỗi cửa có lưu lượng riêng, khách đi theo lượt, có thể ùn tắc (F-31B, #157). **Số cửa tối đa** vẫn chưa chốt, và cách cân bằng hàng chờ khi có nhiều cửa.

## 4. E-47A — cân bằng kinh tế (hoãn từ #239)
Gồm: Xu khởi đầu (G-02, #528), giá mua/bán nội thất (H-42A/C), giá món và điều kiện mở khóa, xác nhận bảng chi phí mở rộng 459.000 Xu (C-02), giá nâng cấp Bếp/Phục vụ cấp 2 (C-04). Người dùng từng nhận xét doanh thu các cấp sau quá cao (#231) nhưng yêu cầu tạm bỏ qua (#239).

## 5. Tài khoản và bảo mật còn mở
- Cấu hình nhà cung cấp Google/Facebook.
- Chi tiết chống gian lận do server làm chủ (ngoài các quy tắc đã duyệt: A-02.2, A-02.4, A-03.3).
- Chu kỳ checkpoint (A-02.5) và thời lượng cửa sổ thử lại Refresh Token (A-03.3): chưa khóa số cụ thể.
- Ngưỡng hiệu suất H-43 chỉ là mục tiêu sơ bộ; chỉ khóa sức chứa sau benchmark.

## 6. Khác
- Thanh toán thật / Premium, PSP, rà soát pháp lý: vẫn OPEN theo SRS v1.0.
- Bán nội thất khi giá hoàn Xu chưa duyệt: H-42C đã duyệt cơ chế, chưa triển khai hoàn Xu.
- Mọi tham số không có trong đặc tả đã khóa vẫn là TBD, không phải quyền tự chọn.

---

## Đã giải quyết kể từ bản trước (giữ để truy vết)

| Mục cũ | Kết quả | Nguồn |
|---|---|---|
| Ghép bàn–ghế xác định | H-44(A): tự liên kết theo Seat Anchors khi xác nhận bố cục; bàn 2 vị trí A/B; ghế chỉ phục vụ 1 khách; chỗ không có ghế hợp lệ bị vô hiệu | #532 |
| Kiểm tra đường đi | H-39B(A): lỗi cấu trúc / cửa bị chặn thì không áp dụng; nội thất riêng lẻ không tiếp cận được thì cảnh báo, vô hiệu hóa, vẫn cho RUNNING | #392 |
| Liên kết Guest ↔ tài khoản | A-01(A): chỉ liên kết với tài khoản chưa có tiến trình; không tự gộp/ghi đè; người chơi chọn tiếp tục Guest hoặc chuyển sang tài khoản cũ | #480 |
| UX phiên bị thu hồi / thiết bị mới | A-02.3(A): đăng nhập thiết bị mới thu hồi phiên cũ ngay; phiên cũ đang EDITING thì hủy bản nháp, đang DRAINING thì hoàn tất khách rồi về RUNNING | #496 |
| UX nhận thu nhập offline | A-02.1(A) + A-02.2(A): khóa thao tác khi mất mạng; server gửi snapshot chính thức kèm phiên bản | #484, #492 |
| Anti-cheat (một phần) | Idempotency theo mã yêu cầu (A-02.4), Compact Snapshot + Durable Event Log (A-02.5), Lazy Recovery (A-02.6), Atomic Rotation + Safe Retry (A-03.3) | #499–#520 |
