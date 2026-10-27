# PDF v1.0 vs newer ChatGPT P2 decisions

Original source uploaded in ChatGPT: `Dac_ta_phan_tich_thiet_ke_game_nha_hang_pixel_Viet_Nam_v1.0.pdf`, 15 pages, dated **2026-10-24**, original file SHA256 `b4b27335a62bafc2017afd15a673c36eab9b7f3e4f922c97248e896a468be5ef`.

**IMPORTANT:** Original PDF has NOT been committed as a binary file to this repo. The user should upload the exact PDF to `docs/reference/SRS_v1_2026-10-24.pdf` using GitHub's Add file → Upload files (or Codex workspace transfer), preserving its original bytes. This document provides documented conflicts but not a substitute for the source.

## Precedence
1. Explicit later decisions approved by the user (P2 design conversation).
2. Earlier explicit approved P1 rules.
3. Original SRS v1.0 items marked CONFIRMED where not superseded.
4. Items marked PROPOSED / OPEN in SRS v1.0: not approved.
5. Working assumptions and suggestions: not approved.

If uncertain whether a later decision supersedes a PDF item, flag for review, do not reconcile silently.

## Identified differences
- PDF v1.0 §2.2 lists **gacha/loot boxes outside MVP** unless separately approved. Later ChatGPT P2 explicitly designed Normal/Special staff recruitment, rarity distributions and pity. Treat the later P2 staff recruiting design as locked **for the P2 design**, but do not infer permissions for implementation, production or monetized gacha.
- PDF v1.0 §3.3 lists a **PROPOSED** offline economy formula with unspecified cap. Later P2 approved **100% offline income, max 8 hours**, server computed and EDITING pause rules. Newer approval governs.
- PDF v1.0 §6.1 proposes **Phaser + TypeScript** frontend, whereas P1 prototype actually used **Canvas2D/TypeScript standalone HTML**. Do not rewrite existing approved P1 or assume Phaser is locked.
- PDF v1.0 §2.1 describes **premium wallet and real-money shop** as product direction; later P2 explicitly states no Premium tickets in staff recruiting. This is not proof that all premium features were canceled. Payment PSP and production legal review remain OPEN.
- PDF v1.0 §14.2 lists login method as OPEN (O-01). Later P2 approved Guest + register/login + Google + Facebook and single-device sessions. Exact linking and provider integration UX remain OPEN.
- PDF v1.0 §4 describes mobile-web portrait first and art direction; later approved P1 straight-on floor/UI placement should not be silently replaced by isometric suggestions.
- PDF v1.0 §5 confirms realtime social presence, independently owned progression. Later current design focus is economy/traffic; do not assume this confirms realtime implementation in P2.

## Useful PDF chapters to review once uploaded
- §1–2 scope and FR-01..FR-18
- §3 economy; §4 UX
- §5 realtime; §6 technology
- §7 DB and transactions; §8 HTTP/WS
- §9 payments and PSP; §10 security/law
- §11 performance; §12 tests; §13 delivery; §14 open risks

Until binary PDF is present, Codex has the core handoff docs, not a completely archived original source.
