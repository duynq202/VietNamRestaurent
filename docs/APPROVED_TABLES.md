# APPROVED TABLES — bảng số liệu đã được người dùng duyệt (P2, chỉ thiết kế)

> Cập nhật: 05/11/2026, từ cuộc trò chuyện ChatGPT "Lập trình prototype nhà hàng" (23–27/10/2026).
> Mỗi bảng dưới đây xuất hiện lần đầu trong tin nhắn của trợ lý, rồi được **người dùng duyệt bằng tin nhắn riêng** (xem `docs/DECISION_LOG.md`, số `#N`). Nếu một bảng chưa có tin nhắn duyệt của người dùng thì **không** nằm ở đây.
> Giá trị DEMO của P1 không phải thông số production.
> Chưa lập trình P2.

## 1. Nhân viên: mảnh nâng cấp và giá Xu

### H-23C — Mảnh nhận khi Roll trùng và mảnh cần để nâng bậc (người dùng duyệt ở #289; bản chốt do trợ lý nêu lại)
Mảnh thuộc về đúng nhân viên được Roll trùng. Cần 4 lần Roll trùng đúng nhân viên để có đủ mảnh lên bậc 5, áp dụng cho mọi độ hiếm.

| Độ hiếm | Mảnh mỗi lần Roll trùng | Bậc 1→2 | Bậc 2→3 | Bậc 3→4 | Bậc 4→5 | Tổng |
|---|---:|---:|---:|---:|---:|---:|
| Common | 20 | 10 | 10 | 20 | 40 | 80 |
| Uncommon | 40 | 20 | 20 | 40 | 80 | 160 |
| Rare | 80 | 40 | 40 | 80 | 160 | 320 |
| Epic | 100 | 50 | 50 | 100 | 200 | 400 |
| Legendary | 160 | 80 | 80 | 160 | 320 | 640 |

Nghỉ việc: hoàn 100% mảnh đã tiêu, không hoàn Xu, tuyển lại bắt đầu bậc 1 (H-24B). Nâng bậc thủ công từng bậc, server nâng một bậc mỗi giao dịch, không tự nâng khi Roll trùng (H-32D).

### H-23D — Giá Xu nâng cấp nhân viên (duyệt #255)

| Độ hiếm | Bậc 1→2 | Bậc 2→3 | Bậc 3→4 | Bậc 4→5 |
|---|---:|---:|---:|---:|
| Common | 100 | 200 | 400 | 800 |
| Uncommon | 250 | 500 | 1.000 | 2.000 |
| Rare | 750 | 1.500 | 3.000 | 6.000 |
| Epic | 2.500 | 5.000 | 10.000 | 20.000 |
| Legendary | 8.000 | 16.000 | 32.000 | 64.000 |

## 2. Buff nhân viên

Quy tắc chung (H-16A, duyệt #217): Legendary có đồng thời Buff thu nhập và tốc độ; Common–Epic chỉ có một trong hai. Giới hạn: tổng Buff thu nhập toàn nhà hàng tối đa **+30%**; Buff tốc độ tối đa **+40% riêng mỗi nhân viên**. Buff không đổi tốc độ đi bộ, thời gian Thu ngân hoặc thời gian dọn bàn.

H-28A (duyệt #296): Buff cố định theo mã nhân vật; Common–Epic chia đều 50% thu nhập / 50% tốc độ trong từng nghề và độ hiếm; nhân vật cùng nghề và cùng độ hiếm có xác suất Roll bằng nhau.

### H-27A — Buff tốc độ theo bậc (duyệt #278, tăng tuyến tính)

| Độ hiếm | Bậc 1 | Bậc 2 | Bậc 3 | Bậc 4 | Bậc 5 |
|---|---:|---:|---:|---:|---:|
| Common | 2% | 2,25% | 2,5% | 2,75% | 3% |
| Uncommon | 4% | 4,75% | 5,5% | 6,25% | 7% |
| Rare | 8% | 9% | 10% | 11% | 12% |
| Epic | 14% | 15,5% | 17% | 18,5% | 20% |
| Legendary | 25% | 27,5% | 30% | 32,5% | 35% |

### H-27B — Buff thu nhập theo bậc (cùng quyết định #278)

| Độ hiếm | Bậc 1 | Bậc 2 | Bậc 3 | Bậc 4 | Bậc 5 |
|---|---:|---:|---:|---:|---:|
| Common | 1% | 1,25% | 1,5% | 1,75% | 2% |
| Uncommon | 2% | 2,5% | 3% | 3,5% | 4% |
| Rare | 4% | 4,5% | 5% | 5,5% | 6% |
| Epic | 7% | 7,5% | 8% | 8,5% | 9% |
| Legendary | 10% | 10,5% | 11% | 11,5% | 12% |

Công thức: B(r) = B_min + (r−1)/4 × (B_max − B_min), r = bậc 1..5.

## 3. Danh mục nhân vật (H-26A, duyệt #274)

| Độ hiếm | Đầu bếp | Phục vụ | Tổng |
|---|---:|---:|---:|
| Common | 12 | 12 | 24 |
| Uncommon | 10 | 10 | 20 |
| Rare | 8 | 8 | 16 |
| Epic | 4 | 4 | 8 |
| Legendary | 1 | 1 | 2 |
| **Tổng** | **35** | **35** | **70** |

Sổ tay nhân viên (H-30B–E, duyệt #322): 70 ô, bộ lọc nghề/độ hiếm/trạng thái, lưu lịch sử khám phá vĩnh viễn, không có thưởng. Chỉ tính khám phá khi nhân viên thực sự được nhận (H-30A).

## 4. Mở rộng diện tích (F-06/F-07, duyệt #112; lộ trình H-41 duyệt #415)

| Level yêu cầu | Diện tích | Chi phí (F-06) |
|---|---|---:|
| 1 | 10×10 | miễn phí |
| 5 | 12×12 | 1.000 Xu |
| 10 | 14×14 | 4.000 Xu |
| 15 | 16×16 | 9.000 Xu |
| 20 | 18×18 | 20.000 Xu |
| 30 | 20×20 | 55.000 Xu |
| 40 | 22×22 | 120.000 Xu |
| 50 | 24×24 | 250.000 Xu |
| Tổng | | **459.000 Xu** |

Mở rộng về phía phải và xuống dưới; tường trái giáp đường phố giữ nguyên. Đạt Level chỉ mở quyền; người chơi chủ động mở rộng trong EDITING và xác nhận lưu; có thể lên thẳng kích thước cao nhất đã mở khóa.
> **Lưu ý:** tin nhắn H-41 (#415) viết "chưa quy định chi phí Xu vì E-47A tạm hoãn", trong khi #112 đã duyệt tổng 459.000 Xu. Xem `docs/CONFLICTS_AND_STALE_ITEMS.md` C-02.

## 5. Danh mục 19 mẫu nội thất (H-42E.8 duyệt #465; kích thước và điểm tương tác H-42E.9–11 duyệt #469)

Xoay 4 hướng (0°, 90°, 180°, 270°) cho nội thất sàn; kích thước và điểm tương tác xoay cùng vật phẩm. Mỗi vật phẩm tham chiếu tới mẫu chung; điểm tương tác định sẵn theo mẫu và hướng, cache theo phiên bản bố cục (H-42E.7).

| Mã | Mẫu | Ô chiếm | Điểm tương tác / ghi chú |
|---|---|---|---|
| T01 | Bàn ăn nhỏ | 1×1 | Hai vị trí ăn A/B |
| T02 | Bàn ăn dài | 2×1 | Hai vị trí ăn A/B ở hai phía cạnh dài |
| C01 | Ghế gỗ | 1×1 | Một vị trí ngồi |
| C02 | Ghế dài | 2×1 | Một vị trí ngồi, không tăng sức chứa |
| K01 | Bếp nhỏ | 1×1 | Điểm Đầu bếp + điểm nhận món |
| K02 | Bếp lớn | 2×1 | Điểm Đầu bếp + điểm nhận món; không tự tăng tốc |
| R01 | Quầy Thu ngân nhỏ | 1×1 | Điểm nhân viên + điểm khách |
| R02 | Quầy Thu ngân dài | 2×1 | Điểm nhân viên + điểm khách; một giao dịch/lần |
| WC01 | Bồn cầu cơ bản | 1×1 | Khách ngồi trực tiếp |
| WC02 | Bồn cầu kiểu khác | 2×1 | Một vị trí ngồi, một khách/lần |
| P01 | Vách ngăn thẳng | 1×1 | Chặn đường, không tương tác |
| P02 | Vách ngăn góc | 1×1 | Chặn đường |
| P03 | Vách ngăn đầu đoạn | 1×1 | Chặn đường |
| F01 | Chậu cây | 1×1 sàn | Cản đường |
| F02 | Kệ trang trí | 2×1 sàn | Cản đường |
| F03 | Bình trang trí | 1×1 sàn | Cản đường |
| D01 | Tranh treo tường | 1 đoạn tường | Không cản đường |
| D02 | Đồng hồ treo tường | 1 đoạn tường | Không cản đường |
| D03 | Bảng trang trí | 2 đoạn tường liền | Không cản đường |

Giá mua/bán nội thất chưa chốt (E-47A). Bàn 200 Xu / ghế 100 Xu theo F-08 (#120). Quầy Thu ngân bổ sung 5.000 Xu (E-20A); cửa bổ sung 1.500 Xu (F-30A).
Gắn đồ treo (H-42E.11–13, #469/#473/#477): gắn được lên tường bao và hai mặt hợp lệ của vách ngăn, mỗi mặt quản lý riêng; không treo chồng; bảng dài cần hai đoạn tường liền cùng mặt phẳng; đồ treo di chuyển/xoay theo vách nếu hợp lệ, không hợp lệ thì cảnh báo và vào kho khi xác nhận lưu.

## 6. Thông số vận hành đã duyệt (tổng hợp từ các quyết định)

| Thông số | Giá trị | Nguồn |
|---|---|---|
| Thời gian ăn | 15 s | #75, #78 |
| Hạn giao món | ≤30 s từ lúc khách đến tới lúc nhận món; đúng 30 s vẫn hợp lệ | #78, #364 |
| Nấu cơ bản | 8 s/món (7,5 món/phút/đầu bếp) | #206 |
| Thanh toán | 3 s/khách; chờ Thu ngân tối đa 60 s | #187, #376 |
| Dọn bàn | 4 s/bàn cơ bản (Service L1); giảm 2%/cấp Phục vụ; dọn 1 phần 2 s, 2 phần 4 s | #187, #380 |
| Tốc độ di chuyển | khách 2 ô/s, nhân viên 3 ô/s, qua cửa 2 s/lượt | #166 |
| WC | 20% khách đã thanh toán dùng; 6 s; 1 khách/WC; không hàng chờ | #446 |
| Ưu tiên phục vụ | giao món gần hạn 30 s; thanh toán chờ ≥12 s và bàn bẩn ≥8 s tăng ưu tiên; luôn có ≥1 Phục vụ Tự động | #201 |
| Hàng đợi Bếp | FIFO; khách quá 30 s bỏ đi thì hủy cả món đang nấu | #357, #361 |
| Thu ngân | 1 quầy miễn phí, mỗi quầy thêm 5.000 Xu; một hàng chờ FIFO chung | #191, #368 |
| Nâng cấp Bếp/Phục vụ | tối đa cấp 50; giá +18%/cấp đến cấp 30, +15%/cấp từ cấp 31–50 | #85, #224 |
| XP | 1 XP / 20 Xu giá gốc món bán (không tính Buff); đường cong ceil(12 × Level^1.5) | #82, #89 |
| Giá Roll | Vé Thường 1.000 Xu; Vé Đặc Biệt nhận từ Level (40 vé từ Level 5 đến 50) | #68 |
| Kho dự bị | 50 nhân viên (thay cho mức 20 ở #68) | #242 |
| Offline | tối đa 8 giờ, 100% thu nhập, Lazy Offline Simulation | #40, #364, #488 |
| Phiên | Access Token 15 phút; Refresh Token và phiên Guest hết hạn sau 30 ngày không hoạt động | #516 |

## 7. Thưởng Vé Đặc Biệt theo Level (R-04, duyệt #68 "theo bảng")

| Level đạt được | Vé nhận | Tổng tích lũy |
|---|---:|---:|
| 5 | 10 | 10 |
| 10 | 3 | 13 |
| 15 | 3 | 16 |
| 20 | 4 | 20 |
| 25 | 2 | 22 |
| 30 | 4 | 26 |
| 35 | 2 | 28 |
| 40 | 4 | 32 |
| 45 | 3 | 35 |
| 50 | 5 | 40 |

Cấp một lần mỗi mốc, backend xác minh; nếu lên nhiều Level cùng lúc phải cấp đủ các mốc đã vượt; không nhận trùng khi đăng nhập lại hoặc gửi yêu cầu nhiều lần. P2 chưa mua Vé Đặc Biệt bằng Premium (R-02, #60).
> Phần "vé không hết hạn, không bán/chuyển" và thiết kế bảng dữ liệu trong tin nhắn trợ lý trước #68 là đề xuất của trợ lý; người dùng chỉ nêu duyệt tổng số vé và mốc Level 5, nên hai điểm đó chưa được coi là đã khóa.
