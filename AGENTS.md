# Codex operating rules — VietNamRestaurent

Read README.md, docs/CODEX_MASTER_PROMPT.md, docs/OPEN_DECISIONS.md, docs/FIRST_TASK.md before acting.

## Hard gates
- P1 prototype is APPROVED in ChatGPT, but its complete source is NOT supplied here. Never invent missing P1 code or declare it migrated. Ask for the original artifact if necessary.
- P2 is PRE-CODING DISCUSSION ONLY. No implementation, migration, dependency installation, scaffold, database creation, commits of game code, deployment, or tests modifying code unless user explicitly approves P2 coding.
- User works one subdecision at a time. Present one proposal and stop for APPROVED / REVISION (or equivalent explicit approval). Acknowledgment is not approval of unrelated items.
- Never silently turn proposals into locked specs. Preserve approved and pending decisions separately.
- Conversation/design language Vietnamese; technical names and identifiers in English.
- On contradictions, list conflicts and request decision, without silently overwriting prior locked rules.
- Do not modify working code or existing artifacts without permission; propose changes first.
- Never claim an action succeeded unless verified.

## Project phase rules
P1: Canvas2D/TypeScript standalone HTML + ZIP prototype; fullscreen; top-right avatar/level/currency, top-center service area, left reserved for events, right floating actions, floor in straight-on orientation. P1 final UI approved.
P2: Node.js + NestJS + PostgreSQL + Prisma backend design; mechanics in docs/CODEX_MASTER_PROMPT.md. P2 not implementation-approved.

## Current task
Review docs/FIRST_TASK.md and continue H-45.2.1 customer spawn/pressure calibration as a proposal only. Do not code.
