import { advanceDemo, buyDemoUpgrade, newDemoState, upgradeSpec, type DemoState, type DemoUpgradeId } from './demo-model.js';
import { RestaurantScene } from './scene.js';

const $ = <T extends HTMLElement>(selector: string): T => {
  const element = document.querySelector<T>(selector);
  if (!element) throw new Error(`Missing element: ${selector}`);
  return element;
};

const canvas = $<HTMLCanvasElement>('#restaurant-canvas');
const scene = new RestaurantScene(canvas);
const coins = $<HTMLElement>('#coins');
const earning = $<HTMLElement>('#earning');
const rate = $<HTMLElement>('#rate');
const capacity = $<HTMLElement>('#capacity');
const panel = $<HTMLElement>('#detail-panel');
const dialog = $<HTMLElement>('#feature-dialog');
const dialogTitle = $<HTMLElement>('#dialog-title');
const backdrop = $<HTMLElement>('#panel-backdrop');
const closeButton = $<HTMLButtonElement>('#close-panel');
const toasts = $<HTMLElement>('#toast');
const panelButtons = [...document.querySelectorAll<HTMLButtonElement>('[data-panel]')];
let state: DemoState = newDemoState(performance.now());
let activePanel: 'upgrades'|'dishes'|'about'|null = null;
let activeOpener: HTMLButtonElement|null = null;
let lastUI = 0;
let lastPanelSignature = '';
let toastTimer: number | undefined;
let reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const format = (value: number) => new Intl.NumberFormat('vi-VN',{ maximumFractionDigits: 0 }).format(Math.floor(value));

function notify(message: string) {
  toasts.textContent = message;
  toasts.classList.add('show');
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toasts.classList.remove('show'), 2600);
}

function closePanel() {
  if (!activePanel) return;
  activePanel = null;
  dialog.hidden = true;
  backdrop.hidden = true;
  panelButtons.forEach(button => button.setAttribute('aria-expanded','false'));
  activeOpener?.focus();
  activeOpener = null;
}

function openPanel(name: 'upgrades'|'dishes'|'about', opener: HTMLButtonElement) {
  if(activePanel===name) {closePanel();return;}
  activePanel = name;
  activeOpener = opener;
  dialogTitle.textContent = name==='upgrades'?'Nâng cấp nhà hàng':name==='dishes'?'Thực đơn Việt':'Về bản prototype';
  dialog.hidden = false;
  backdrop.hidden = false;
  panelButtons.forEach(button => button.setAttribute('aria-expanded',String(button===opener)));
  renderPanel();
  closeButton.focus();
}

function makeUpgrade(id: DemoUpgradeId, icon: string, description: string) {
  const spec = upgradeSpec(state,id);
  const level = id === 'kitchen' ? state.kitchenLevel : state.tableLevel;
  const maxed = id === 'kitchen' ? level >= 5 : level >= 3;
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'upgrade-card';
  button.disabled = maxed || state.demoCoins < spec.cost;
  button.innerHTML = `<span class="upgrade-icon" aria-hidden="true">${icon}</span><span class="upgrade-copy"><strong>${spec.label} <small>Lv.${level}</small></strong><span>${description}</span><em>${maxed?'Đã nâng cấp tối đa':spec.nextEffect}</em></span><span class="upgrade-price">${maxed?'MAX':`${format(spec.cost)} ✦`}</span>`;
  button.addEventListener('click', () => {
    const result = buyDemoUpgrade(state,id);
    if(result.ok) {
      state = result.state;
      renderUI();
      notify(`Nâng cấp ${spec.label} thành công (demo).`);
    } else notify(result.reason==='MAX_LEVEL'?'Đã đạt mức tối đa.':'Không đủ xu giả lập.');
  });
  return button;
}

function panelSignature() {
  return `${activePanel}|${state.kitchenLevel}|${state.tableLevel}|${state.demoCoins>=upgradeSpec(state,'kitchen').cost}|${state.demoCoins>=upgradeSpec(state,'tables').cost}`;
}

function renderPanel() {
  lastPanelSignature = panelSignature();
  panel.replaceChildren();
  if (activePanel === 'upgrades') {
    panel.append(makeUpgrade('kitchen','🍳','Tăng tốc độ phục vụ'),makeUpgrade('tables','🪑','Thêm chỗ phục vụ'));
  } else if (activePanel === 'dishes') {
    panel.innerHTML = '<div class="dish-grid"><div><span>🍲</span><strong>Phở bò</strong><small>Món nước truyền thống</small></div><div><span>🥖</span><strong>Bánh mì</strong><small>Bánh mì kẹp</small></div><div><span>🍚</span><strong>Cơm tấm</strong><small>Món cơm bình dân</small></div><div><span>☕</span><strong>Cà phê sữa</strong><small>Thức uống quen thuộc</small></div></div><p class="smallnote">Món ăn chỉ minh họa giao diện, chưa phải catalog được duyệt.</p>';
  } else if (activePanel === 'about') {
    panel.innerHTML = '<div class="explain"><p>Đây là bản <strong>P1 REVISION</strong> của trò chơi Quán Cơm Nhà. Giao diện toàn màn hình, các nút chức năng nằm trong màn chơi, và sàn nhà nhìn thẳng.</p><p><strong>Ô bên trái được để trống</strong> cho các nút sự kiện trong tương lai. Level người chơi hiện là nhãn minh họa, chưa có hệ thống XP.</p><p>Doanh thu, xu và nâng cấp là dữ liệu giả lập trong bộ nhớ. Chưa có tài khoản, lưu server, multiplayer, premium hay thanh toán.</p></div>';
  }
}

function renderUI() {
  coins.textContent = format(state.demoCoins);
  earning.textContent = format(state.earned);
  rate.textContent = String(state.ratePerSecond);
  capacity.textContent = String(state.customerCapacity);
  if(activePanel==='upgrades' && panelSignature()!==lastPanelSignature) renderPanel();
}

function loop(time: number) {
  state = advanceDemo(state,time);
  if(!document.hidden) scene.render(reduceMotion?0:time,state);
  if(time-lastUI>250){renderUI();lastUI=time;}
  requestAnimationFrame(loop);
}

panelButtons.forEach(button => button.addEventListener('click',()=>openPanel(button.dataset.panel as 'upgrades'|'dishes'|'about',button)));
closeButton.addEventListener('click',closePanel);
backdrop.addEventListener('click',closePanel);
document.addEventListener('keydown',event => {
  if(event.key==='Escape')closePanel();
  if(event.key==='Tab' && activePanel) {
    const focusable = [...dialog.querySelectorAll<HTMLElement>('button:not(:disabled), [href], [tabindex]:not([tabindex="-1"])')];
    if(!focusable.length)return;
    const first = focusable[0]!;
    const last = focusable[focusable.length-1]!;
    if(event.shiftKey && document.activeElement===first){event.preventDefault();last.focus();}
    else if(!event.shiftKey && document.activeElement===last){event.preventDefault();first.focus();}
  }
});
window.addEventListener('resize',()=>scene.resize());
window.matchMedia('(prefers-reduced-motion: reduce)').addEventListener('change',event=>reduceMotion=event.matches);
window.addEventListener('visibilitychange',()=>{
  if(!document.hidden){state={...state,lastTickMs:performance.now()};scene.resize();}
});
renderUI();
requestAnimationFrame(loop);
