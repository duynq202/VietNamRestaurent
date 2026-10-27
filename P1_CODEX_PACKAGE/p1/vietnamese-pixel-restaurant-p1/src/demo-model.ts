/** P1 VISUAL-ONLY mock values. Never reuse as authoritative economy logic. */
export type DemoUpgradeId = 'kitchen' | 'tables';
export interface DemoState {
  demoCoins: number;
  earned: number;
  kitchenLevel: number;
  tableLevel: number;
  ratePerSecond: number;
  customerCapacity: number;
  lastTickMs: number;
}
export interface DemoUpgradeSpec { id: DemoUpgradeId; cost: number; label: string; nextEffect: string; }

export function newDemoState(initialTimeMs = 0): DemoState {
  return { demoCoins: 680, earned: 0, kitchenLevel: 1, tableLevel: 1, ratePerSecond: 4, customerCapacity: 2, lastTickMs: initialTimeMs };
}

export function upgradeSpec(state: DemoState, id: DemoUpgradeId): DemoUpgradeSpec {
  if (id === 'kitchen') {
    return { id, cost: 120 * state.kitchenLevel, label: 'Bếp nhà', nextEffect: '+2 xu demo / giây' };
  }
  return { id, cost: 170 * state.tableLevel, label: 'Bàn ghế', nextEffect: '+1 chỗ phục vụ' };
}

export function advanceDemo(state: DemoState, nowMs: number): DemoState {
  if (!Number.isFinite(nowMs) || nowMs <= state.lastTickMs) return state;
  // Frame-level animation ticks are capped: closing the tab does NOT grant offline rewards.
  const seconds = Math.max(0, Math.min((nowMs - state.lastTickMs) / 1000, 0.25));
  const payout = seconds * state.ratePerSecond;
  return { ...state, lastTickMs: Math.max(state.lastTickMs, nowMs), demoCoins: state.demoCoins + payout, earned: state.earned + payout };
}

export type UpgradeResult = { ok: true; state: DemoState } | { ok: false; reason: 'INSUFFICIENT_DEMO_COINS' | 'MAX_LEVEL'; state: DemoState };
export function buyDemoUpgrade(state: DemoState, id: DemoUpgradeId): UpgradeResult {
  if (id === 'tables' && state.tableLevel >= 3 || id === 'kitchen' && state.kitchenLevel >= 5) return { ok: false, reason: 'MAX_LEVEL', state };
  const { cost } = upgradeSpec(state, id);
  if (state.demoCoins < cost) return { ok: false, reason: 'INSUFFICIENT_DEMO_COINS', state };
  return {
    ok: true,
    state: { ...state, demoCoins: state.demoCoins - cost,
      kitchenLevel: state.kitchenLevel + Number(id === 'kitchen'),
      tableLevel: state.tableLevel + Number(id === 'tables'),
      ratePerSecond: state.ratePerSecond + (id === 'kitchen' ? 2 : 0),
      customerCapacity: state.customerCapacity + (id === 'tables' ? 1 : 0) }
  };
}
