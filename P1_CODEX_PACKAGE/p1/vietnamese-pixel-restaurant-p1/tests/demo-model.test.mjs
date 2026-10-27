import { test } from 'node:test';
import assert from 'node:assert/strict';
import { newDemoState, advanceDemo, buyDemoUpgrade, upgradeSpec } from '../dist/demo-model.js';

test('demo start state has one small restaurant', () => {
  const state = newDemoState(1200);
  assert.equal(state.tableLevel, 1);
  assert.equal(state.customerCapacity, 2);
  assert.equal(state.ratePerSecond, 4);
});
test('frame earnings capped and client frame is not offline reward', () => {
  const state = newDemoState(1000);
  const next = advanceDemo(state, 61000);
  assert.equal(next.demoCoins, 681);
  assert.equal(next.lastTickMs, 61000);
  assert.equal(advanceDemo(next, 2000), next);
});
test('kitchen demo upgrade deducts cost and changes demo rate', () => {
  const start = newDemoState();
  const result = buyDemoUpgrade(start,'kitchen');
  assert.equal(result.ok,true);
  assert.equal(result.state.demoCoins, start.demoCoins - 120);
  assert.equal(result.state.ratePerSecond, 6);
  assert.equal(start.kitchenLevel,1);
});
test('table upgrades respect max tier', () => {
  let state = newDemoState();
  state = buyDemoUpgrade(state,'tables').state;
  state = {...state,demoCoins:2000};
  state = buyDemoUpgrade(state,'tables').state;
  assert.equal(state.customerCapacity,4);
  assert.deepEqual(buyDemoUpgrade(state,'tables'), {ok:false, reason:'MAX_LEVEL',state});
});
test('insufficient coins never changes state', () => {
  const state = {...newDemoState(),demoCoins:0};
  const result = buyDemoUpgrade(state,'kitchen');
  assert.equal(result.ok,false);
  assert.equal(result.state,state);
});
test('cost comes from current level', () => {
  assert.equal(upgradeSpec({...newDemoState(),kitchenLevel:3},'kitchen').cost,360);
});
