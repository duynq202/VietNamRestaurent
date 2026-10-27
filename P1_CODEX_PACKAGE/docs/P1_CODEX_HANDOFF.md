# P1 CODEX HANDOFF — VIETNAMESE PIXEL RESTAURANT

> **Loại tài liệu:** Hướng dẫn bàn giao P1 được duyệt, định dạng Markdown dành cho Codex.  
> **Dự án:** Vietnamese Pixel Restaurant / tên hiển thị P1: **Quán Cơm Nhà**.  
> **Repo đích:** `duynq202/VietNamRestaurent` (`main`).  
> **Trạng thái:** **P1 REVISION ĐÃ ĐƯỢC CHỦ DỰ ÁN PHÊ DUYỆT** trong hội thoại ChatGPT sau khi bộ nguồn có `PROJECT_STATUS.md` được tạo. **P2 CHỈ THIẾT KẾ, CHƯA ĐƯỢC PHÉP LẬP TRÌNH.**  
> **Nguồn chính:** Bộ ZIP gốc `vietnamese-pixel-restaurant-P1-REVISION-source.zip`, gồm source TypeScript, HTML/CSS, test, demo và preview. Tài liệu này được đối chiếu trực tiếp với mã nguồn đó.  
> **Ngày biên soạn bản bàn giao:** 27/10/2026.

## 0. LỆNH BẮT BUỘC CHO CODEX

1. Đọc **toàn bộ** tài liệu này và mã nguồn P1 bên dưới trước khi đề xuất hành động.
2. **Không tự tạo lại P1 từ trí nhớ hoặc mô tả**: P1 đã có mã nguồn và bản build. Ưu tiên bảo toàn nguyên trạng P1 đã được duyệt.
3. **Không lập trình P2**; không scaffold backend, Prisma, PostgreSQL, không thay đổi gameplay/economy theo P2 nếu chưa có ủy quyền lập trình P2 rõ ràng.
4. Đừng coi bất kỳ giá trị DEMO nào của P1 là thông số đã chốt cho gameplay production.
5. Nếu được yêu cầu chỉnh sửa P1, trước tiên kiểm tra mức ảnh hưởng đến giao diện đã duyệt; thay đổi theo đúng phạm vi người dùng phê duyệt, kiểm thử lại và cung cấp kết quả chạy được.
6. Giữ tách bạch: **P1 source = prototype được duyệt**, **P2 docs = quyết định thiết kế đang tiếp diễn**. Nếu tài liệu cũ mâu thuẫn với phê duyệt về sau, không tự chọn cách hòa giải; báo rõ xung đột.
7. Trình bày bằng **tiếng Việt**; tên file, API, identifiers có thể dùng tiếng Anh.

## 1. PHẠM VI VÀ MỤC TIÊU P1

P1 là prototype giao diện **mobile-web toàn màn hình**, dùng **Canvas 2D + TypeScript + HTML/CSS**. Mục tiêu là nghiệm thu giao diện nhà hàng pixel Việt Nam, cách sắp xếp HUD và các panel, cùng các tương tác demo; **không phải một game online có backend thật**.

### Phần đã duyệt

- Nhà hàng chiếm **toàn bộ khung nhìn** (`100vw × 100dvh` hoặc fallback thích hợp), không nằm trong một thẻ dashboard nhỏ; không cuộn trang để đến nội dung chính.
- Camera/góc vẽ **nhìn chính diện (frontal/orthographic)**, tường và quầy phục vụ ở phần trên; gạch lát sàn là các hàng **chữ nhật thẳng ngang**, không xoay hình thoi/isometric trong P1.
- **HUD người chơi góc trên phải:** avatar minh họa, tên mẫu **Đầu Bếp Nhỏ**, nhãn `LV. 1 DEMO` và Xu giả lập.
- **HUD phục vụ gần phía trên giữa**: số chỗ và mức thu nhập xu/giây demo. CSS có điều chỉnh xuống dưới cụm HUD người chơi trên màn hình hẹp để tránh chồng lấp.
- **Quầy phục vụ nằm giữa phía trên của thế giới game**; hình ảnh quán có bảng tên `QUÁN CƠM NHÀ`.
- **Dải trái** được giữ trống cho các nút sự kiện trong tương lai, **chưa có hệ thống sự kiện**.
- **Các nút chức năng nằm trong game ở mép phải:** `Nâng cấp`, `Thực đơn`, `Thông tin`; ở màn ngang thấp có thể chuyển thành hàng nút ngang để vừa màn.
- Chạm nút mở hộp thoại phủ trên màn chơi; có thể đóng bằng `✕`, chạm nền phủ, hoặc `Escape` trên desktop.
- Đồ họa pixel được vẽ bằng các hình chữ nhật và hàm Canvas2D trong `src/scene.ts`, bao gồm tường, cửa sổ, đèn, quầy, bàn, ghế, nhân vật và chuyển động minh họa.
- Các chỉ số Xu/thu nhập, mua nâng cấp demo và nội dung menu phải hoạt động theo logic **in-memory** để kiểm thử giao diện.
- Có hỗ trợ viewport điện thoại, safe areas, thao tác chạm, focus cơ bản, và `prefers-reduced-motion`.

### Chỉ có tính minh họa

- Nhãn Level 1 **không phải hệ thống XP**.
- Tiền Xu trong P1 **không phải tiền lưu server**.
- Nút dấu `+` trong ô tiền là **trang trí**, không phải cổng mua tiền.
- Người và món ăn đang vẽ là **nhân vật/asset minh họa**, không phải AI hành vi khách và Chef từ P2.

## 2. CẤU TRÚC MÃ NGUỒN ĐƯỢC XÁC MINH

Gói nguồn được duyệt có thư mục gốc `vietnamese-pixel-restaurant-p1/`:

```text
vietnamese-pixel-restaurant-p1/
├── .gitignore
├── README.md
├── PROJECT_STATUS.md
├── PLAY_DEMO.html
├── index.html
├── styles.css
├── package.json
├── tsconfig.json
├── src/
│   ├── main.ts
│   ├── demo-model.ts
│   └── scene.ts
├── dist/
│   ├── main.js
│   ├── demo-model.js
│   └── scene.js
├── scripts/
│   ├── server.mjs
│   └── bundle-demo.mjs
├── tests/
│   └── demo-model.test.mjs
└── docs/
    ├── preview-mobile.png
    └── preview-upgrades.png
```

**Vai trò các thành phần:**

| File | Chức năng và ranh giới |
|---|---|
| `src/scene.ts` | Vẽ nhà hàng Canvas2D góc chính diện, scale theo viewport, `imageSmoothingEnabled=false`, DPR tối đa 2, nhân vật và hiệu ứng minh họa. |
| `src/demo-model.ts` | **Logic Xu và nâng cấp giả lập**, chỉ để demo UI. Không đưa sang P2 làm kinh tế thật. |
| `src/main.ts` | Nối model và HUD, điều khiển panel, sự kiện nút, thông báo, vòng render `requestAnimationFrame`. |
| `index.html` | HTML gốc với canvas, HUD, nút chức năng, hộp thoại. |
| `styles.css` | Bố cục toàn màn hình, media queries, safe areas, tính dễ đọc và panel. |
| `dist/*` | JavaScript tạo từ TypeScript. |
| `scripts/bundle-demo.mjs` | Đóng gói HTML/CSS/JS thành **một file chạy offline**. |
| `PLAY_DEMO.html` | **Bản demo độc lập**, có thể mở trực tiếp bằng Chrome/Edge, không cần server. |
| `tests/demo-model.test.mjs` | Sáu kiểm thử hành vi logic giả lập. |
| `README.md` | Hướng dẫn chạy và phạm vi P1 từ bộ nguồn gốc. |
| `PROJECT_STATUS.md` | Nhật ký nghiệm thu do bộ nguồn sinh ra, thời điểm đó còn ghi “AWAITING PRODUCT OWNER APPROVAL”; **đã lỗi thời sau khi chủ dự án phê duyệt P1 REVISION**. |

Không chuyển `src/demo-model.ts` thành backend authoritative chỉ vì file có tên “model”.

## 3. CƠ CHẾ DEMO CHÍNH XÁC TỪ SOURCE

**Các số dưới đây CHỈ là mock values của P1, KHÔNG phải thiết kế cân bằng P2.**

| Trạng thái hoặc tính năng | Giá trị demo trong mã |
|---|---|
| Xu khởi đầu | `680` |
| Đã kiếm ban đầu | `0` |
| Kitchen level ban đầu | `1` |
| Table level ban đầu | `1` |
| Tốc độ kiếm xu hiển thị | `4` Xu DEMO/giây |
| Chỗ phục vụ hiển thị | `2` |
| Giá nâng cấp bếp | `120 × kitchenLevel` Xu DEMO |
| Tác dụng nâng cấp bếp | `+2` Xu DEMO/giây |
| Max nâng cấp bếp demo | Level `5` |
| Giá nâng cấp bàn ghế | `170 × tableLevel` Xu DEMO |
| Tác dụng nâng cấp bàn ghế | `+1` chỗ phục vụ |
| Max nâng cấp bàn ghế demo | Level `3` |
| Trần thời gian tính Xu theo mỗi frame | `0.25` giây, tránh nhận offline income khi tab đóng |

- Có hai ID nâng cấp: `kitchen` và `tables`. **Đây chỉ là hai nút prototype**; nhánh nâng cấp ghế/bàn trong P1 không chứng minh P2 có nhánh “Seating” (P2 có Kitchen và Service theo các quyết định về sau).
- `advanceDemo()` tăng Xu theo số giây frame được giới hạn 0,25s, không cấp thu nhập offline 8 giờ. Logic 8 giờ là **cơ chế P2 tách biệt**.
- `buyDemoUpgrade()` kiểm tra Xu demo, chi phí và max level; thao tác chỉ làm đổi trạng thái trên trình duyệt.
- Panel `Thực đơn` hiển thị ví dụ `Phở bò`, `Bánh mì`, `Cơm tấm`, `Cà phê sữa`: **không phải danh mục món P2 đã duyệt**.
- Reload trang resets mô phỏng. Không có local save hoặc database.

## 4. CÁCH CHẠY / BUILD / KIỂM THỬ

### 4.1. Chạy ngay bằng một file

Mở trực tiếp **`PLAY_DEMO.html`** trong Chrome hoặc Edge. HTML độc lập, không cần internet hoặc `npm`.

### 4.2. Chạy source có thể chỉnh sửa

Yêu cầu môi trường Node.js; dự án gốc khuyến nghị Node.js 20+.

```bash
npm install
npm run build
npm run dev
```

Mở: `http://localhost:4173` (theo `README.md` nguồn).

Các lệnh có trong `package.json`:

```bash
npm run typecheck  # tsc --noEmit
npm run build      # tsc + bundle thành PLAY_DEMO.html
npm run test       # build + chạy tests/demo-model.test.mjs
npm run check      # typecheck + test
```

**Kiểm chứng trong lượt bàn giao hiện tại:** đã giải nén bản source gốc vào thư mục kiểm tra riêng và chạy `npm run check` với Node.js v22.16.0; TypeScript typecheck thành công, build thành công, **6/6 test pass**. Không cài backend hoặc lập trình P2. **Chưa chạy lại browser smoke test trong lượt bàn giao này**.

**Lịch sử test ghi trong `PROJECT_STATUS.md` gốc:** Chromium smoke test qua viewport `390×844`, `360×780`, `320×568`, `844×390`, `768×1024`, `1280×720`; người tạo P1 báo các tương tác panel và nâng cấp chạy, không quan sát lỗi runtime. Đây là thông tin lịch sử, không thay thế kiểm thử trên điện thoại vật lý.

### 4.3. Kiểm tra UI P1 cần bảo toàn

- Render toàn màn hình trên điện thoại và desktop; không làm xuất hiện vùng dashboard/scroll khác.
- Avatar / Lv / Xu ở góc trên phải; service HUD ở giữa phía trên, không che nhân vật hoặc biển hiệu nghiêm trọng.
- Dải UI bên trái giữ trống; các nút ở bên phải, hoạt động trên touch.
- Sàn thẳng góc trực diện; không vô tình đổi thành góc nhìn isometric/diamond.
- Các panel mở/đóng đúng, không có nút bị che khuất ở viewport hẹp/ngang.
- Chỉ số mock cập nhật, nâng cấp trừ Xu demo một lần, thông báo thiếu tiền / đạt max đúng.
- Mở trực tiếp `PLAY_DEMO.html` ở chế độ offline; `npm run check` đạt.

## 5. NHỮNG HẠNG MỤC KHÔNG CÓ TRONG P1

**Chưa triển khai:** đăng ký/login Guest, Google, Facebook, account linking, đồng bộ phiên, backend NestJS, PostgreSQL, Prisma, Xu/XP authoritative, doanh thu offline 8 giờ thật, customer-star rating, nhân viên recruitment/gacha, kho và sắp nội thất theo lưới, pathfinding, multiplayer realtime, ví premium, thanh toán PSP, shop production, event system, hệ thống WC, thiết kế isometric 2.5D P2, asset pack production, test bảo mật và kiểm thử tải production.

Các quyết định P2 trong GitHub docs hoặc trong chat không làm thay đổi P1 đã duyệt, và **không tạo quyền thực thi P2**.

## 6. THỨ TỰ NGUỒN SỰ THẬT KHI CODEX ĐỌC REPO

1. **Mã P1 được đóng gói kèm tài liệu này** là nguồn để xác định **những gì P1 thực sự chạy**.
2. **Phê duyệt P1 REVISION của chủ dự án sau ngày tạo `PROJECT_STATUS.md`** là nguồn để xác định **trạng thái đã được duyệt**.
3. `README.md` và `PROJECT_STATUS.md` bên trong P1 là thông tin kỹ thuật và lịch sử tại lúc build; nhãn “AWAITING” trong `PROJECT_STATUS.md` không phải trạng thái phê duyệt cuối cùng.
4. Repo đích hiện có `AGENTS.md`, `docs/CODEX_MASTER_PROMPT.md`, `docs/MIGRATION_CHECKLIST.md`, v.v. Một số file repo **hiện đang viết rằng P1 source chưa có**. Sau khi người dùng thực sự tải gói này vào repo, cần sửa những thông báo đó cho đúng nếu được yêu cầu.
5. PDF thiết kế tổng quát v1.0 là tài liệu phạm vi lớn hơn, có hạng mục P2/proposal. **Không dùng PDF thay thế P1 source** và không tự áp dụng các proposal vào P1.

## 7. QUY TRÌNH BÀN GIAO ĐỀ XUẤT, KHÔNG PHẢI LỆNH TỰ THỰC HIỆN

Khi chủ dự án chuyển gói này cho Codex:

1. Đưa thư mục `vietnamese-pixel-restaurant-p1/` vào repo (ví dụ `p1/vietnamese-pixel-restaurant-p1/`), giữ nguyên nội dung.
2. Đưa tài liệu này vào `docs/P1_CODEX_HANDOFF.md`.
3. Kiểm tra `npm run check` và mở `PLAY_DEMO.html` trên trình duyệt.
4. Sau khi đã xác nhận thực sự có source trong GitHub, sửa `README.md`, `AGENTS.md` và `docs/MIGRATION_CHECKLIST.md` hiện có để phản ánh việc source đã được nhận, **nhưng chỉ khi chủ dự án cho phép ghi thay đổi vào repo**.
5. Giữ P2 ở trạng thái **DESIGN REVIEW — NO CODING** cho tới khi có phê duyệt riêng.

## 8. YÊU CẦU PHẢN HỒI CHO CODEX SAU KHI NHẬN

Codex nên trả lời ngắn gọn bằng tiếng Việt: (1) đã nhận được mã P1 hay mới nhận tài liệu, (2) đã đọc được các file chính hay chưa, (3) các lệnh kiểm thử đã **thực sự chạy** và kết quả, (4) P1 được duyệt, P2 chưa được phép lập trình; (5) chỉ ra file nào trong repo cần cập nhật để tránh trạng thái “P1 missing” lỗi thời. **Không tự ý bắt đầu viết P2.**

---

**KẾT LUẬN:** P1 là prototype UI Canvas2D/TypeScript toàn màn hình, nhìn chính diện, có demo tương tác và tests. Mã nguồn gốc đã tồn tại trong gói đi kèm. P2 chỉ là đặc tả và đối thoại phê duyệt, chưa là hạng mục triển khai.
