export function newDemoState(initialTimeMs = 0) {
    return { demoCoins: 680, earned: 0, kitchenLevel: 1, tableLevel: 1, ratePerSecond: 4, customerCapacity: 2, lastTickMs: initialTimeMs };
}
export function upgradeSpec(state, id) {
    if (id === 'kitchen') {
        return { id, cost: 120 * state.kitchenLevel, label: 'Bếp nhà', nextEffect: '+2 xu demo / giây' };
    }
    return { id, cost: 170 * state.tableLevel, label: 'Bàn ghế', nextEffect: '+1 chỗ phục vụ' };
}
export function advanceDemo(state, nowMs) {
    if (!Number.isFinite(nowMs) || nowMs <= state.lastTickMs)
        return state;
    // Frame-level animation ticks are capped: closing the tab does NOT grant offline rewards.
    const seconds = Math.max(0, Math.min((nowMs - state.lastTickMs) / 1000, 0.25));
    const payout = seconds * state.ratePerSecond;
    return { ...state, lastTickMs: Math.max(state.lastTickMs, nowMs), demoCoins: state.demoCoins + payout, earned: state.earned + payout };
}
export function buyDemoUpgrade(state, id) {
    if (id === 'tables' && state.tableLevel >= 3 || id === 'kitchen' && state.kitchenLevel >= 5)
        return { ok: false, reason: 'MAX_LEVEL', state };
    const { cost } = upgradeSpec(state, id);
    if (state.demoCoins < cost)
        return { ok: false, reason: 'INSUFFICIENT_DEMO_COINS', state };
    return {
        ok: true,
        state: { ...state, demoCoins: state.demoCoins - cost,
            kitchenLevel: state.kitchenLevel + Number(id === 'kitchen'),
            tableLevel: state.tableLevel + Number(id === 'tables'),
            ratePerSecond: state.ratePerSecond + (id === 'kitchen' ? 2 : 0),
            customerCapacity: state.customerCapacity + (id === 'tables' ? 1 : 0) }
    };
}
