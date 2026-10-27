# Quán Cơm Nhà — P1 REVISION (Vietnamese Pixel Restaurant)

**Status:** UI / graphics prototype only. No production backend or real-money system.

Based on *Vietnamese Pixel Restaurant — System Design Specification v1.0* (24/10/2026), sections 3, 4, 6 and 13.1. The entire revision is limited to **P1**; new scope is not automatically approved.

## Open immediately — no software installation

Download **PLAY_DEMO.html** and open it with Chrome / Edge. The whole prototype (HTML, CSS, mock logic and graphics code) is embedded in this single file; no internet, server or npm required.

## Changes requested in this revision

1. **Full-screen playfield:** main restaurant canvas fills the browser viewport and adapts to portrait screens and desktop sizes, rather than appearing as a small card with extra sections beneath.
2. **In-game function buttons:** Nâng cấp, Thực đơn and Thông tin are the vertical action buttons on the **right edge** (compact horizontal row on short landscape screens). Tapping opens a dialog over the game, which can be dismissed using ✕, tapping outside or Escape.
3. **Player panel:** sample avatar, Lv.1 DEMO and mock coins grouped at **upper right**. Lv.1 is visual UI only, not an XP system.
4. **Service HUD and in-world counter:** capacity and income at **upper center**, with a centered restaurant serving counter below.
5. **Left reservation zone:** clear of game UI controls to make room for future event buttons; **no event system is implemented**.
6. **Frontal flooring:** wall and back counter run horizontally; the rectangular floor tile grid is aligned to the screen, with **no diagonal diamond / isometric floor rotation**.
7. The existing mock earnings, upgrades and menu remain functional and are **not server-authoritative**.

## Running editable source (Node.js 20+ recommended)

```bash
npm install
npm run build
npm run dev
```

Open `http://localhost:4173` on a computer, or use an accessible local network host on your phone. A compiled `dist` folder is shipped in the ZIP, so `npm run dev` also works when Node.js is present and packages are not installed.

`npm run build` compiles TypeScript and regenerates the standalone `PLAY_DEMO.html` for review; this local P1 bundler is intentionally tiny and **is not** a production build system.

## Tests

```bash
npm run check
```

Runs TypeScript typecheck, build, and 6 mock game logic tests. A browser smoke test was also run externally with Chromium at 390×844, 360×780, 320×568, 844×390, 768×1024 and 1280×720: game canvas, main HUD, button navigation, upgrades, menu, and dialog close were checked. This is not a substitute for physical-device FPS or touch usability testing.

## Main files

- `src/scene.ts` — front-view restaurant art using procedural Canvas 2D.
- `src/demo-model.ts` — isolated disposable economy simulation, **not** real server economy.
- `src/main.ts` — HUD data binding, action buttons, dialogs, upgrades, UI notifications.
- `index.html`, `styles.css` — source markup/layout.
- `scripts/bundle-demo.mjs`, `PLAY_DEMO.html` — offline HTML demo creation and output.
- `tests/demo-model.test.mjs` — 6 mock-model tests.
- `PROJECT_STATUS.md` — changes, test evidence, pending owner approval.

## Incomplete / intentionally out of scope for P1

No accounts, PostgreSQL, authoritative earnings, server save, production asset atlas, approved content catalog, real XP, event system, WebSocket multiplayer, premium wallet, PSP, inventory, payment or compliance checks. Changes in the backend and the game-engine selection (Phaser vs Canvas2D) require further owner approval. Checkout is disabled/not present; the mock "plus" in the coin pill is an **ornamental badge**, not a purchase action.
