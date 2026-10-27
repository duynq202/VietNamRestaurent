/** Frontal orthographic restaurant. Horizontal back wall + rectangular floor grid.
 *  Logical height is fixed, width follows viewport aspect ratio; no distorted art. */
const WORLD_HEIGHT = 1080;
const r = (c, color, x, y, w, h) => { c.fillStyle = color; c.fillRect(Math.round(x), Math.round(y), Math.round(w), Math.round(h)); };
const outline = (c, x, y, w, h, fill, border = '#704631', th = 5) => {
    r(c, border, x, y, w, h);
    r(c, fill, x + th, y + th, w - th * 2, h - th * 2);
};
const label = (c, value, x, y, size = 17, color = '#fff0cf') => { c.font = `900 ${size}px system-ui`; c.fillStyle = color; c.textAlign = 'center'; c.fillText(value, x, y); };
function line(c, col, x, y, x2, y2, width = 3) { c.strokeStyle = col; c.lineWidth = width; c.beginPath(); c.moveTo(x, y); c.lineTo(x2, y2); c.stroke(); }
function shadow(c, x, y, w, h) { c.fillStyle = '#563a2e35'; c.beginPath(); c.ellipse(x, y, w, h, 0, 0, Math.PI * 2); c.fill(); }
function tileFloor(c, half) {
    const left = -half;
    r(c, '#8b5141', left, 453, half * 2, 17);
    r(c, '#e5b27a', left, 470, half * 2, 610);
    // Straight-on rectangular tiles; no diagonal/isometric diamond.
    for (let row = 0; row < 16; row++) {
        const top = 470 + row * 40;
        const offset = (row % 2) * 44;
        for (let x = left - 90 + offset; x < half + 90; x += 88) {
            r(c, ((row + Math.floor(x / 88)) % 3 === 0) ? '#f1c994' : '#e9b982', x + 2, top + 2, 84, 35);
            r(c, '#fff0bb30', x + 4, top + 3, 79, 3);
        }
        r(c, '#ca946d', left, top + 38, half * 2, 2);
    }
    // runner rug in front, rectangular not diagonal
    shadow(c, 0, 956, 155, 42);
    outline(c, -147, 916, 294, 104, '#8e483d', '#65382e', 8);
    outline(c, -122, 933, 244, 65, '#d78554', '#f0b277', 6);
    label(c, 'CHÀO MỪNG', 0, 976, 20, '#ffe5ab');
}
function wall(c, half) {
    r(c, '#cf8f61', -half, 0, half * 2, 475);
    for (let x = -half - 6; x < half + 6; x += 76) {
        r(c, Math.round(x / 76) % 2 ? '#e7b47d' : '#e3ab73', x, 0, 72, 450);
        r(c, '#f3c58a29', x + 4, 0, 7, 448);
    }
    r(c, '#794a38', -half, 0, half * 2, 45);
    r(c, '#f3ce8a', -half, 45, half * 2, 11);
    r(c, '#5c372f', -half, 110, half * 2, 22);
    r(c, '#af6b4b', -half, 131, half * 2, 11);
    for (let y = 160; y < 450; y += 66)
        r(c, '#f0c38d22', -half, y, half * 2, 4);
    r(c, '#704938', -half, 441, half * 2, 26);
    r(c, '#ecc48f', -half, 466, half * 2, 8);
    // top fascia edge / festoon lights
    for (let x = -half + 25; x < half; x += 66) {
        r(c, '#f7d6a9', x, 121, 6, 6);
        r(c, '#d17a4b', x - 5, 130, 16, 5);
    }
}
function drawWindow(c, x, y, w, h) {
    outline(c, x, y, w, h, '#bfe1cf', '#764a38', 9);
    r(c, '#b8dcca', x + 12, y + 12, w - 24, h - 24);
    r(c, '#f1edb8', x + 15, y + 14, w - 30, 38);
    r(c, '#9abea3', x + 15, y + 58, w - 30, h - 73);
    for (let dx = 0; dx < w - 30; dx += 27)
        r(c, '#7eaa91', x + 17 + dx, y + 105 + Math.sin(dx) * 10, 19, h - 123);
    r(c, '#7c4c39', x + w / 2 - 5, y, 10, h);
    r(c, '#7c4c39', x, y + h * .51, w, 9);
    r(c, '#e6a469', x - 7, y + h, w + 14, 14);
}
function sign(c, time) {
    // The sign hangs beneath the centered service HUD on narrow phone screens.
    // Its lettering stays legible instead of sitting underneath a UI overlay.
    r(c, '#61392f', -165, 261, 330, 70);
    outline(c, -156, 266, 312, 61, '#93483a', '#f5c876', 7);
    r(c, '#663830', -144, 277, 288, 38);
    label(c, 'QUÁN CƠM NHÀ', 0, 306, 31, '#fff0c9');
    if (Math.floor(time / 800) % 2 === 0) {
        r(c, '#fff7d0', -151, 269, 6, 6);
        r(c, '#fff7d0', 145, 315, 6, 6);
    }
}
function lantern(c, x, y, shift) {
    r(c, '#55352e', x - 2, y - 45, 4, 46);
    r(c, '#f3ce86', x - 22, y - 2 + shift, 44, 8);
    r(c, '#bb593e', x - 24, y + 6 + shift, 48, 51);
    r(c, '#e48e54', x - 15, y + 7 + shift, 30, 48);
    r(c, '#ffd397', x - 4, y + 12 + shift, 8, 41);
    r(c, '#f1c27d', x - 22, y + 56 + shift, 44, 6);
    r(c, '#704337', x - 2, y + 61 + shift, 4, 15);
    r(c, '#efbd70', x - 4, y + 75 + shift, 8, 9);
}
function menuBoard(c, x, y) {
    outline(c, x, y, 142, 170, '#31544b', '#74503c', 9);
    label(c, 'MÓN NGON', x + 71, y + 40, 17, '#ffe7ab');
    for (let i = 0; i < 4; i++) {
        r(c, '#e4ca8f', x + 18, y + 57 + i * 23, 66 + i % 2 * 8, 3);
        r(c, '#dfba78', x + 101, y + 57 + i * 23, 22, 3);
    }
}
function planter(c, x, y, s = 1) {
    c.save();
    c.translate(x, y);
    c.scale(s, s);
    shadow(c, 0, 2, 33, 10);
    outline(c, -26, -52, 52, 53, '#c5764b', '#754734', 5);
    r(c, '#eaa068', -21, -43, 42, 7);
    r(c, '#446b40', -4, -121, 8, 68);
    for (const [dx, dy, col] of [[-27, -118, '#4d8e59'], [5, -144, '#38774e'], [-12, -162, '#6b9c58'], [13, -116, '#69a368']]) {
        r(c, col, dx, dy, 37, 31);
        r(c, '#376b49', dx + 5, dy + 9, 25, 5);
    }
    c.restore();
}
function bowl(c, x, y, s = 1) {
    c.save();
    c.translate(x, y);
    c.scale(s, s);
    r(c, '#f5f0e1', -17, -5, 34, 12);
    r(c, '#aa5941', -15, 8, 30, 5);
    r(c, '#e0a451', -15, -11, 30, 8);
    r(c, '#6c9a56', -5, -10, 11, 4);
    r(c, '#814939', 16, -18, 3, 17);
    r(c, '#bd7546', 20, -20, 3, 19);
    c.restore();
}
function person(c, x, feet, shirt, hair, t, s = 1, role = 'guest') {
    c.save();
    c.translate(Math.round(x), Math.round(feet + Math.sin(t / 550) * 2));
    c.scale(s, s);
    shadow(c, 0, 0, 20, 8);
    r(c, '#403633', -16, -27, 12, 27);
    r(c, '#403633', 5, -27, 12, 27);
    outline(c, -22, -62, 44, 42, shirt, '#613e36', 4);
    r(c, '#d18a67', -28, -56, 8, 31);
    r(c, '#d18a67', 20, -56, 8, 31);
    r(c, '#5b392e', -23, -109, 46, 44);
    r(c, '#f6bc8d', -19, -103, 38, 36);
    r(c, hair, -21, -110, 42, 13);
    r(c, hair, -20, -99, 7, 15);
    r(c, '#573d33', -10, -87, 4, 4);
    r(c, '#573d33', 9, -87, 4, 4);
    r(c, '#c57b61', -4, -77, 8, 3);
    if (role === 'chef') {
        r(c, '#fff7dd', -24, -128, 48, 20);
        r(c, '#fff7dd', -17, -141, 34, 17);
        r(c, '#ad6a51', -22, -68, 44, 4);
        r(c, '#fff9e8', -12, -53, 24, 30);
    }
    c.restore();
}
function serviceCounter(c, t, level) {
    // Centered across back wall: user requested serving area at upper center.
    // Chef stands behind counter: torso will be occluded by the counter below.
    person(c, -189, 398, '#f1e5ce', '#3c302d', t, 1.05, 'chef');
    outline(c, -216, 346, 432, 155, '#9b513c', '#5e392e', 10);
    r(c, '#d58a53', -206, 358, 412, 26);
    r(c, '#f2bf7e', -213, 336, 426, 27);
    r(c, '#ffe4a8', -204, 334, 408, 8);
    for (let x = -188; x < 188; x += 66) {
        r(c, '#ac6247', x, 397, 6, 85);
        r(c, '#c6794b', x + 5, 405, 42, 72);
    }
    outline(c, -153, 383, 306, 80, '#684b39', '#4b372f', 6);
    label(c, 'QUẦY PHỤC VỤ', 0, 435, 24, '#ffe4ad');
    r(c, '#f4c977', -209, 486, 418, 11);
    if (level >= 2)
        r(c, '#d4b86d', -147, 334, 36, 8);
    bowl(c, 66, 335, 1.3);
    if (level >= 3)
        bowl(c, 132, 337, 1);
    // food warmer + steam
    r(c, '#505d4f', 112, 288, 57, 19);
    r(c, '#e6b875', 117, 285, 46, 6);
    for (let i = 0; i < 3; i++) {
        const phase = (t / 55 + i * 21) % 73;
        r(c, '#fff6df9a', 120 + i * 13, 279 - phase, 6, 10);
    }
}
function diningTable(c, x, y, s, food) {
    c.save();
    c.translate(x, y);
    c.scale(s, s);
    shadow(c, 1, 3, 94, 19);
    // Rectangular frontal tabletop rather than isometric diamond.
    r(c, '#77503b', -74, -56, 148, 78);
    r(c, '#a86648', -63, -29, 18, 72);
    r(c, '#a86648', 45, -29, 18, 72);
    r(c, '#f5c284', -85, -60, 170, 36);
    r(c, '#ffdea3', -77, -58, 154, 9);
    r(c, '#9e5a41', -85, -26, 170, 11);
    // red plastic stools, Vietnamese cafe aesthetic
    for (const dx of [-108, 108]) {
        r(c, '#904d41', dx - 23, -22, 46, 11);
        r(c, '#d66750', dx - 26, -28, 52, 15);
        r(c, '#844239', dx - 18, -10, 8, 40);
        r(c, '#844239', dx + 10, -10, 8, 40);
    }
    if (food) {
        bowl(c, -28, -62, 1);
        bowl(c, 29, -62, 1);
    }
    c.restore();
}
function hangingLight(c, x) {
    r(c, '#4c362d', x - 2, 0, 4, 193);
    r(c, '#57443b', x - 20, 190, 40, 9);
    r(c, '#f1bc68', x - 42, 199, 84, 33);
    r(c, '#f7d999', x - 28, 232, 56, 8);
}
export class RestaurantScene {
    canvas;
    ctx;
    width = 800;
    height = WORLD_HEIGHT;
    constructor(canvas) {
        this.canvas = canvas;
        const context = canvas.getContext('2d', { alpha: false });
        if (!context)
            throw new Error('Canvas2D unsupported');
        this.ctx = context;
        this.resize();
    }
    resize() {
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        this.canvas.width = Math.max(1, Math.round(this.canvas.clientWidth * dpr));
        this.canvas.height = Math.max(1, Math.round(this.canvas.clientHeight * dpr));
        this.width = WORLD_HEIGHT * this.canvas.width / this.canvas.height;
        this.height = WORLD_HEIGHT;
        this.ctx.imageSmoothingEnabled = false;
    }
    render(now, state) {
        const c = this.ctx;
        const half = this.width / 2;
        const scale = this.canvas.height / WORLD_HEIGHT;
        c.setTransform(scale, 0, 0, scale, this.canvas.width / 2, 0);
        wall(c, half);
        tileFloor(c, half);
        // Decoration is placed around the wall; front-facing parallel lines throughout.
        drawWindow(c, -half + 32, 185, Math.max(105, Math.min(210, half - 218)), 223);
        drawWindow(c, half - Math.max(105, Math.min(210, half - 218)) - 32, 185, Math.max(105, Math.min(210, half - 218)), 223);
        hangingLight(c, -Math.min(342, half * .68));
        hangingLight(c, Math.min(342, half * .68));
        lantern(c, -Math.min(235, half * .72), 235, Math.round(Math.sin(now / 1200) * 2));
        lantern(c, Math.min(235, half * .72), 235, Math.round(Math.cos(now / 1200) * 2));
        sign(c, now);
        if (half > 620) {
            menuBoard(c, -520, 247);
            menuBoard(c, 382, 247);
        }
        serviceCounter(c, now, state.kitchenLevel);
        planter(c, -Math.min(340, half - 50), 519, .95);
        planter(c, Math.min(340, half - 50), 519, .95);
        // Furniture draws in painter order from back to front.
        diningTable(c, -Math.min(168, half * .39), 666, .85, true);
        diningTable(c, Math.min(168, half * .39), 731, .83, true);
        person(c, -Math.min(153, half * .36), 631, '#6d9d80', '#3e332b', now, 0.8);
        person(c, Math.min(178, half * .40), 689, '#bc6550', '#3e332b', now + 700, .76);
        if (state.tableLevel >= 2) {
            diningTable(c, -Math.min(155, half * .37), 861, .83, true);
            person(c, -Math.min(190, half * .43), 805, '#6788b2', '#49332e', now + 200, .75);
        }
        if (state.tableLevel >= 3) {
            diningTable(c, Math.min(145, half * .35), 912, .73, true);
        }
        if (half > 700) {
            diningTable(c, -520, 775, .84, true);
            diningTable(c, 520, 745, .85, true);
        }
        // Visual-only visitor; rendered separately from simulated earnings.
        const progress = (now / 4200) % 1;
        const destination = state.tableLevel >= 2 ? -100 : 115;
        const walk = progress < .73 ? progress / .73 : 1;
        const visitorX = (1 - walk) * 0 + walk * destination;
        const visitorY = (1 - walk) * 1055 + walk * 794;
        person(c, visitorX, visitorY, '#dcad68', '#51352f', now * 1.6, .88);
        // Gentle sparkling service feedback visual (no game economy impact)
        if ((now / 1100) % 3 < .5) {
            r(c, '#ffe5a6', 205, 353, 7, 7);
            r(c, '#fff7ca', 209, 346, 3, 22);
        }
    }
}
