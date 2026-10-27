# Vietnamese Pixel Restaurant — P1 Revision review gate

## Review status

**REVISION IMPLEMENTED — AWAITING PRODUCT OWNER APPROVAL**

Based on the P1 architecture + visual prototype after the user requested a larger screen and reorganized HUD. **Do not start P2 before user acceptance.**

## Change log / requirements trace

| Owner change | Implemented | Evidence |
|---|---|---|
| Expand restaurant main screen | Yes | Canvas fills available `100dvh / 100vw`, no scrolling dashboard underneath |
| Move functions into main scene | Yes | Three overlay buttons at right: Nâng cấp / Thực đơn / Thông tin |
| Avatar, level, currency in upper-right | Yes (mock) | Player HUD + Lv.1 DEMO + mock coin balance |
| Serving area at upper center | Yes | Service indicator and centered world counter |
| Reserve left side for future events | Yes (space only) | `.reserved-events` has no interactive buttons |
| Change rotated floor to straight view | Yes | Orthographic frontal back wall + horizontal/rectangular floor tiles |
| Preserve working earnings and upgrades | Yes (mock) | Test suite and browser click smoke test |

## Verification completed in this session

- TypeScript `npm run typecheck`: **PASS**.
- `npm run test`: **6/6 PASS** (model and upgrade purchase behaviors remain unchanged).
- Chromium local DOM visual smoke checks: **PASS** at 390×844, 360×780, 1280×720, plus 320×568, 844×390 and 768×1024.
- Click flow checked: open upgrade panel, buy kitchen upgrade, rate +2, close panel; open menu, verify dish, Escape to close.
- No browser runtime errors observed in the three primary tested sizes.
- Standalone HTML includes code/style, and runs via file without an external host.

## Limitations and decisions

- This is still **non-authoritative** fake money. No server persistence, account, room, payments or authoritative XP.
- LV.1 text and coins `+` icon are visual only. The `+` icon is **not a payment control**.
- Neither production graphics nor Phaser engine choice is approved. Current Canvas2D art is original procedural graphics.
- Performance / FPS not certified on 2–3 physical mobile phones; required later by the P1 exit gate.
- **Next step:** owner reviews/approves P1 revision or requests another round. No P2 work has been begun.
