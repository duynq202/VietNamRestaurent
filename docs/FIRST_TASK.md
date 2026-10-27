# First task for Codex — discussion only

You are continuing the Vietnamese Pixel Restaurant P2 design conversation from ChatGPT.

**Do not write code, edit game files or create a new scaffold.** First summarize your understanding of the locked constraints relevant to H-45.2.1, then propose **one** balanced arrival/spawn calibration for user review:
- Goal: more customers than the previous proposal, moderate operational pressure, mean restaurant star rating around 4.0 for baseline staffing (not a guaranteed result).
- Starting test: 1 Common Chef + 1 Common Server, starter 1 table + 2 chairs placed validly, no powerful buffs.
- Fixed timings: cook base 8 s; eating 15 s; cashier 3 s; cleaning 4 s at Service L1; waiting clock from arrival through delivery, >30 s leaves, exactly 30 s remains valid.
- Reviews: wait <=8s=5★; >8–15=4★; >15–23=3★; >23–30=2★; >30 leaves=1★; smooth R_new=.95 R_old+.05 review.
- Movement: customer 2 cells/s; server 3 cells/s; door crossing 2 s; seated before order; queue and capacity rules in master prompt.
- Arrival multiplier from rating: 0.75x at 1★ to 1.30x at 5★; interpolation not yet approved.
- H-45.R(B) passerby-to-interested visit probability, H-45.1(C) interested passerby reaches entrance then turns away without review if full.
- Analyze throughput and bottlenecks; give deterministic server-side/offline simulation protocol, metrics, sensitivity and alternatives. Avoid inventing measured simulation outputs.
- Carefully separate: passersby observed, passersby who decide to visit, admitted customers, and successfully served customers.
- Present one proposal for **APPROVED / REVISION**, then stop.
