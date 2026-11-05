# CODEX MASTER PROMPT — VIETNAM PIXEL RESTAURANT
Source: consolidated ChatGPT decisions through 2026-10-27. **Bản này được bổ sung ngày 2026-11-05: đọc `docs/DECISION_LOG.md` (quyết định nguyên văn), `docs/APPROVED_TABLES.md` (bảng đã duyệt) và `docs/CONFLICTS_AND_STALE_ITEMS.md` (mục lỗi thời/mâu thuẫn) cùng với tài liệu này; khi mâu thuẫn, các tài liệu mới ưu tiên theo quy tắc precedence, nhưng các mâu thuẫn mục A cần người dùng quyết định.** The text below is a handoff summary, not a verbatim export or substitute for missing original source artifacts.

## 0. Mandatory instruction
You are Codex taking over design continuity for Vietnamese Pixel Restaurant from ChatGPT. REPO: `duynq202/VietNamRestaurent`.
**DO NOT CODE P2 UNTIL EXPLICIT USER APPROVAL.** Do not scaffold, implement, migrate code, install dependencies, build a database, alter P1, deploy, or push P2 code. We are currently in a **pre-coding decision dialogue**. One small design decision per turn; explain reasoning, propose parameters, stop for explicit `APPROVED` or `REVISION`. Write in Vietnamese with structured, precise technical terminology. Never quietly override locked decisions or confuse proposals with approvals. Clearly flag inferred/missing details and ask only the smallest necessary clarification.

## 1. Project overview / phase status
Game: Vietnamese pixel-art restaurant management game. P1 prototype **APPROVED** after revision (Canvas2D / TypeScript standalone HTML and ZIP). P1 UI constraints: fullscreen; top-right avatar / level / currency; top-center service area; left reserved for events; right floating action buttons; straight-on floor orientation. However **actual P1 source has not been transferred or verified in this repo**. **[CẬP NHẬT 2026-11-05: P1 source nay đã có trong `P1_CODEX_PACKAGE/`; 6/6 test đạt trên `dist/` có sẵn (xem `MIGRATION_CHECKLIST.md`). Vẫn không tái tạo P1 từ suy đoán.]** Preserve user-approved visuals, don't claim P1 recreated.
P2 is design only. Candidate backend architecture **locked**: Node.js, NestJS, PostgreSQL and Prisma. Economic state and simulations must be server-authoritative. Frontend requirements outside known P1 scope remain unapproved.

## 2. Authentication and offline earnings — locked
- Login mode D: Guest play, registration/login, Google, Facebook.
- One active device/session per account (policy B): newly authenticated device invalidates old device session.
- Guest G-01 A: Guest state saved server-side; account can only recover valid existing guest session, **no recovery code**.
- Offline E-01 A: 100% of eligible income, capped at 8 hours, calculated on server. The EDITING exception below applies.
- Guest-to-account linking, duplicate prevention, provider setup and invalidated session UX: **pending**.

## 3. Progression and currency — locked
- Player Level by XP, separate from equipment levels; Player Level also caps number of staff.
- Currency: Xu (soft).
- Equipment branches: Kitchen and Service only; earlier Seating upgrade branch was removed.
- 5 XP per completed cashier payment (derived baseline 1 XP per 20 Xu); XP not granted on unfinished/unpaid customers. **[CẬP NHẬT 2026-11-05: lỗi thời. Đã duyệt: 1 XP / 20 Xu giá gốc món bán, không tính Buff (L-02, #82); đường cong level `ceil(12 × Level^1.5)` (L-03, #89). Xem CONFLICTS C-05]**

## 4. Employee roster, gacha, rank and buff — locked
- Roles: Chef and Server; maximum active staff = 10.
- Active staff caps by Player Level: L1=2; L4=3; L6=4; L8=5; L10=5; L15=6; L20=7; L30=8; L40=9; L50=10.
- Player must pick profession Chef/Server before **each** recruitment roll.
- Tickets: Normal and Special. Normal ticket costs 1000 Xu; Special awarded from Player Level, no premium P2. Total Special tickets from L5 to L50 = 40; L5 milestone grants 10 Special tickets. **[CẬP NHẬT 2026-11-05: bảng thưởng vé theo Level ở `APPROVED_TABLES.md` §7]**
- Roll rarity distribution:
  Normal: Common 55%, Uncommon 33.9%, Rare 10%, Epic 1%, Legendary 0.1%.
  Special: Common 14%, Uncommon 60%, Rare 20%, Epic 5%, Legendary 1%.
- Independent pity counters by ticket: the 10th Normal guarantees at least Rare; the 10th Special guarantees at least Epic. Other pity-reset behavior unspecified; don't assume. **[CẬP NHẬT 2026-11-05: đã quy định: R-03(A), H-29A–D (#64, #300): reset khi đạt độ hiếm yêu cầu; hai bộ đếm theo loại vé dùng chung hai nghề, đổi nghề không mất tiến trình; Roll độ hiếm trước rồi nâng kết quả dưới ngưỡng; Roll trùng vẫn tính; kết quả ở ô chờ vẫn là Roll hoàn tất]**
- Candidate reserve warehouse enabled, max 50 reserve employees; when full, use pending-claim slot behavior.
- Legendary yields TWO simultaneous buffs; lower rarities yield an income OR a speed buff:
  Common +1–2% income OR +2–3% speed;
  Uncommon +2–4% income OR +4–7% speed;
  Rare +4–6% income OR +8–12% speed;
  Epic +7–9% income OR +14–20% speed;
  Legendary BOTH +10–12% income AND +20–25% speed. **[CẬP NHẬT 2026-11-05: sai: H-16A/H-27A duyệt Legendary tốc độ 25–35%, thu nhập 10–12%; xem `APPROVED_TABLES.md` §2]**
- Overall income buff cap +30%. Throughput bottleneck model applies.
- Employee rank 1/5 to 5/5. Duplicate conversion = 20 shards. Upgrade rank shard costs 20, 20, 40, 40 (120 total) PLUS Xu. Dismissing an employee refunds 100% of shards spent, but no Xu. **[CẬP NHẬT 2026-11-05: lỗi thời. H-23C chốt lại: mảnh mỗi lần Roll trùng 20/40/80/100/160 theo độ hiếm; mảnh cần theo bậc và 4 lần Roll trùng để lên bậc 5 ở `APPROVED_TABLES.md` §1; giá Xu theo H-23D. Xem CONFLICTS S-01]**
- Server anti-starvation rules: prioritize delivery before the 30-second deadline, cashier processing after 12 seconds, cleaning after 8 seconds, at least one flexible server. This is a policy guideline with detailed scheduling implementation not yet supplied.
- Initial test team: Auto 1 Common Server and 1 Common Chef, not strong buffs.

## 5. Restaurant operations and wait ratings — locked
- A customer must be SEATED before placing an order. No orders outside, at doorway, or in queue.
- Continuous wait measured from **customer arrival to food delivery**, including all intermediate stages. At exactly 30s delivery can qualify; >30s leaves unsatisfied.
- Review tiers: 0–8 s => 5 stars; >8–15 s => 4 stars; >15–23 s => 3 stars; >23–30 s => 2 stars; >30 s => leave and 1 star.
- Review smoothing: `R_new = 0.95 * R_old + 0.05 * review`.
- Rating influences arrivals: multiplier from 0.75x at 1★ to 1.30x at 5★. Exact interpolation curve is **not yet approved**. **[CẬP NHẬT 2026-11-05: MÂU THUẪN: người dùng duyệt 0,7×–1,3× ở #82 (1★ 0,70, 2★ 0,85, 3★ 1,00, 4★ 1,15, 5★ 1,30); không tìm thấy tin nhắn duyệt 0,75×. Cần người dùng chọn, xem CONFLICTS C-01]**
- Eating duration fixed **15 seconds**, seat remains occupied.
- Cook base duration per dish = **8 seconds** before Kitchen upgrades and buffs.
- Server walking = 3 grid cells/second. Customers walking = 2 cells/second. Crossing a door = 2 seconds. Doors bidirectional and queue-controlled.
- After eating: payment occurs at cashier (NOT at food delivery). Cashier processing baseline 3 seconds/payment.
- Table cleanup baseline 4 seconds at Service level 1. Formula: `4 / (1 + 0.02 * (ServiceLevel - 1))`.
- Traffic states must distinguish: street passerby / interested pedestrian / reaching door / admitted queue / seated / ordered / cooking / delivered / eating / paying / cleaning or left. Never assign rating to a customer who sees a full restaurant and turns away **before admittance** under H-45.1(C).
- H-45.R(B): passerby visit probability is part of traffic. H-45.1(C): interested pedestrian approaches entrance and turns away with NO REVIEW when restaurant full. Exact spawn and probability figures are **pending**.

## 6. Kitchen & Service upgrades — locked
- Each max level 50; each additional level contributes +2% throughput per respective upgrade branch.
- Cost to reach Level 2: Kitchen 200 Xu, Service 160 Xu.
- Price scaling for subsequent levels: through level 30 +18% per level; levels 31–50 +15% per level. Exact rounding if not present in source is unspecified; don't invent.
- Service cleaning formula above is approved. Avoid applying generic throughput formula on top of a dedicated formula without checking stacking/interpretation.

## 7. Menu, prices — locked
- Phở bò: 10 Xu **[CẬP NHẬT 2026-11-05: giá món chưa được xác minh trong chat; xem CONFLICTS C-03 và E-47A]**
- Bánh mì: 12 Xu
- Bún chả: 16 Xu
- Cơm tấm: 20 Xu
- Bánh xèo: 25 Xu
- Bún bò Huế: 30 Xu

## 8. Map expansion & furniture — locked
- Starter area at L1: 10x10.
- Expand with Xu, boundaries by Player Level:
  L5 12x12 = 1,000 Xu;
  L10 14x14 = 4,000;
  L15 16x16 = 9,000;
  L20 18x18 = 20,000;
  L30 20x20 = 40,000; **[CẬP NHẬT 2026-11-05: MÂU THUẪN: bảng đã duyệt (#112) là L30 55.000, L40 120.000, L50 250.000, tổng 459.000 Xu; xem CONFLICTS C-02]**
  L40 22x22 = 80,000;
  L50 24x24 = 160,000.
- Left wall remains fixed beside street; map grows RIGHT and DOWN; origin at top-left.
- Multiple doorways along LEFT wall supported, but max count and purchase prices **TBD**. **[CẬP NHẬT 2026-11-05: giá cửa bổ sung đã khóa 1.500 Xu/cửa (F-30A, #153); chỉ số cửa tối đa còn TBD]**
- Stove footprint 2x1, rotatable, placement validation required.
- Table price 200 Xu; chair 100 Xu. Starting inventory: 1 table + 2 chairs.
- 1x1 table serves MAX 2 adjacent accessible chairs, cardinal neighbors only; inaccessible seats produce warning and don't count. Placement can be allowed unless essential passage is blocked.
- EDITING disconnect: force EDITING -> RUNNING after 60s; 0 income and 0 XP during the 60s, and offline income resumes only once RUNNING.
- Deterministic chair-table matching, navigation connectivity and multiple-door queue balancing await precise design. **[CẬP NHẬT 2026-11-05: ghép bàn–ghế đã chốt H-44(A) (#532); kiểm tra đường đi đã chốt H-39B(A) (#392); còn mở: cân bằng hàng chờ nhiều cửa]**

## 9. Traffic balancing — CURRENT OPEN TASK H-45.2.1
User wants **MORE customers**, **MODERATE pressure**, and **roughly 4.0-star average rating** under starter 1 Common Chef + 1 Common Server, starter 1 table/2 valid chairs and no strong buffs.
This is a *desired calibration result*, not an approved spawn interval, arrived-probability curve or proven simulation outcome.
Honor fixed cook time 8s, eating 15s, starvation policy, full waiting clock, stars thresholds, rating smoothing, entrance-door 2s crossing, travel speeds.
Distinguish pedestrian spawn rate, percentage becoming interested (H-45.R(B)), attempted visits, admitted/queue capacity, served customers, reviews, turnaways with no review. Do not invent a measured 4.0 rating or imply exact figures have already passed deterministic tests.
Propose 1 plausible calibrated variant with transparent assumptions, controlled random seed and reproducible offline/server simulation plan, show load/throughput reasoning and performance metrics. State that real calibration requires implementation/testing once authorized, so numerical outcomes are hypotheses. Remain in discussion; await approval.

## 10. Other open items
- guest linking & account duplicate handling;
- Google/Facebook provider setup;
- per-Level demand baseline;
- number/cost of doors;
- seat matching, pathfinding validation, multi-door queue logic;
- offline claim UI and session-invalidation UX;
- authoritative validation/anti-cheat details;
- exact arrival function/rating interpolation;
- any undisclosed source-specific design choices.

## 11. Working process and approval protocol
1. Read repository docs and any actual transferred source before making claims.
2. Summarize previously approved constraints affected by the current decision.
3. Discuss exactly ONE outstanding design element per response. For H-45, propose parameters and simulation criteria; do not implement.
4. Mark each decision as: LOCKED / PROPOSAL / OPEN / CONFLICT.
5. End proposal asking for `APPROVED` or `REVISION`, then STOP.
6. Only record newly LOCKED elements after explicit approval; preserve history of changes.
7. Never make broad changes because user says "next", "ok" unless scope is obvious and the approval gate has been met.
8. Output any future prototypes, code or downloadable build only after separate explicit permission to begin coding that phase.

## 12. Important handoff caveat
Original PDF `Dac_ta_phan_tich_thiet_ke_game_nha_hang_pixel_Viet_Nam_v1.0(1).pdf` exists in earlier ChatGPT resources but its raw bytes were not transferred into this repository. Approved P1 ZIP/HTML also not yet transferred. **[CẬP NHẬT 2026-11-05: cả PDF (SHA256 khớp) và P1 đều đã có trong repo]** Treat this document as the best currently available consolidation, not a guarantee it captures every decision made across all historic chats. Request original files only when needed to validate work; never fabricate lost code.

## 13. Quyết định đã khóa SAU bản tổng hợp gốc (bổ sung 2026-11-05)
Chi tiết nguyên văn: `docs/DECISION_LOG.md` (số `#N` bên dưới). Bảng số liệu: `docs/APPROVED_TABLES.md`. Vẫn chưa được lập trình P2.

**Nhân viên và Roll:** nghề do người chơi chọn trước mỗi Roll (#242); kho dự bị 50; ô chờ nhận khi kho đầy, Roll vẫn được thực hiện (H-25A, #261); nghỉ việc hoàn 100% mảnh, không hoàn Xu (H-24B, #270); danh mục 70 nhân vật, có Sổ tay (H-26A/H-30, #274, #322); khóa bảo vệ chỉ khi người chơi chủ động (H-31B(B), #319); thay thế và nhận từ ô chờ trong một giao dịch nguyên tử (H-33A, #326); Phục vụ có 4 chế độ Tự động/Giao món/Dọn bàn/Thu ngân, đầu bếp chỉ làm bếp (H-32B, #331); đổi chế độ sau khi xong nhiệm vụ hiện tại (H-32C, #335); khi RUNNING chỉ bắt buộc 1 Phục vụ Tự động, cho phép 0 Đầu bếp kèm cảnh báo, vẫn đón khách (H-32E(B), H-35A, #344, #349).

**Vận hành nhà hàng:** hàng đợi Bếp FIFO, khách quá 30 s bỏ đi thì hủy cả món đang nấu (H-36A(B), H-36B(B), #357, #361); thứ tự sự kiện xác định, giao món đúng giây 30 thành công (H-36D, #364); một hàng chờ Thu ngân FIFO chung, tối đa 60 s (H-38A, H-38C, #368, #376); bàn 2 khách, mỗi khách có đơn và đánh giá riêng, vệ sinh từng phần A/B, dọn 1 phần 2 s / 2 phần 4 s (H-38B, #372, #380); server giữ ghế nguyên tử (H-38D, #384); DRAINING ngừng khách mới, chờ khách rời (H-39A, #388); trạng thái vệ sinh gắn mã bàn (H-39C, #396); lưu bố cục chỉ khi xác nhận (H-39D(B), #396); cất bàn nhanh khi RUNNING không cần EDITING, hủy khách và hóa đơn chưa thanh toán, bàn vào kho luôn sạch (H-40D, #403–#411); mua/đặt nội thất trong EDITING (H-42A(B), #420); bán nội thất đã vào kho (H-42C, #425); WC: 20% khách đã thanh toán, 6 s, không hàng chờ, khách ngồi trực tiếp (H-42F, #438–#450); danh mục 19 mẫu và điểm tương tác định sẵn có cache (H-42E, #461–#477).

**Khách đến:** H-44(A) liên kết bàn–ghế theo Seat Anchors (#532); H-45.R(B) sao ảnh hưởng xác suất ghé (#544); H-45.1(C) đầy thì quay đi, không đánh giá (#548). Thông số H-45.2 vẫn CHƯA chốt (mục 9).

**Backend/tài khoản:** Guest chỉ liên kết vào tài khoản chưa có tiến trình (A-01(A), #480); khi offline khóa thao tác (A-02.1(A)); Lazy Offline Simulation (H-37B(A), #488); snapshot + version + idempotency (A-02.2(A), A-02.4(A)); thu hồi phiên cũ ngay (A-02.3(A)); Compact Snapshot + Durable Event Log, Lazy Recovery (A-02.5/6(A)); Access Token 15 phút, Refresh Token xoay vòng, 30 ngày không hoạt động, Safe Retry (A-03.1–3(A)); kiểm thử phân tầng S/M/L 100/500/1000 người chơi, ngưỡng sơ bộ (H-43(A), #524); bộ khởi đầu một lần G-02(A): 1 Chef Common, 1 Server Common Auto, T01×1, C01×2, K01×1, R01×1, bố cục dựng sẵn (#528).
