# DECISION LOG — Vietnamese Pixel Restaurant (P1/P2)

> **Nguồn:** cuộc trò chuyện ChatGPT "Lập trình prototype nhà hàng" (conversation_id `6821aa0a-71b0-8009-95b0-5b3234b46295`), bản export `chat.html`, 23/10/2026 → 27/10/2026 (tin nhắn cuối: yêu cầu xuất P1).
> **Cách tạo:** toàn bộ tin nhắn của **người dùng** được chép NGUYÊN VĂN (đây là nơi người dùng thực sự chốt quyết định). Không diễn giải lại. Cột "Ghi chú" chỉ là làm rõ của người cập nhật tài liệu.
> **Số thứ tự `#N`** là vị trí trong chuỗi hội thoại chính (từ gốc tới nhánh hiện hành của export), dùng để truy ngược về nguồn.
> **Mức ràng buộc:** theo `docs/SOURCE_PRECEDENCE_AND_DIFF.md`, quyết định người dùng duyệt sau cùng được ưu tiên. Mã trạng thái: `APPROVED/DECISION` = người dùng đã chốt; `REVISION` = người dùng yêu cầu chỉnh; `SUPERSEDED` = bị quyết định sau thay thế; `DEFERRED` = tạm hoãn; `DISCUSSION/OBJECTIVE/QUESTION` = chưa phải quyết định.
> **Chưa lập trình P2.** Các quyết định ở đây chỉ là thiết kế.
> **Bảng số liệu** mà người dùng duyệt "theo bảng đề xuất" nằm ở `docs/APPROVED_TABLES.md`. Mâu thuẫn và mục lỗi thời trong tài liệu cũ nằm ở `docs/CONFLICTS_AND_STALE_ITEMS.md`.

---

### #0 — 23/10/2026 17:52 — `REQUEST`

> là một lập trình viên chuyên nghiệp, dựa vào bản phân tích thiết kế hệ thống tôi gửi, hãy lập trình tuần tự từng phần một, hãy hỏi ý kiến và đưa ra kết quả sau khi xong mỗi phần để tôi đưa ra quyết định tiếp theo

*Ghi chú:* Khởi đầu: lập trình tuần tự từng phần, hỏi ý kiến sau mỗi phần.

### #12 — 23/10/2026 18:21 — `REVISION`

> REVISION Phần 1. Yêu cầu chỉnh sửa: mở rộng màn hình chính của game, đưa các chức năng ở dưới thành những nút trong màn hình chính, được sắp xếp khoa học, hợp lý, học hỏi theo các tựa game khác. phần tiền, avatar nhân vật, level ở 1 góc phía trên bên phải, chỗ phục vụ ở giữa phía trên. Phần bên trái sẽ là chỗ trống để có thể thêm các nút sự kiện sau này. xoay góc của sàn nhà thành góc nhìn thẳng

*Ghi chú:* Yêu cầu chỉnh P1 (HUD, nút chức năng, góc nhìn thẳng).

### #24 — 23/10/2026 18:36 — `APPROVED`

> APPROVED Phần 1 REVISION. Hãy trao đổi với tôi về các quyết định cần chốt cho Phần 2 trước khi bắt đầu lập trình.

*Ghi chú:* P1 REVISION được duyệt. Từ đây chuyển sang thiết kế P2.

### #28 — 23/10/2026 18:39 — `DECISION`

> Tôi chọn phương án đăng nhập D: Chơi khách + đăng ký tài khoản + đăng nhập bằng google or facebook. Hãy ghi nhận quyết định và trao đổi tiếp về kiến trúc backend, chưa lập trình.

### #32 — 23/10/2026 18:40 — `DECISION`

> Tôi chọn kiến trúc Backend Node.js + NestJS + PostgreSQL + Prisma. Hãy ghi nhận và tiếp tục thảo luận về lưu tiến trình, tài khoản khách và đồng bộ nhiều thiết bị. Chưa lập trình.

### #36 — 23/10/2026 18:42 — `DECISION`

> Tôi chọn chính sách đồng bộ B: một tài khoản chỉ chơi trên một thiết bị tại một thời điểm. Hãy ghi nhận và tiếp tục chốt quy tắc tài khoản khách và thu nhập offline, chưa lập trình.

### #40 — 23/10/2026 18:44 — `DECISION`

> Tôi chọn G-01 phương án A: tài khoản khách lưu server, khôi phục qua phiên hợp lệ; E-01 phương án A: offline tối đa 8 giờ, 100% thu nhập. Hãy ghi nhận và tiếp tục hoàn thiện thiết kế P2, chưa lập trình.

### #44 — 23/10/2026 18:48 — `DECISION`

> Tôi chốt L-01: Level người chơi bằng XP; U-01: Bếp + Bàn ghế + Phục vụ; M-01: Xu. Hãy ghi nhận và hoàn thiện các quy tắc cân bằng, XP, mở khóa và giao dịch P2. Chưa lập trình.

### #48 — 23/10/2026 18:54 — `REVISION`

> REVISION bộ quy tắc P2: level sẽ quyết định cả số nhân viên tối đa được tuyển Chưa lập trình.

*Ghi chú:* Level quyết định cả số nhân viên tối đa.

### #52 — 23/10/2026 19:02 — `DECISION`

> Tôi chọn H-01: C — mức tối đa là 10 nhân viên, nhân viên sẽ phân biệt 2 nghề nghiệp cố định là đầu bếp và phục vụ, có thêm chức năng roll ngẫu nhiên nhân viên, nhân viên có thể có các buff như tăng thu nhập, tăng tốc độ chế biến và phục vụ món ăn, ... có thể phát triên thêm sau này. Hãy ghi nhận và tiếp tục thiết kế các loại nhân viên, chi phí tuyển, hiệu suất và ảnh hưởng đến doanh thu. Chưa lập trình.

### #56 — 23/10/2026 19:14 — `DECISION`

> Tôi chốt H-02: cấp 1 khởi đầu với 2 nhân viên, cấp 4 mở nhân viên thứ 3, cấp 6 mở nhân viên thứ 4, cấp 8 mở nhân viên thứ 5, cấp 10 mở nhân viên thứ 5, cấp 15 mở nhân viên thứ 6, cấp 20 mở nhân viên thứ 7, cấp 30 mở nhân viên thứ 8, cấp 40 mở nhân viên thứ 9, cấp 50 mở nhân viên thứ 10. Roll nhân viên tốn vật phẩm thường, có thể mua bằng xu. roll đặc biệt tốn vật phẩm đặc biệt có tỉ lệ ra nhân viên hiếm, có thể mua bằng tiền đặc biệt nạp mới có hoặc tham gia sự kiện hoặc nhận được khi đạt level nhất định. R-01: trả Xu cho mỗi lượt Roll, tuyển miễn phí. Hãy ghi nhận và tiếp tục chốt quy tắc độ hiếm, Buff, thay thế nhân viên và phạm vi P2. Chưa lập trình.

### #60 — 24/10/2026 04:19 — `DECISION`

> Tôi chốt H-02A: Level 10 giữ 5 nhân viên, Level 15 mở thứ 6. R-02: P2 có cả Roll thường và đặc biệt, vé đặc biệt nhận từ Level, chưa mua bằng Premium. H-03 đến H-05: Cần điều chỉnh: thêm độ hiếm huyền thoại. tỉ lệ roll của vé thường: hiếm(màu tím) 10%, cực hiếm (màu cam) 1%, huyền thoại (màu đỏ) 0,1%. tỉ lệ roll của vé đặc biệt: hiếm(màu tím) 20%, cực hiếm (màu cam) 5%, huyền thoại (màu đỏ) 1%. mỗi 10 lần roll vé thường chắc chắn có 1 hiếm, mỗi 10 lần vé đặc biệt chắc chắn có 1 cực hiếm. Hãy ghi nhận và tiếp tục hoàn thiện thiết kế P2, chưa lập trình.

### #64 — 24/10/2026 04:22 — `DECISION`

> Tôi chọn R-03 Pity phương án A: theo chuỗi thất bại, reset khi nhận độ hiếm đạt yêu cầu. Giữ nguyên xác suất tím/cam/đỏ đã chốt và bộ đếm riêng cho từng loại vé. Hãy tiếp tục hoàn thiện quy tắc Buff Huyền thoại, kho nhân viên dự bị, giá vé thường và thưởng vé đặc biệt theo Level. Chưa lập trình.

### #68 — 24/10/2026 04:24 — `DECISION`

> Tôi chốt H-04: Huyền thoại có Buff thu nhập và Buff tốc độ theo nghề; H-05: Kho dự bị 20 nhân viên; R-05: 1.000 Xu/Vé Thường; R-04: 40 Vé Đặc Biệt từ Level 5 đến 50, Level 5 nhận 10 vé theo bảng. Hãy ghi nhận và tiếp tục hoàn thiện thiết kế P2, chưa lập trình.

### #71 — 24/10/2026 04:33 — `DECISION`

> Tôi chọn E-02: cần điều chỉnh: Doanh thu phụ thuộc công suất Bếp, Phục vụ, Bàn ghế và nhu cầu khách. Buff tác động đúng bộ phận; người chơi cần cân bằng nhà hàng. Độ hài lòng của khách hàng sẽ quyết định đánh giá của nhà hàng, nếu khách hàng phải chờ quá lâu sẽ nhận được đánh giá xấu. Các mức sao nhà hàng từ 1 đến 5 sao. Nhà hàng được đánh giá càng cao thì sẽ càng có nhiều khách hàng tới quán. Nếu hết chỗ ngồi thì khách hàng sẽ đứng xếp hàng, đứng chờ lâu khách sẽ bỏ đi và nhà hàng sẽ nhận được đánh giá xấu. Thu nhập của nhà hàng dựa trên số món ăn bán được cho khách hàng. Hãy ghi nhận và tiếp tục chốt công thức XP, mức nâng cấp, giới hạn Buff và cân bằng kinh tế P2. Chưa lập trình.

### #75 — 24/10/2026 04:37 — `REVISION`

> REVISION bộ quy tắc kinh tế P2: mỗi khách dùng món hết 15 giây, khách chờ quá 30 giây sẽ bỏ đi Chưa lập trình.

*Ghi chú:* Khách ăn 15 giây; chờ quá 30 giây thì bỏ đi.

### #78 — 24/10/2026 06:38 — `DECISION`

> Tôi chốt C-04A phương án A: tổng thời gian chờ từ lúc đến đến khi nhận món tối đa 30 giây. Thời gian ăn cố định 15 giây. Hãy tiếp tục thiết kế hệ thống đánh giá sao, XP và cân bằng kinh tế P2, chưa lập trình.

### #82 — 24/10/2026 08:01 — `DECISION`

> Tôi chọn C-05/C-06: duyệt bảng đánh giá theo thời gian chờ, cập nhật điểm sao dần và hệ số thu hút khách 0,7×–1,3×; L-02: 1 XP trên 20 Xu giá gốc món bán, không tính Buff.  Hãy tiếp tục cân bằng tiến trình Level 1–50, giá món ăn, nâng cấp và nhân viên. Chưa lập trình.

### #85 — 24/10/2026 08:20 — `DECISION`

> Tôi chọn U-02A: ba nhóm nâng cấp tối đa cấp 50, thử nghiệm bảng giá tăng 18% mỗi cấp, công suất tăng có giới hạn. Hãy ghi nhận, tiếp tục hoàn thiện hiệu quả nâng cấp, cân bằng XP và đánh giá khách hàng; chưa lập trình.

### #89 — 24/10/2026 08:28 — `DECISION`

> Tôi chọn L-03: đổi công thức XP thành ceil(12 × Level^1.5), giữ nguyên 1 XP/20 Xu giá gốc món bán. Hãy ghi nhận và tiếp tục chốt hiệu quả nâng cấp từng cấp, số bàn ghế, công suất nhân viên, lượng khách theo Level và tính toán cân bằng kinh tế P2. Chưa lập trình.

### #97 — 24/10/2026 08:45 — `REQUEST`

> sửa lại nguyên tắc liên quan đến chỗ ngồi, diện tích nhà hàng có thể mở rộng khi đạt cấp độ mới, sau đây là phân tích thiết kế phần này

*Ghi chú:* Mở đầu phần chỗ ngồi / mở rộng diện tích (kèm tài liệu phân tích trong chat gốc).

### #104 — 24/10/2026 08:52 — `DECISION`

> level 1 diện tích 10 x 10, 1 bàn có thể ghép tối đa với 2 ghế

*Ghi chú:* Level 1: 10×10, mỗi bàn ghép tối đa 2 ghế.

### #107 — 24/10/2026 08:54 — `DECISION`

> Tôi chọn F-05 phương án B: đạt Level yêu cầu mới được mua mở rộng bằng Xu. Nhà hàng Level 1 có lưới 10×10, mỗi bàn tối đa 2 ghế. Hãy tiếp tục thiết kế các mốc Level mở rộng, kích thước từng lần và chi phí nếu có. Chưa lập trình.

### #112 — 24/10/2026 08:58 — `APPROVED`

> APPROVED F-06/F-07: nhà hàng bắt đầu 10×10, mở rộng tuần tự tại Level 5, 10, 15, 20, 30, 40, 50 theo bảng kích thước và chi phí đề xuất, tổng 459.000 Xu. Hãy tiếp tục thiết kế chi tiết mua/đặt bàn ghế, lối đi và thay thế chức năng nâng cấp Bàn ghế. Chưa lập trình.

### #116 — 24/10/2026 09:17 — `DECISION`

> Tôi chọn U-03: bỏ cấp nâng cấp Bàn ghế, thay bằng mua/đặt nội thất và mở rộng diện tích; hai nhánh Bếp và Phục vụ giữ tối đa 50 cấp. Hãy ghi nhận và tiếp tục chốt giá bàn ghế, quy tắc lối đi và khả năng tiếp cận. Chưa lập trình.

### #120 — 24/10/2026 09:24 — `DECISION`

> Tôi chọn F-08: bàn 200 Xu, ghế 100 Xu, khởi đầu 1 bàn và 2 ghế. F-11: cho phép đặt nếu không chặn đường thiết yếu, ghế mất khả năng tiếp cận sẽ bị cảnh báo và không được tính vào công suất. Hãy ghi nhận và tiếp tục thiết kế thuật toán ghép bàn ghế, giao diện bố trí và giao dịch lưu nhà hàng. Chưa lập trình.

### #124 — 24/10/2026 09:45 — `DECISION`

> Tôi chọn F-17: A — vào chế độ bố trí riêng, ngừng nhận khách mới, xử lý hết khách hiện tại rồi cho chỉnh sửa, trong lúc chỉnh sửa không tạo thu nhập. Hãy ghi nhận và tiếp tục hoàn thiện quy tắc lưu bố cục, vị trí cửa/bếp, thao tác chạm và tiêu chí kiểm thử P2. Chưa lập trình.

### #130 — 24/10/2026 09:57 — `DECISION`

> Tôi chọn F-22: tự lưu và tự chuyển nhà hàng từ EDITING sang RUNNING sau 60 giây mất kết nối; không tính doanh thu trong 60 giây. Hãy ghi nhận và tiếp tục hoàn thiện thiết kế vị trí cửa/bếp, quy tắc chỉnh sửa và nghiệm thu hệ thống bố trí P2. Chưa lập trình.

### #135 — 24/10/2026 10:29 — `DECISION`

> [ảnh đính kèm — không có trong export]
> góc máy tương tự như thế này, không cần cửa, bếp được phép di chuyển, người chơi có thể tự do sắp xếp, tương tự như game restaurent streets

*Ghi chú:* Có kèm ảnh tham chiếu (không có trong export). Góc máy tương tự game Restaurant Streets; không cần cửa cố định; bếp được di chuyển; người chơi tự do sắp xếp.

### #141 — 24/10/2026 10:35 — `DECISION`

> F-20A: Có, bếp 2×1 có thể xoay ngang/dọc
> F-19B: Ngoài viền biên giới bên trái của cửa hàng là đường phố, người chơi có thể đặt cửa vào ở bất kì ô nào trên bức tường đó, khách vào quán di chuyển từ đó.

*Ghi chú:* F-20A: bếp 2×1 xoay ngang/dọc. F-19B: ngoài biên trái là đường phố, đặt cửa ở ô bất kỳ trên tường trái.

### #145 — 24/10/2026 10:40 — `DECISION`

> Tôi chọn F-07R phương án A: giữ nguyên tường trái giáp đường phố, mở rộng sang phải và phía sau. Giữ nguyên các mốc Level, diện tích và giá mở rộng đã duyệt. Hãy tiếp tục hoàn thiện hệ thống cửa di động, di chuyển khách hàng và bố trí nội thất P2. Chưa lập trình.

### #149 — 24/10/2026 10:46 — `DECISION`

> Tôi chọn F-19D: cho phép nhiều cửa trên tường trái, cần tiếp tục thiết kế số lượng và chi phí. Giữ nguyên F-07R mở rộng sang phải và phía sau, F-20A bếp xoay được, các quy tắc bàn ghế, lối đi và F-22. Tiếp tục rà soát hệ thống di chuyển và mô phỏng doanh thu P2, chưa lập trình.

### #153 — 24/10/2026 10:53 — `DECISION`

> nhà hàng khi mở rộng thì theo hướng bên phải và phía dưới. F-30A: Giá cửa bổ sung: 1.500 xu/cửa

*Ghi chú:* Mở rộng theo hướng phải và xuống dưới. F-30A: cửa bổ sung 1.500 Xu/cửa.

### #157 — 24/10/2026 10:55 — `DECISION`

> Tôi chọn F-31 phương án B: mỗi cửa có lưu lượng thông hành riêng, khách phải đi qua theo lượt và có thể ùn tắc. Giữ nguyên giá cửa thêm 1.500 Xu/cửa, mở rộng sang phải và xuống dưới, các quyết định đã duyệt. Hãy tiếp tục thiết kế tốc độ di chuyển khách và nhân viên, tính toán hàng chờ, sao và doanh thu P2. Chưa lập trình.

### #166 — 24/10/2026 11:03 — `DECISION`

> Tôi chọn F-32A: khách 2 ô/giây, nhân viên 3 ô/giây, mỗi lượt qua cửa 2 giây. Hãy ghi nhận và tiếp tục thiết kế hàng chờ Bếp/Phục vụ, kiểm tra công suất ghế, đánh giá sao và mô phỏng doanh thu Level 1–50. Chưa lập trình.

### #172 — 24/10/2026 11:13 — `DECISION`

> Tôi chọn F-34A phương án A: khách chỉ đặt món khi đã ngồi vào ghế hợp lệ, sau đó mới vào hàng chờ Bếp. Giữ nguyên tốc độ 2 ô/giây khách, 3 ô/giây phục vụ, 2 giây/lượt qua cửa. Hãy tiếp tục thiết kế chính xác thời điểm thanh toán Xu/XP, ưu tiên xử lý đơn hàng, số sao và cân bằng kinh tế P2. Chưa lập trình.

### #177 — 24/10/2026 11:54 — `DECISION`

> E-10A: Thời điểm thanh toán, sau khi ăn xong, khách sẽ đến quầy thu ngân. thêm vị trí nhân viên thu ngân. 
> Sau khi khách ăn xong, trên bàn sẽ để lại bát đĩa dơ cần nhân viên phục vụ dọn bàn. Nếu bàn chưa được dọn thì sẽ không tính là chỗ ngồi hợp lệ cho khách mới

*Ghi chú:* E-10A: thanh toán sau khi ăn tại quầy Thu ngân (thêm vị trí Thu ngân); bàn bẩn chưa dọn thì không là chỗ ngồi hợp lệ.

### #182 — 24/10/2026 12:00 — `DECISION`

> Tôi chọn H-08 phương án B: nhân viên Phục vụ có thể kiêm nhiệm hoặc được phân công chuyên trách tại quầy thu ngân, giữ hai nghề Đầu bếp và Phục vụ. Giữ nguyên quy tắc thanh toán sau khi ăn, khách đến quầy thu ngân mới cộng Xu/XP; bàn bẩn cần Phục vụ dọn xong mới đón khách mới. Hãy tiếp tục thiết kế công suất Thu ngân, thời gian dọn bàn, hàng chờ và cân bằng kinh tế P2. Chưa lập trình.

### #187 — 24/10/2026 12:05 — `DECISION`

> Tôi chọn E-16A phương án A: thanh toán 3 giây/khách, dọn bàn 4 giây/bàn cơ bản; cấp Phục vụ giảm thời gian dọn theo hệ số nâng cấp 2% mỗi cấp. Giữ nguyên H-08B nhân viên Phục vụ có thể kiêm hoặc chuyên trách Thu ngân, thanh toán sau ăn, bàn bẩn không nhận khách mới. Hãy tiếp tục chốt giá quầy thu ngân, điều phối nhân viên và mô phỏng kinh tế P2. Chưa lập trình.

### #191 — 24/10/2026 12:12 — `DECISION`

> Tôi chọn E-20A: một quầy Thu ngân miễn phí lúc đầu, mỗi quầy bổ sung 5.000 Xu cố định. Giữ nguyên thanh toán 3 giây/khách, dọn bàn 4 giây/bàn cơ bản, nhân viên Phục vụ kiêm hoặc chuyên trách Thu ngân. Hãy ghi nhận và tiếp tục chốt quy tắc điều phối công việc, thời điểm ghi nhận đánh giá sao và kiểm tra các tình huống quá tải. Chưa lập trình.

### #196 — 24/10/2026 12:19 — `DECISION`

> Tôi chọn C-13A phương án A: cập nhật đánh giá sao khi khách ăn xong 15 giây; Xu và XP chỉ cộng sau thanh toán tại quầy. Giữ nguyên E-20A quầy Thu ngân bổ sung 5.000 Xu, E-16A thời gian thanh toán 3 giây và dọn bàn 4 giây cơ bản, H-08B nhân viên Phục vụ kiêm hoặc chuyên trách Thu ngân. Hãy tiếp tục chốt chính sách điều phối nhân viên và mô phỏng quá tải thực tế P2. Chưa lập trình.

### #201 — 24/10/2026 13:27 — `DECISION`

> Tôi chọn H-13A: ưu tiên động, chống bỏ đói; giao món gần hạn 30 giây được ưu tiên, thanh toán chờ từ 12 giây và bàn bẩn từ 8 giây tăng ưu tiên, ưu tiên dọn khi thiếu ghế sạch, luôn còn ít nhất một Phục vụ Tự động. Giữ nguyên C-13A ghi nhận sao sau ăn và Xu/XP sau thanh toán. Hãy tiếp tục cân bằng kinh tế, kiểm tra hàng chờ theo sự kiện và khả năng phục hồi sao P2. Chưa lập trình.

### #206 — 24/10/2026 13:36 — `DECISION`

> Tôi chọn E-30 phương án A: thời gian nấu cơ bản 8 giây/món, tương đương 7,5 món/phút cho mỗi Đầu bếp. Giữ nguyên H-13A điều phối ưu tiên động, C-13A ghi nhận sao khi ăn xong và cộng Xu/XP sau thanh toán. Hãy tiếp tục kiểm tra khả năng đạt 4–5 sao, cân bằng hàng chờ và doanh thu Level 1–50. Chưa lập trình.

### #210 — 24/10/2026 13:51 — `DECISION`

> Tôi chọn E-31A phương án B: 5 sao phụ thuộc nhiều vào Buff tốc độ nhân viên cao cấp; nâng cấp và bố trí tốt thường đạt 4 sao. Giữ nguyên E-30 thời gian nấu 8 giây/món và các quyết định H-13A, C-13A. Hãy tiếp tục cân bằng Buff, cấp nâng cấp, công suất và kinh tế P2. Chưa lập trình.

### #217 — 24/10/2026 15:20 — `DECISION`

> Tôi chọn H-16A phương án A: duyệt bộ Buff theo 5 độ hiếm làm baseline thử nghiệm, Huyền thoại có đồng thời Buff thu nhập và tốc độ, giới hạn tổng Buff thu nhập +30% và tốc độ tối đa +40% riêng mỗi nhân viên; Buff không thay đổi tốc độ đi bộ, thời gian Thu ngân hoặc dọn bàn. Hãy tiếp tục cân bằng nâng cấp cấp 30–50, xác suất nhân viên và kinh tế P2. Chưa lập trình.

### #224 — 24/10/2026 15:48 — `DECISION`

> Tôi chọn E-40A phương án B: tăng giá nâng cấp 18% mỗi cấp đến cấp 30, từ cấp 31 đến 50 tăng 15% mỗi cấp. Giữ nguyên bộ Buff H-16A đã duyệt, E-30 nấu cơ bản 8 giây và E-31A(B) đánh giá 5 sao phụ thuộc nhiều vào Buff cao cấp. Tiếp tục thiết kế xác suất tuyển nhân viên, bảo hiểm Roll và cân bằng kinh tế Level 1–50; chưa lập trình P2.

### #231 — 24/10/2026 15:57 — `DECISION`

> H-18A: Vé Thường: Common 55%, Uncommon 33,9%. Vé Đặc Biệt: Common 14%, Uncommon 60%. Giữ nguyên Rare, Epic, Legendary.
> cân bằng lại thu nhập, hiện tại tôi thấy về các cấp độ sau doanh thu đang quá cao, người chơi có thể dễ dàng kiếm được quá nhiêu xu gây lạm phát.

*Ghi chú:* H-18A: Vé Thường Common 55% / Uncommon 33,9%; Vé Đặc Biệt Common 14% / Uncommon 60%; Rare/Epic/Legendary giữ nguyên. Kèm nhận xét doanh thu các cấp sau quá cao (xem #239).

### #239 — 24/10/2026 16:10 — `DEFERRED`

> tạm thời bỏ qua vấn đề cân bằng doanh thu

*Ghi chú:* Tạm bỏ qua cân bằng doanh thu (sau này gọi là E-47A).

### #242 — 24/10/2026 16:15 — `DECISION`

> Xác suất nghề: người chơi chủ động chọn roll đầu bếp hoặc phục vụ.
> Quản lý nhân viên: Thay thế nhân viên, kho dự bị tối đa 50 người. khi nhân viên trùng thì tự động quy đổi thành mảnh của nhân viên đó, mảnh có tác dụng khi nâng cấp nhân viên.

*Ghi chú:* Người chơi chủ động chọn Roll Đầu bếp hoặc Phục vụ. Kho dự bị tối đa 50. Nhân viên trùng tự đổi thành mảnh của đúng nhân viên đó, dùng để nâng cấp.

### #246 — 24/10/2026 16:20 — `DECISION`

> H-23A A

*Ghi chú:* H-23A: A = nhân viên có 5 bậc nâng cấp bằng mảnh và Xu (nội dung theo #250).

### #250 — 24/10/2026 16:23 — `DECISION`

> Tôi chọn H-23C phương án B: mỗi nhân viên trùng đổi thành 20 mảnh; chi phí nâng lần lượt 20, 20, 40 và 40 mảnh; tổng 6 bản sao trùng để lên bậc 5. Giữ nguyên H-23A nhân viên có 5 bậc nâng cấp bằng mảnh và Xu, các giới hạn Buff H-16A, quyền chọn nghề trước Roll và kho dự bị 50 nhân viên. Tiếp tục thiết kế chi phí Xu nâng cấp nhân viên và quản lý nhân viên trùng. Chưa lập trình P2.

### #255 — 24/10/2026 16:28 — `DECISION`

> Tôi chọn H-23D phương án A: áp dụng bảng giá nâng cấp nhân viên theo độ hiếm và bậc: Common 100/200/400/800 Xu, Uncommon 250/500/1000/2000 Xu, Rare 750/1500/3000/6000 Xu, Epic 2500/5000/10000/20000 Xu, Legendary 8000/16000/32000/64000 Xu. Giữ 5 bậc nâng cấp, mỗi nhân viên trùng 20 mảnh, chi phí mảnh 20/20/40/40; giới hạn kho dự bị 50 nhân viên. Tiếp tục thiết kế giải phóng kho, danh mục nhân viên và quy tắc Buff theo bậc. Chưa lập trình P2.

### #261 — 24/10/2026 16:33 — `DECISION`

> Tôi chọn H-25A phương án A: khi kho nhân viên đầy vẫn cho Roll; trùng được đổi mảnh, nhân viên mới được giữ tại một vị trí chờ nhận và cần giải quyết trước lượt Roll kế tiếp. Giữ nguyên H-23D giá Xu nâng cấp nhân viên, H-23C yêu cầu mảnh và giới hạn 50 nhân viên dự bị. Tiếp tục chốt nghỉ việc, danh mục nhân viên và Buff theo bậc. Chưa lập trình P2.

### #266 — 24/10/2026 16:40 — `DECISION`

> H-24A: Cho nhân viên nghỉ việc thì hoàn trả số mảnh đã dùng để nâng cấp

*Ghi chú:* H-24A: nhân viên nghỉ việc thì hoàn trả mảnh đã dùng để nâng cấp.

### #270 — 24/10/2026 16:41 — `DECISION`

> Tôi chọn H-24B phương án A: cho nghỉ việc hoàn 100% mảnh đã dùng, không hoàn Xu nâng cấp, nếu tuyển lại bắt đầu ở bậc 1. Giữ nguyên kho dự bị 50 nhân viên, H-25A xử lý Roll khi kho đầy, và chi phí mảnh H-23C. Tiếp tục thiết kế danh mục nhân viên và Buff theo bậc. Chưa lập trình P2.

### #274 — 24/10/2026 16:45 — `DECISION`

> Tôi chọn H-26A phương án A: danh mục 70 nhân vật gồm 35 Đầu bếp, 35 Phục vụ theo phân bổ 12 Common, 10 Uncommon, 8 Rare, 4 Epic, 1 Legendary mỗi nghề; có Sổ tay ghi nhận nhân vật từng tuyển. Giữ nguyên H-24B(A) nghỉ việc hoàn 100% mảnh đã tiêu hao nhưng không hoàn Xu, tuyển lại bậc 1; H-25A kho đầy có ô chờ nhận. Hãy tiếp tục chốt H-27 tăng Buff qua 5 bậc và hoàn thiện cơ chế tuyển dụng P2. Chưa lập trình.

### #278 — 24/10/2026 16:48 — `DECISION`

> Tôi chọn H-27A phương án A: Buff tăng tuyến tính đều qua 5 bậc từ mức thấp nhất đến cao nhất của từng độ hiếm theo bảng H-27. Giữ nguyên danh mục 70 nhân vật H-26A, hệ thống mảnh H-23C và chính sách nghỉ việc H-24B(A). Hãy tiếp tục chốt Buff cố định theo nhân vật H-28, bộ đếm bảo hiểm H-29 và Sổ tay H-30. Chưa lập trình P2.

### #281 — 24/10/2026 16:53 — `DECISION`

> Common = 20 mảnh, Uncommon = 40 mảnh, Rare = 80 mảnh, Epic = 100 mảnh, Legendary = 160 mảnh

*Ghi chú:* Đề xuất số mảnh theo độ hiếm: 20/40/80/100/160. Làm rõ ở #285.

### #285 — 24/10/2026 16:56 — `DECISION`

> Các giá trị 20 / 40 / 80 / 100 / 160 là số mảnh nhận được mỗi lần Roll trùng theo độ hiếm, tăng số lượng mảnh cần để nâng cấp nhân viên. lần quay trùng thứ nhất đủ số mảnh để nâng từ cấp 1 lên cấp 3, lần quay trùng thứ 2 đủ để nâng lên cấp 4, mất 2 lần quay trùng để đủ nâng lên 5

*Ghi chú:* Làm rõ #281: đó là số mảnh nhận mỗi lần Roll trùng theo độ hiếm; cần 4 lần Roll trùng để lên bậc 5 (lần 1 đủ lên bậc 3, lần 2 lên bậc 4, lần 3–4 lên bậc 5).

### #289 — 24/10/2026 17:00 — `APPROVED`

> xác nhận h-23c

*Ghi chú:* Xác nhận H-23C theo bảng chốt ở tin nhắn trợ lý tiếp theo (xem docs/APPROVED_TABLES.md §1).

### #292 — 25/10/2026 07:50 — `PROCEDURE`

> bước tiếp theo

*Ghi chú:* Chuyển bước tiếp theo.

### #296 — 25/10/2026 07:53 — `DECISION`

> Tôi chọn H-28A phương án A: Buff cố định theo mã nhân vật; Common đến Epic chia đều 50% thu nhập và 50% tốc độ trong từng nghề và độ hiếm; Legendary có cả hai Buff; nhân vật cùng nghề và cùng độ hiếm có xác suất Roll bằng nhau. Giữ nguyên H-23C mới, H-26A 70 nhân vật và H-27A Buff tuyến tính. Tiếp tục thiết kế H-29 bảo hiểm Roll. Chưa lập trình P2.

### #300 — 25/10/2026 07:55 — `DECISION`

> Tôi chọn H-29A phương án A: hai bộ đếm bảo hiểm theo loại vé, dùng chung Đầu bếp và Phục vụ, đổi nghề không mất tiến trình. Áp dụng quy tắc H-29B Roll độ hiếm trước rồi nâng kết quả dưới ngưỡng, giữ xác suất Legendary 0,1%/1%; H-29C Roll trùng vẫn tính và reset khi đạt ngưỡng; H-29D kết quả trong ô chờ vẫn là Roll hoàn tất, không Roll lại khi mất kết nối. Giữ nguyên H-28A, H-23C mới và danh mục 70 nhân vật. Tiếp tục thiết kế H-30 Sổ tay nhân viên. Chưa lập trình P2.

### #305 — 25/10/2026 07:58 — `DECISION`

> Tôi chọn H-30A phương án A: chỉ tính khám phá khi nhân viên thực sự được nhận vào danh sách sở hữu; nhân viên đang ở ô chờ chưa tính vào tiến trình. Giữ nguyên 70 nhân vật H-26A, chính sách nghỉ việc H-24B(A), bộ đếm bảo hiểm H-29A–D. Tiếp tục hoàn thiện Sổ tay và quy trình quản lý nhân viên P2. Chưa lập trình.

### #310 — 25/10/2026 08:02 — `DECISION`

> Tôi chọn H-31A phương án A: cho phép yêu cầu thay nhân viên đang bận, server thực hiện hoán đổi sau khi nhiệm vụ hiện tại hoàn thành, không nhận thêm nhiệm vụ mới trong thời gian chờ. Giữ nguyên H-30A chỉ khám phá khi nhận nhân viên, H-25A ô chờ khi kho đầy, H-24B(A) nghỉ việc hoàn mảnh không hoàn Xu. Tiếp tục hoàn thiện H-30B–E và giao diện quản lý nhân viên H-31B–C. Chưa lập trình P2.

### #314 — 25/10/2026 08:07 — `DECISION`

> Tôi chọn H-31C phương án A: cho phép nhận hoặc chủ động từ chối nhân viên trong ô chờ, từ chối cần xác nhận, không hoàn vé/Xu hoặc bảo hiểm, không tính khám phá nếu chưa từng nhận. Giữ nguyên H-25A, H-30A và H-31A đã duyệt. Tiếp tục chốt chi tiết quản lý nhân viên H-30B–E và H-31B–C. Chưa lập trình P2.

### #317 — 25/10/2026 08:09 — `SUPERSEDED`

> Tôi chọn H-31B phương án A: tự động khóa bảo vệ Epic, Legendary và mọi nhân viên từ bậc 2 trở lên; phải mở khóa và xác nhận mới được nghỉ việc. Giữ nguyên H-31C(A) nhận hoặc từ chối ô chờ, H-31A thay nhân viên sau nhiệm vụ, H-24B(A) hoàn toàn bộ mảnh nhưng không hoàn Xu. Tiếp tục chốt H-30B–E và quy trình quản lý nhân viên còn lại. Chưa lập trình P2.

*Ghi chú:* H-31B phương án A (tự khóa) — bị thay bởi #319 (phương án B).

### #319 — 25/10/2026 08:10 — `DECISION`

> Tôi chọn H-31B phương án B: chỉ khóa nhân viên khi người chơi chủ động bật, cho nghỉ việc vẫn cần xác nhận. Giữ nguyên H-31C(A) nhận hoặc từ chối ô chờ, H-31A thay nhân viên sau nhiệm vụ, H-24B(A) hoàn toàn bộ mảnh nhưng không hoàn Xu. Tiếp tục chốt H-30B–E và quy trình quản lý nhân viên còn lại. Chưa lập trình P2.

### #322 — 25/10/2026 08:13 — `DECISION`

> Tôi chọn H-30B–E phương án A: phê duyệt Sổ tay 70 ô, có bộ lọc nghề, độ hiếm và trạng thái; hiển thị thông tin và số mảnh của nhân vật đã khám phá; lưu lịch sử khám phá vĩnh viễn; không có thưởng Xu/XP/Buff và không trực tiếp thao tác nhân viên. Giữ nguyên H-31B(B) chỉ khóa bảo vệ thủ công, H-31C(A) nhận hoặc từ chối ô chờ, H-31A hoán đổi sau nhiệm vụ. Tiếp tục thiết kế chi tiết giao diện quản lý nhân viên và cơ chế thay thế và nhận. Chưa lập trình P2.

### #326 — 25/10/2026 08:16 — `DECISION`

> Tôi chọn H-33A phương án A: cho phép Thay thế và nhận nhân viên từ ô chờ trong một giao dịch nguyên tử: chọn nhân viên dự bị không khóa, hoàn mảnh của người nghỉ, không hoàn Xu, nhận nhân viên mới, cập nhật Sổ tay và xóa ô chờ cùng lúc; nếu thất bại hoàn tác tất cả. Giữ nguyên H-30A–E đã duyệt, H-31A, H-31B(B), H-31C(A), H-23C và H-24B(A). Tiếp tục thiết kế chi tiết phân công nhân viên, giao diện nâng cấp và quản lý đội hình. Chưa lập trình P2.

### #331 — 25/10/2026 08:22 — `DECISION`

> Tôi chọn H-32B phương án A: Phục vụ có 4 chế độ Tự động, Giao món, Dọn bàn và Thu ngân. Đầu bếp chỉ làm công việc Bếp, giữ tối thiểu một Phục vụ Tự động khi nhà hàng RUNNING. Giữ nguyên H-33A thay thế và nhận nguyên tử, H-31A hoán đổi sau nhiệm vụ, H-31B(B) khóa thủ công và H-23C/H-27A. Tiếp tục chốt đổi nhiệm vụ an toàn, giao diện nâng cấp và quản lý đội hình. Chưa lập trình P2.

### #335 — 25/10/2026 08:26 — `DECISION`

> Tôi chọn H-32C phương án A: cho phép yêu cầu đổi chế độ khi Phục vụ đang bận, chờ hoàn thành nhiệm vụ hiện tại rồi server kiểm tra và chuyển chế độ; không nhận nhiệm vụ mới khi đang chờ; cho phép hủy yêu cầu chưa thực hiện. Giữ nguyên H-32B(A) bốn chế độ và luôn có ít nhất một Phục vụ Tự động khi RUNNING; tuân thủ quầy thu ngân và đường đi hợp lệ. Tiếp tục chốt giao diện nâng cấp H-32D và quản lý đội hình H-32E. Chưa lập trình P2.

### #340 — 25/10/2026 08:31 — `DECISION`

> Tôi chọn H-32D phương án A: nâng nhân viên từng bậc thủ công, hiển thị Buff trước/sau, mảnh và Xu; không tự nâng khi Roll trùng; server nâng một bậc trong mỗi giao dịch. Giữ nguyên H-23C, H-23D, H-27A và H-32C(A). Tiếp tục hoàn thiện H-32E quản lý đội hình, điều kiện phân công và các trạng thái chờ. Chưa lập trình P2.

### #344 — 25/10/2026 08:35 — `DECISION`

> Tôi chọn H-32E phương án B: khi RUNNING chỉ bắt buộc 1 Phục vụ Tự động, cho phép 0 Đầu bếp với cảnh báo không thể nấu món mới. Phê duyệt kèm thiết kế H-32E: giao diện đội hình theo nghề, hiển thị chế độ và trạng thái; mỗi nhân viên chỉ một yêu cầu thay đổi đang chờ, có thể hủy khi chưa thực hiện; server kiểm tra cả đội hình hiện tại và dự kiến, quầy thu ngân cùng đường đi hợp lệ; tóm tắt Buff thu nhập và Phục vụ Tự động. Giữ nguyên H-32C(A), H-32D(A), H-31A và H-31B(B). Tiếp tục thiết kế P2, chưa lập trình.

### #349 — 25/10/2026 08:38 — `DECISION`

> Tôi chọn H-35A phương án A: khi RUNNING có 0 Đầu bếp vẫn tiếp tục đón khách theo quy tắc bình thường, khách quá 30 giây không nhận món sẽ bỏ đi và đánh giá 1 sao. Giữ nguyên H-32E(B), H-31A, H-32B(A), H-32C(A), quy tắc đánh giá khách và thu Xu khi thanh toán. Tiếp tục thiết kế vận hành P2, chưa lập trình.

### #355 — 25/10/2026 08:42 — `SUPERSEDED`

> Tôi chọn H-36A phương án A: hàng đợi Bếp ưu tiên đơn có hạn giao món gần nhất, kết hợp kiểm tra khả năng hoàn thành trước 30 giây; không cho khách bỏ đi sớm. Giữ nguyên H-35A tiếp tục đón khách khi 0 Đầu bếp, hạn 30 giây từ lúc khách đến đến lúc nhận món, H-31A hoàn thành nhiệm vụ trước khi thay nhân viên và quy tắc Xu/XP tại Thu ngân. Tiếp tục chốt xử lý đơn quá hạn H-36B, sự kiện đồng thời H-36D và vận hành offline H-37. Chưa lập trình P2.

*Ghi chú:* H-36A phương án A (ưu tiên hạn gần nhất) — bị thay bởi #357 (phương án B, FIFO).

### #357 — 25/10/2026 08:42 — `DECISION`

> Tôi chọn H-36A phương án B: hàng đợi Bếp nấu theo thứ tự khách đặt món FIFO, không ưu tiên hạn chờ. Giữ nguyên H-35A tiếp tục đón khách khi 0 Đầu bếp, hạn 30 giây từ lúc khách đến đến lúc nhận món, H-31A hoàn thành nhiệm vụ trước khi thay nhân viên và quy tắc Xu/XP tại Thu ngân. Tiếp tục chốt xử lý đơn quá hạn H-36B, sự kiện đồng thời H-36D và vận hành offline H-37. Chưa lập trình P2.

*Ghi chú:* H-36A phương án B (FIFO) thay thế H-36A phương án A ở #355.

### #361 — 25/10/2026 08:45 — `DECISION`

> Tôi chọn H-36B phương án B: khi khách quá 30 giây bỏ đi, hủy ngay cả món đang nấu và giải phóng Đầu bếp để xử lý đơn FIFO tiếp theo; không tạo Xu/XP. Giữ nguyên H-36A(B) FIFO, H-35A đón khách khi 0 Đầu bếp và hạn chờ 30 giây. Tiếp tục chốt H-36D về sự kiện đồng thời và H-37 về mô phỏng offline, gồm đánh giá sao và giới hạn 8 giờ. Chưa lập trình P2.

### #364 — 25/10/2026 15:57 — `DECISION`

> Tôi chọn H-37 phương án A: offline mô phỏng tối đa 8 giờ, cập nhật doanh thu Xu, XP và đánh giá sao giống online, khách quá 30 giây không nhận món vẫn bị 1 sao. Đồng thời duyệt H-36D xử lý sự kiện theo thứ tự xác định, giao món đúng giây 30 thành công, hủy đơn quá hạn, thay nhân viên sau khi kết thúc hoặc hủy nhiệm vụ và chống ghi nhận Xu/XP trùng. Duyệt H-37C toàn bộ mô phỏng dừng ở giới hạn 8 giờ và H-37D báo cáo offline. Giữ nguyên H-36B(B) hủy nấu ngay, H-36A(B) FIFO và H-35A tiếp tục đón khách khi 0 Đầu bếp. Chưa lập trình P2.

### #368 — 25/10/2026 16:02 — `DECISION`

> Tôi chọn H-38A phương án A: một hàng chờ Thu ngân FIFO chung toàn nhà hàng, các quầy hợp lệ lấy khách theo thứ tự. Giữ thanh toán 3 giây mỗi khách, đường đi thực tế, chỉ cộng Xu/XP khi hóa đơn thành công và chống thanh toán trùng. Giữ nguyên H-36D, H-37(A), H-36A(B), H-36B(B). Tiếp tục chốt H-38B bàn hai khách, H-38C không có Thu ngân và H-38D đồng bộ trạng thái. Chưa lập trình P2.

### #372 — 25/10/2026 16:06 — `DECISION`

> Tôi chọn H-38B phương án A: cho khách mới sử dụng ghế còn trống khi bàn vẫn sạch và ghế hợp lệ; tối đa hai khách có đơn hàng, thời gian chờ và đánh giá riêng. Duyệt quy tắc vệ sinh H-38B: bàn bẩn khi có khách ăn xong, không nhận khách mới lúc bẩn, chỉ dọn khi mọi khách đã rời bàn, một nhiệm vụ dọn cho một bàn, khách bỏ đi chưa ăn không tự làm bẩn bàn. Giữ nguyên H-38A(A) một hàng FIFO Thu ngân chung, H-36D và H-37(A). Tiếp tục chốt H-38C không có Thu ngân và H-38D đồng bộ trạng thái. Chưa lập trình P2.

### #376 — 25/10/2026 16:11 — `DECISION`

> H-38C Khách chờ Thu ngân tối đa 60 giây.
> Bàn có 1 khách ăn xong và rời đi trong khi vẫn còn khách khác ngồi ăn, nhân viên phục vụ vẫn tới dọn 1 phần của người đã ăn xong với tốc độ nhanh hơn gấp đôi khi dọn bàn có 2 người đã ăn xong

*Ghi chú:* H-38C: khách chờ Thu ngân tối đa 60 giây. Bàn 2 khách: khi một khách ăn xong rời đi, Phục vụ vẫn dọn phần của người đó; dọn 1 phần nhanh gấp đôi dọn bàn có 2 người đã ăn xong (con số 2 s / 4 s chốt ở #380).

### #380 — 25/10/2026 16:14 — `DECISION`

> Tôi chọn H-38B.5 phương án A: cho phép khách mới ngồi vào vị trí vừa được dọn sạch khi ghế trống, không còn phần bẩn khác và khách còn lại vẫn đang ăn. Giữ H-38C tối đa 60 giây chờ Thu ngân. Giữ cơ chế dọn 1 phần 2 giây cơ bản, dọn 2 phần 4 giây cơ bản và H-38B(A) mỗi khách có đơn, đánh giá độc lập. Tiếp tục chốt H-38D đồng bộ ghế, từng phần vệ sinh bàn, hóa đơn và nhân viên. Chưa lập trình P2.

### #384 — 25/10/2026 16:18 — `DECISION`

> Tôi chọn H-38D phương án A: phê duyệt H-38D.1–6: server quản lý và giữ ghế nguyên tử, kiểm tra lại khi khách thực sự ngồi, vệ sinh riêng từng phần bàn không trùng, mỗi hóa đơn/quầy chỉ một giao dịch, thanh toán đúng 60 giây hợp lệ, quá hạn hủy và chống ghi Xu/XP trùng. Giữ nguyên H-38B.5(A) ghế sạch được đón khách mới khi phần khác không bẩn, H-38B.4 dọn 2 giây/4 giây, H-38C giới hạn thanh toán 60 giây, H-38A(A) Thu ngân FIFO chung và H-37(A) offline 8 giờ. Tiếp tục thiết kế trạng thái DRAINING/EDITING và đường đi khi thay đổi bố cục. Chưa lập trình P2.

### #388 — 25/10/2026 16:24 — `DECISION`

> Tôi chọn H-39A phương án A: DRAINING ngừng khách mới, đợi toàn bộ khách rời đi, hóa đơn hoàn tất hoặc quá hạn và nhiệm vụ nhân viên đang thực hiện kết thúc/hủy hợp lệ; không bắt buộc dọn sạch tất cả bàn, giữ nguyên trạng thái bẩn để xử lý sau EDITING. Giữ nguyên H-38D(A), H-38B.5(A), H-38C 60 giây, H-37(A) offline 8 giờ, và quy tắc mất heartbeat EDITING 60 giây dùng bố cục hợp lệ cuối cùng. Tiếp tục chốt H-39B kiểm tra đường đi, H-39C giữ trạng thái vệ sinh nội thất và H-39D lưu bản nháp. Chưa lập trình P2.

### #392 — 25/10/2026 16:30 — `DECISION`

> Tôi chọn H-39B phương án A: kiểm tra đường đi linh hoạt: lỗi cấu trúc và cửa bị chặn thì không được áp dụng, còn nội thất riêng lẻ không tiếp cận được sẽ cảnh báo, vô hiệu hóa chức năng tại đó nhưng vẫn cho RUNNING với vị trí hợp lệ. Giữ nguyên H-39A(A), H-38D(A), H-38B.5(A), H-38C 60 giây và các điều kiện nhân viên đã duyệt. Tiếp tục chốt H-39C bảo toàn vệ sinh nội thất và H-39D bản nháp, lưu bố cục, mất heartbeat 60 giây. Chưa lập trình P2.

### #396 — 25/10/2026 16:34 — `DECISION`

> Tôi chọn H-39C và H-39D phương án B: phê duyệt trạng thái vệ sinh từng phần A/B gắn với mã bàn, không bị xóa khi di chuyển, xoay, tháo ghế hoặc cất kho; nhiệm vụ dọn phải kiểm tra lại đường đi khi RUNNING. Chỉ lưu bố cục khi người chơi xác nhận, không tự lưu bản nháp. Giữ bản vận hành hợp lệ cuối cùng, xác thực H-39B(A) trước khi áp dụng và tự thoát EDITING sau 60 giây mất heartbeat bằng bản hợp lệ cuối cùng. Chưa lập trình P2. Tiếp tục rà soát kho nội thất và mở rộng mặt bằng.

### #399 — 25/10/2026 16:38 — `DECISION`

> H-40C Kho nội thất không giới hạn. Có thể cất bàn bẩn, bàn đang có khách, sau khi cất bàn đang có khách, hủy đơn và khách đang ngồi

*Ghi chú:* H-40C: kho nội thất không giới hạn; có thể cất bàn bẩn hoặc bàn đang có khách (khi cất bàn đang có khách thì hủy đơn và khách đang ngồi).

### #403 — 25/10/2026 16:54 — `DECISION`

> H-40D.1: Người chơi chọn bàn, xác nhận hủy những khách đang ngồi và đơn liên quan. Server cập nhật ngay vào kho và bố cục hợp lệ trong một giao dịch. Đây là ngoại lệ riêng cho thao tác cất bàn, không cần vào EDITING. Bàn dù có đang bẩn hay không thì đều lưu kho dưới dạng bàn ở trạng thái sạch để tối ưu game, không phải xử lý quá nhiều dữ liệu

*Ghi chú:* H-40D.1: người chơi chọn bàn, xác nhận hủy khách ngồi và đơn liên quan; server cập nhật kho và bố cục trong một giao dịch; ngoại lệ không cần vào EDITING; bàn vào kho luôn ở trạng thái sạch (cả A/B).

### #406 — 25/10/2026 16:58 — `DECISION`

> Tôi chọn H-40D.3 phương án B: chỉ cất bàn, giữ lại ghế trên sàn và vô hiệu hóa ghế chưa gắn bàn. Giữ nguyên H-40D.1 cất bàn nhanh khi RUNNING, hủy khách/đơn liên quan và bàn vào kho luôn sạch cả A/B; H-40C kho không giới hạn. Tiếp tục chốt cách xử lý đánh giá sao và hóa đơn chưa thanh toán khi cất bàn đang có khách, sau đó thiết kế H-41 mở rộng mặt bằng. Chưa lập trình P2.

### #411 — 25/10/2026 17:02 — `DECISION`

> Tôi chọn H-40D.4 phương án A: khách bị hủy do cất bàn không tạo đánh giá mới; những đánh giá đã ghi vẫn được giữ nguyên. Đồng thời duyệt xử lý hóa đơn: khách còn ngồi ở bàn bị cất thì hóa đơn chưa thanh toán bị hủy và không nhận Xu/XP; khách đã rời bàn vào hàng Thu ngân giữ hóa đơn và tiếp tục thanh toán; thanh toán đã hoàn tất không bị đảo ngược. Giữ H-40D.3(B) ghế ở lại sàn, H-40D.1 bàn vào kho luôn sạch và H-40C kho không giới hạn. Tiếp tục chốt H-41 lộ trình mở rộng, hướng mở rộng và cơ chế kích hoạt. Chưa lập trình P2.

### #415 — 26/10/2026 03:13 — `DECISION`

> Tôi chọn H-41 phương án A: phê duyệt lộ trình mở rộng Level 1=10x10, L5=12x12, L10=14x14, L15=16x16, L20=18x18, L30=20x20, L40=22x22, L50=24x24; mở rộng về phía phải và dưới, giữ nguyên đường phố/cửa bên trái, tọa độ nội thất và trạng thái bàn. Đạt Level chỉ mở quyền; người chơi chủ động mở rộng trong EDITING và xác nhận server lưu bố cục, có thể lên thẳng kích thước cao nhất đã mở khóa. Chưa quy định chi phí Xu vì E-47A tạm hoãn. Giữ H-39B(A), H-39D(B), H-40C và H-40D đã duyệt. Tiếp tục thiết kế kho/mua bán nội thất hoặc các hạng mục P2 còn mở; chưa lập trình.

### #420 — 26/10/2026 03:15 — `DECISION`

> Tôi chọn H-42A phương án B: mua và đặt nội thất trực tiếp trong EDITING, chỉ trừ Xu và xác nhận quyền sở hữu cùng giao dịch lưu bố cục hợp lệ. Giữ H-41(A) mở rộng thủ công, H-39D(B) không tự lưu bản nháp, H-40C kho không giới hạn, H-40D cất bàn nhanh và quy tắc ghế ở lại sàn. Chưa quy định giá Xu. Tiếp tục chốt H-42C bán nội thất và H-42D mở khóa mẫu nội thất theo Level. Chưa lập trình P2.

### #425 — 26/10/2026 03:19 — `DECISION`

> Tôi chọn H-42C phương án A: cho phép bán nội thất đã nằm trong kho, có xác nhận và giao dịch nguyên tử xóa vật phẩm/cộng Xu; chưa triển khai bán khi giá hoàn Xu chưa duyệt. Giữ nguyên H-42A(B) mua và đặt trong EDITING, chỉ trừ Xu khi xác nhận lưu bố cục; H-39D(B) không tự lưu bản nháp, H-40C kho không giới hạn và H-40D cất bàn nhanh. Tiếp tục chốt H-42D mở khóa mẫu nội thất theo Player Level, chưa lập trình P2.

### #429 — 26/10/2026 03:23 — `DECISION`

> H-42D Không giới hạn cấp độ được mua các nội thất cơ bản và nội thất trang trí

*Ghi chú:* H-42D: không giới hạn Level khi mua nội thất cơ bản và trang trí.

### #432 — 26/10/2026 03:36 — `DECISION`

> H-42E.1 A — Trang trí sàn cản đường, trang trí tường không cản đường. thêm vật phẩm tương tự tường có vai trò như vách ngăn để người chơi có thể tự do thiết lập địa hình, chia phòng. nhà vệ sinh có thể cho khách tương tác

*Ghi chú:* H-42E.1 A: trang trí sàn cản đường, trang trí tường không cản đường; thêm vách ngăn để tự chia phòng; nhà vệ sinh cho khách tương tác.

### #438 — 26/10/2026 03:45 — `DECISION`

> 1. **H-42E.2: A**
> 2. **H-42F.1: A**

*Ghi chú:* H-42E.2 A: vách ngăn = mô-đun chặn đường 1×1. H-42F.1 A: nhà vệ sinh là tương tác phụ, không ảnh hưởng trực tiếp sao/Xu.

### #442 — 26/10/2026 03:58 — `DECISION`

> 1. **H-42F.2: A**
> 2. **H-42F.3: A**

*Ghi chú:* H-42F.2 A: khách dùng WC sau thanh toán, trước khi rời quán. H-42F.3 A: không có hàng chờ WC; WC bận thì khách bỏ qua.

### #446 — 26/10/2026 04:00 — `DECISION`

> Tôi chọn H-42F.5 phương án A: 20% khách thanh toán thành công có nhu cầu sử dụng WC, mỗi lần sử dụng kéo dài 6 giây. Mỗi WC chỉ phục vụ một khách; server giữ chỗ độc quyền, không có hàng chờ, WC bận hoặc không tiếp cận được thì bỏ qua. Giữ H-42F.2(A) sau thanh toán trước khi rời quán, H-42F.1(A) không ảnh hưởng sao/Xu, H-37(A) offline 8 giờ và H-39A(A) DRAINING. Tiếp tục rà soát kích thước ô, điểm tương tác nhà vệ sinh và danh mục nội thất P2. Chưa lập trình P2.

### #450 — 26/10/2026 04:03 — `DECISION`

> H-42F.6 khách ngồi lên luôn bồn cầu

*Ghi chú:* H-42F.6: khách ngồi trực tiếp lên bồn cầu.

### #453 — 26/10/2026 04:06 — `DECISION`

> Tôi chọn H-42E.6 phương án B: Bàn, Ghế, Bếp, Thu ngân và Bồn cầu có thể có kích thước chiếm ô khác nhau tùy mẫu; cần thiết kế chi tiết từng loại. Giữ H-42F.6 khách ngồi trực tiếp lên bồn cầu, H-42F.5(A) 20% và 6 giây, H-42E.2(A) vách ngăn 1x1 chặn đường. Tiếp tục thiết kế điểm tương tác và danh mục nội thất P2. Chưa lập trình P2.

### #457 — 26/10/2026 04:10 — `QUESTION`

> phương pháp nào tối ưu hơn, nhẹ hơn ít thuật toán cần xử lý giúp giảm gánh nặng cho server và thiết bị người dùng?

*Ghi chú:* Hỏi phương pháp tối ưu, nhẹ cho server/thiết bị (dẫn tới H-42E.7).

### #461 — 26/10/2026 04:13 — `DECISION`

> Tôi chọn H-42E.7 phương án A: điểm tương tác định sẵn theo từng mẫu nội thất và hướng xoay, cache các điểm hợp lệ theo phiên bản bố cục, chỉ kiểm tra lại điều kiện động khi RUNNING. Ưu tiên giảm CPU server và thiết bị, không tìm đường mỗi frame, mô phỏng offline theo sự kiện nhưng giữ nguyên kết quả logic và thứ tự H-36D. Tiếp tục thiết kế danh mục nội thất; chưa lập trình P2.

### #465 — 26/10/2026 04:17 — `DECISION`

> Tôi chọn H-42E.8 phương án A: sử dụng danh mục đề xuất 19 mẫu nội thất ban đầu, có thể bổ sung mẫu mới sau. Giữ H-42E.7(A) điểm tương tác định sẵn và cache, H-42E.6(B) kích thước theo mẫu, H-42D không giới hạn Level mua nội thất cơ bản/trang trí. Tiếp tục chốt kích thước ô, hướng xoay, các điểm tương tác và quy tắc gắn vật phẩm treo tường. Chưa lập trình P2.

### #469 — 26/10/2026 04:21 — `DECISION`

> Tôi chọn H-42E.9–11 phương án A: duyệt kích thước ô và các điểm tương tác được đề xuất cho danh mục 19 mẫu, vật phẩm xoay theo hướng hợp lệ, cache điểm tương tác theo phiên bản bố cục. Cho phép gắn đồ trang trí lên cả tường bao và các mặt vách ngăn hợp lệ. Không treo chồng vật phẩm, bảng dài cần hai đoạn tường liền nhau; khi cất vách có đồ treo thì đưa đồ treo vào kho khi xác nhận lưu. Giữ H-42E.8(A), H-42E.7(A), H-42E.6(B), H-42D, H-39B(A), H-39D(B). Tiếp tục rà soát các hạng mục P2 còn mở, chưa lập trình.

### #473 — 26/10/2026 04:23 — `DECISION`

> Tôi chọn H-42E.12 phương án A: đồ treo di chuyển/xoay theo vách nếu vị trí mới hợp lệ; nếu không hợp lệ thì cảnh báo và đưa vào kho khi người chơi xác nhận lưu, bảng dài hai đoạn phải tiếp tục có hai mặt tường liền nhau cùng mặt phẳng. Giữ H-42E.9–11(A), H-42E.8(A) 19 mẫu, H-42E.7(A) cache, H-39D(B) chỉ lưu khi xác nhận và H-42D không giới hạn Level mua nội thất cơ bản/trang trí. Tiếp tục rà soát các hạng mục P2 còn mở; chưa lập trình.

### #477 — 26/10/2026 04:27 — `DECISION`

> Tôi chọn H-42E.13 phương án A: cho phép trang trí độc lập ở cả hai mặt hợp lệ của vách ngăn, mỗi mặt quản lý vị trí gắn riêng. Giữ H-42E.12(A) đồ treo di chuyển theo vách nếu hợp lệ, H-42E.9–11(A), H-39D(B) chỉ xác nhận mới lưu và danh mục 19 mẫu. Sau đó tiếp tục rà soát liên kết tài khoản Guest và xử lý mất kết nối. Chưa lập trình P2.

### #480 — 26/10/2026 04:31 — `DECISION`

> Tôi chọn A-01 phương án A: Guest chỉ liên kết trực tiếp với tài khoản chưa có tiến trình; nếu tài khoản đã có tiến trình thì không tự gộp hoặc ghi đè, cho người chơi chọn tiếp tục Guest hoặc chuyển sang tài khoản cũ. Giữ Guest tiến trình server-side, phiên Guest hợp lệ mới có quyền khôi phục; liên kết nguyên tử, chống yêu cầu trùng và chính sách mỗi tài khoản một thiết bị. Tiếp tục chốt A-02 xử lý mất kết nối và đồng bộ dữ liệu. Chưa lập trình P2.

### #484 — 26/10/2026 04:35 — `DECISION`

> A-02.1 A — Chỉ hiển thị trạng thái đã tải và thông báo kết nối. Không mua, bán, tuyển dụng hay chỉnh sửa khi offline. Server tính tiến trình tối đa 8 giờ; khi trở lại, đồng bộ kết quả chính thức.
> Giải pháp tính xu và xp khi offline tối ưu nhất, không gây gánh nặng cho server

*Ghi chú:* A-02.1 A: khi offline chỉ hiển thị trạng thái đã tải và thông báo kết nối; không mua/bán/tuyển/chỉnh sửa; server tính tiến trình tối đa 8 giờ rồi đồng bộ khi quay lại. Kèm yêu cầu cách tính Xu/XP offline tối ưu, không gây tải server (dẫn tới H-37B).

### #488 — 26/10/2026 04:37 — `DECISION`

> Tôi chọn H-37B phương án A: Lazy Offline Simulation — không chạy liên tục lúc offline, tính bù theo sự kiện khi kết nối lại, cache đường đi và ghi Xu/XP theo đợt, có cơ chế chống cộng trùng. Giữ chính xác toàn bộ H-37(A) offline tối đa 8 giờ, H-36D thứ tự sự kiện, công thức XP theo doanh thu gốc, H-38C thanh toán 60 giây và H-42F.5(A) WC 20% sử dụng 6 giây. Giữ A-02.1(A) khóa thao tác khi mất mạng. Tiếp tục chốt A-02.2 đồng bộ sau mất kết nối, chưa lập trình P2.

### #492 — 26/10/2026 06:37 — `DECISION`

> Tôi chọn A-02.2 phương án A: server gửi snapshot gameplay chính thức kèm phiên bản sau khi tính và lưu offline, client thay thế trạng thái cũ, không tải lại asset; chống trùng bằng mã giao dịch, phiên bản và mốc kết toán. Giữ H-37B(A) Lazy Offline Simulation, H-37(A) 8 giờ, H-36D thứ tự sự kiện, A-02.1(A) không thao tác khi mất mạng, A-01(A) Guest không tự gộp và một tài khoản chỉ một thiết bị. Tiếp tục chốt A-02.3 xử lý đăng nhập thiết bị mới và phiên cũ bị vô hiệu. Chưa lập trình P2.

### #496 — 26/10/2026 06:53 — `DECISION`

> Tôi chọn A-02.3 phương án A: đăng nhập thiết bị mới thu hồi phiên cũ ngay; nếu phiên cũ đang EDITING thì hủy bản nháp và khôi phục bố cục hợp lệ cuối cùng ngay, nếu đang DRAINING thì hoàn tất khách hiện có và trở về RUNNING. Giữ quy tắc mỗi tài khoản một thiết bị, giao dịch đã hoàn tất trước thu hồi vẫn hợp lệ, lệnh từ phiên cũ sau thu hồi bị từ chối. Giữ A-02.2(A) snapshot chính thức, A-02.1(A), H-37B(A) và H-39D(B). Tiếp tục rà soát các trường hợp đồng bộ và backend còn mở. Chưa lập trình P2.

### #499 — 26/10/2026 07:01 — `DECISION`

> Tôi chọn A-02.4 phương án A: đối chiếu kết quả các giao dịch bị mất phản hồi theo mã yêu cầu trên server rồi đồng bộ snapshot, không tự tạo giao dịch mới. Giữ A-02.3(A) thu hồi phiên cũ ngay khi đăng nhập thiết bị mới, A-02.2(A) Snapshot + Version + Idempotency, A-02.1(A) khóa thao tác offline và H-37B(A) Lazy Offline Simulation. Tiếp tục A-02.5 thiết kế lưu và khôi phục trạng thái khi server khởi động lại, ưu tiên giảm tải CPU và PostgreSQL. Chưa lập trình P2.

### #503 — 26/10/2026 07:17 — `DECISION`

> Tôi chọn A-02.5 phương án A: Compact Snapshot + Durable Event Log + khôi phục theo sự kiện; lưu bền vững các giao dịch đã xác nhận, checkpoint gọn định kỳ, không lưu vị trí theo từng frame, không chạy mô phỏng phòng offline liên tục. Giữ A-02.4(A) đối chiếu mã giao dịch, A-02.3(A) thu hồi phiên cũ, A-02.2(A) snapshot/version/idempotency, H-37B(A) Lazy Offline và H-36D thứ tự sự kiện. Chu kỳ checkpoint sẽ tối ưu qua kiểm thử, chưa khóa số giây cố định. Tiếp tục chốt A-02.6 khôi phục sau lỗi database/server và kiểm thử chống mất dữ liệu. Chưa lập trình P2.

### #508 — 26/10/2026 07:40 — `DECISION`

> Tôi chọn A-02.6 phương án A: Lazy Recovery — chỉ khôi phục nhà hàng khi cần truy cập, giới hạn tải đồng thời, không nạp mọi nhà hàng sau khi server khởi động. Giữ Compact Snapshot + Durable Event Log A-02.5(A), giao dịch quan trọng phải lưu bền vững trước khi báo thành công; PostgreSQL mất kết nối thì không xác nhận thao tác mới. Phê duyệt nguyên tắc sao lưu/WAL và bộ kiểm thử chống mất dữ liệu, chu kỳ checkpoint vẫn chưa cố định. Giữ A-02.4(A), A-02.2(A), H-37B(A), H-36D. Tiếp tục rà soát A-03 bảo mật tài khoản và kiểm thử tải P2, chưa lập trình.

### #512 — 26/10/2026 07:43 — `DECISION`

> Tôi chọn A-03.1 phương án A: Access Token ngắn hạn + Refresh Token xoay vòng, trạng thái phiên được kiểm tra tập trung để thu hồi thiết bị cũ ngay lập tức. Giữ A-01(A) Guest chỉ liên kết vào tài khoản chưa có tiến trình, A-02.3(A) một tài khoản một thiết bị, A-02.6(A) Lazy Recovery, A-02.2(A) snapshot/version/idempotency. Tiếp tục chốt A-03 bảo mật Guest/token và H-43 chỉ số kiểm thử tải, chưa lập trình P2.

### #516 — 26/10/2026 08:02 — `DECISION`

> Tôi chọn A-03.2 phương án A: Access Token 15 phút, Refresh Token và phiên Guest hết hạn sau 30 ngày không hoạt động. Refresh Token xoay vòng, phiên cũ bị thu hồi khi đăng nhập thiết bị mới; Guest chỉ khôi phục qua phiên hợp lệ. Giữ A-03.1(A), A-01(A), A-02.3(A), A-02.6(A). Tiếp tục chốt A-03.3 bảo vệ Refresh Token và H-43 bộ kiểm thử tải; chưa lập trình P2.

### #520 — 26/10/2026 08:07 — `DECISION`

> Tôi chọn A-03.3 phương án A: Atomic Rotation + Safe Retry: chỉ xoay vòng Refresh Token một lần, cho phép phục hồi cùng yêu cầu trong cửa sổ an toàn, phát hiện sử dụng lại bất thường thì thu hồi phiên, chưa khóa thời lượng thử lại. Giữ A-03.2(A) Access 15 phút, Refresh/Guest 30 ngày không hoạt động; A-03.1(A), A-02.3(A) thu hồi phiên thiết bị cũ, A-02.2(A) Snapshot + Version + Idempotency và A-02.6(A) Lazy Recovery. Tiếp tục chốt H-43 bộ kiểm thử tải và ngưỡng nghiệm thu phù hợp cấu hình server. Chưa lập trình P2.

### #524 — 26/10/2026 08:10 — `DECISION`

> Tôi chọn H-43 phương án A: kiểm thử phân tầng theo cấu hình server S/M/L, các mốc 100/500/1000 người chơi, ngưỡng hiệu suất là mục tiêu sơ bộ và chỉ khóa sức chứa sau benchmark; điều kiện không sai Xu/XP/giao dịch/snapshot là bắt buộc. Giữ A-03.3(A) Atomic Rotation + Safe Retry, A-03.2(A) Access 15 phút và Refresh/Guest 30 ngày, A-02.6(A) Lazy Recovery, H-37B(A) Lazy Offline, H-36D và A-02.2(A). Tiếp tục rà soát các hạng mục P2 chưa chốt, chưa lập trình.

### #528 — 26/10/2026 13:24 — `DECISION`

> Tôi chọn G-02 phương án A: cấp bộ khởi đầu một lần với 1 Chef Common, 1 Server Common Auto, T01 x1, C01 x2, K01 x1, R01 x1 và bố cục hợp lệ dựng sẵn để Level 1 vận hành ngay. Không cấp lại khi đăng nhập hoặc liên kết Guest, không tự tặng nội thất khi lên Level; Xu khởi đầu và giá tiền chốt sau tại E-47A. Giữ H-43(A) kiểm thử phân tầng, toàn bộ A-03 và H-37B(A). Tiếp tục chốt H-44 liên kết bàn và ghế. Chưa lập trình P2.

### #532 — 26/10/2026 13:27 — `DECISION`

> Tôi chọn H-44 phương án A: tự động liên kết bàn và ghế theo Seat Anchors khi xác nhận bố cục; mỗi bàn T01/T02 có hai vị trí A/B, mỗi ghế C01/C02 chỉ phục vụ một khách, chỗ không có ghế hợp lệ bị vô hiệu, không tự ghép lại ghế khi cất nhanh bàn trong RUNNING. Giữ H-40D.3(B) cất bàn vẫn để ghế trên sàn, H-39B(A) cảnh báo vị trí không phục vụ được, H-39D(B) chỉ lưu khi xác nhận, G-02(A) bố cục Level 1 dựng sẵn. Tiếp tục chốt H-45 cơ chế khách đến và tìm chỗ ngồi. Chưa lập trình P2.

### #536 — 27/10/2026 01:59 — `DISCUSSION`

> H-45.1 cần thêm các phương án khác, tham khảo game street restaurant

*Ghi chú:* Yêu cầu thêm phương án cho H-45.1, tham khảo game Restaurant Streets.

### #540 — 27/10/2026 02:15 — `DISCUSSION`

> tôi thấy game street restaurant sinh khách còn phụ thuộc vào đánh giá sao của khách

*Ghi chú:* Nhận xét: Restaurant Streets sinh khách phụ thuộc đánh giá sao (dẫn tới H-45.R).

### #544 — 27/10/2026 02:33 — `DECISION`

> Tôi chọn H-45.R phương án B: điểm sao nhà hàng ảnh hưởng xác suất người đi đường quyết định ghé vào. Dùng điểm đánh giá R đã duyệt theo công thức 0.95R + 0.05S, sao thấp vẫn có khách, hệ số và tần suất cụ thể chốt tại H-45.2. Giữ H-37B(A) Lazy Offline, H-36D và thời hạn giao món 30 giây. Tiếp tục rà soát H-45.1 khi nhà hàng hết chỗ. Chưa lập trình P2.

### #548 — 27/10/2026 02:35 — `DECISION`

> Tôi chọn H-45.1 phương án C: Người đi đường muốn ghé sẽ tới cửa; nếu đầy thì quay đi, không phát sinh đánh giá. Giữ H-45.R(B) sao ảnh hưởng xác suất người đi đường ghé vào, H-44(A) Seat Anchors, H-36D thứ tự sự kiện, H-37B(A) Lazy Offline và thời hạn giao món 30 giây cho khách thực sự được nhận. Tiếp tục chốt H-45.2 xác suất và tần suất khách. Chưa lập trình P2.

### #552 — 27/10/2026 02:43 — `OBJECTIVE`

> tăng số lượng khách, tạo áp lực vừa phải cho người chơi, tối ưu sao cho mức sao của người chơi trung bình ở mức 4 sao nếu không có buff mạnh

*Ghi chú:* Mục tiêu cho H-45.2: tăng số khách, áp lực vừa phải, sao trung bình ~4 khi chưa có buff mạnh. Trợ lý đã đưa đề xuất A/B/C nhưng CHƯA có phản hồi APPROVED/REVISION trong export.

### #557 — 27/10/2026 05:01 — `REQUEST`

> gửi cho tôi p1 dưới dạng tài liệu có thể cho codex đọc

*Ghi chú:* Yêu cầu xuất P1 thành tài liệu cho Codex (đã tạo P1_CODEX_PACKAGE).
