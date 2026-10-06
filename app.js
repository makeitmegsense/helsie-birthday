
const $ = s => document.querySelector(s), R = (a, b) => a + Math.random() * (b - a);
// ---- artwork symbols
let p = '', q = '', d = '', m = '', c = '';
for (let i = 0; i < 24; i++)p += `<path d="M0-30C15-46 13-82 0-97C-13-82-15-46 0-30Z" fill="url(#g1)" stroke="#C28E0E" stroke-width="1" transform="rotate(${i * 15})"/>`;
for (let i = 0; i < 16; i++)q += `<path d="M0-26C11-38 10-64 0-74C-10-64-11-38 0-26Z" fill="url(#g2)" transform="rotate(${i * 22.5 + 11})"/>`;
for (let n = 1; n < 120; n++) { let r = 2.9 * Math.sqrt(n); if (r < 32) d += `<circle cx="${r * Math.cos(n * 2.39996)}" cy="${r * Math.sin(n * 2.39996)}" r="1.5" fill="${n % 3 ? '#1f130a' : '#a8814a'}"/>` }
[[14, 60, 19], [11, 42, 17], [8, 24, 15], [5, 8, 13]].forEach(([k, r, s], j) => { for (let i = 0; i < k; i++) { let a = i / k * 6.283 + j; m += `<circle cx="${r * Math.cos(a)}" cy="${r * Math.sin(a)}" r="${s}" fill="${['#F0A21A', '#E9B726', '#D98A00', '#F7C948'][(i + j) % 4]}" stroke="#b86e00" stroke-width=".6"/>` } });
for (let i = 0; i < 8; i++)c += `<path d="M0-8C-26-30-22-70-8-82L0-74L8-82C22-70 26-30 0-8Z" fill="url(#g3)" stroke="#a58bc4" stroke-width="1" transform="rotate(${i * 45})"/>`;
$('#df').innerHTML = `<linearGradient id="g1" x1="0" y1="1" x2="0" y2="0"><stop offset="0" stop-color="#F3D77A"/><stop offset="1" stop-color="#E9B726"/></linearGradient><linearGradient id="g2" x1="0" y1="1" x2="0" y2="0"><stop offset="0" stop-color="#E9B726"/><stop offset="1" stop-color="#D99A00"/></linearGradient><linearGradient id="g3" x1="0" y1="1" x2="0" y2="0"><stop offset="0" stop-color="#E7D9F5"/><stop offset="1" stop-color="#C9B8DA"/></linearGradient><radialGradient id="g4"><stop offset="0" stop-color="#6B4A2B"/><stop offset="1" stop-color="#3D2A17"/></radialGradient>
<linearGradient id="gop" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fff"/><stop offset=".5" stop-color="#bfe9e2"/><stop offset="1" stop-color="#e3c9f0"/></linearGradient><linearGradient id="gt" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ffd0e0"/><stop offset="1" stop-color="#d9578a"/></linearGradient><linearGradient id="gl" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#7d8cf0"/><stop offset="1" stop-color="#3b2a8c"/></linearGradient>
<symbol id="sf" viewBox="-100 -100 200 200" overflow="visible"><circle r="98" fill="#0002" transform="translate(4 6)" opacity=".25"/>${p}${q}<circle r="35" fill="url(#g4)"/>${d}</symbol>
<symbol id="mg" viewBox="-100 -100 200 200" overflow="visible">${m}</symbol>
<symbol id="cs" viewBox="-100 -100 200 200" overflow="visible">${c}<circle r="13" fill="#E9B726"/><circle r="6" fill="#c98f0a"/></symbol>
<symbol id="opal" viewBox="-50 -50 100 100" overflow="visible"><polygon points="0,-42 36,-21 36,21 0,42 -36,21 -36,-21" fill="url(#gop)" stroke="#9bb" stroke-width="2"/><path d="M0-42V42M-36-21L36 21M36-21L-36 21" stroke="#fff" stroke-opacity=".7"/><circle cx="-10" cy="-8" r="4" fill="#f9a8d4" opacity=".7"/></symbol>
<symbol id="tour" viewBox="-50 -50 100 100" overflow="visible"><polygon points="0,-44 40,-10 0,44 -40,-10" fill="url(#gt)" stroke="#b03d6b" stroke-width="2"/><path d="M-40-10H40M0-44L-14-10L0 44L14-10Z" stroke="#fff" stroke-opacity=".6" fill="none"/></symbol>
<symbol id="lapis" viewBox="-50 -50 100 100" overflow="visible"><polygon points="-30,-30 30,-30 44,0 0,44 -44,0" fill="url(#gl)" stroke="#2a1d6b" stroke-width="2"/><path d="M-44 0H44M-30-30L-14 0L0 44L14 0L30-30" stroke="#fff" stroke-opacity=".5" fill="none"/></symbol>
<symbol id="sc" viewBox="-50 -50 100 100" overflow="visible"><path d="M0-38V34M-26 34H26M-36-26H36M-36-26L-48 4H-24ZM36-26L24 4H48Z" stroke="#E9B726" stroke-width="4" fill="none" stroke-linejoin="round" stroke-linecap="round"/></symbol>
<symbol id="mush" viewBox="-50 -50 100 100" overflow="visible"><path d="M-8 6H8L11 40Q0 46-11 40Z" fill="#f6eedc"/><path d="M-42 8Q-40-38 0-40T42 8Q0 18-42 8Z" fill="#d9578a"/><circle cx="-18" cy="-12" r="6" fill="#fff" opacity=".9"/><circle cx="10" cy="-22" r="5" fill="#fff" opacity=".9"/><circle cx="24" cy="-4" r="4" fill="#fff" opacity=".9"/></symbol><symbol id="moon" viewBox="-50 -50 100 100" overflow="visible"><path d="M12-40A40 40 0 1 0 40 22A32 32 0 1 1 12-40Z" fill="#F3D77A" stroke="#C28E0E" stroke-width="2"/></symbol>`;
const ic = (id, v = 100) => `<svg viewBox="-${v} -${v} ${2 * v} ${2 * v}"><use href="#${id}" x="-${v}" y="-${v}" width="${2 * v}" height="${2 * v}"/></svg>`;
// ---- text
const T = (s, f) => { const e = $(s); e && f(e) }; T('#nm', e => e.textContent = C.friend); T('#by', e => e.textContent = C.you); T('#hrs', e => e.textContent = C.hours); T('#fm', e => e.textContent = C.final); T('#sg', e => e.href = C.song); document.title = document.title.replace('Helsie', C.friend);
if ($('#art')) {
    let lv = '', st = '', fl = '';
    [[-78, 1.05], [-58, 1.25], [-38, 1.45], [-18, 1.5], [18, 1.5], [38, 1.45], [58, 1.25], [78, 1.05], [-48, .9], [48, .9]].forEach(([a, s], i) => lv += `<g transform="translate(250 495) rotate(${a}) scale(${s})"><g class="pop sw" style="--d:${.2 + i * .05}s;--t:${5 + i % 3}s"><path d="M0 0C24-34 24-80 0-125C-24-80-24-34 0 0Z" fill="${['#1F4D4A', '#2d6a63', '#7FA8A0'][i % 3]}"/><path d="M0 0V-115" stroke="#DCE8E3" stroke-opacity=".55" stroke-width="2"/></g></g>`);
    const F = [['sf', 250, 215, 215], ['sf', 120, 300, 150], ['sf', 385, 310, 160], ['mg', 165, 105, 100], ['mg', 345, 100, 96], ['cs', 58, 205, 100], ['cs', 445, 205, 104], ['cs', 250, 62, 90], ['opal', 215, 395, 46], ['tour', 292, 400, 44], ['mush', 92, 455, 70], ['mush', 412, 458, 58]];
    F.forEach(([t, x, y, s], i) => { if (i < 8) st += `<path d="M250 500Q${(250 + x) / 2} ${(y + 500) / 2} ${x} ${y}" stroke="#1F4D4A" stroke-width="5" fill="none"/>`; fl += `<g transform="translate(${x} ${y}) scale(${s / 200})"><g class="pop" style="--d:${.5 + i * .13}s"><g class="sw" style="--t:${4 + i % 4}s;--d2:${-i}s"><use href="#${t}" x="-100" y="-100" width="200" height="200"/></g></g></g>` });
    $('#art').innerHTML = `<svg viewBox="0 0 500 520">${st}${lv}${fl}<g transform="translate(450 40)"><use href="#moon" x="-24" y="-24" width="48" height="48"/></g></svg>`;
    const top = $('#top');
    for (let i = 0; i < 14; i++) { let e = document.createElement('i'); e.className = 'ff'; e.style.cssText = `left:${R(3, 97)}%;top:${R(8, 92)}%;--t:${R(4, 9)}s;--x:${R(-30, 30)}px;animation-delay:${-R(0, 8)}s`; top.append(e) }
    for (let i = 0; i < 8; i++) { let e = document.createElement('i'); e.className = 'pt'; e.style.cssText = `left:${R(2, 98)}%;--t:${R(11, 19)}s;--d:${-R(0, 14)}s;--c:${['#E9B726', '#F0A21A', '#C9B8DA'][i % 3]}`; top.append(e) }
    addEventListener('mousemove', e => { $('#art').style.transform = `translate(${(e.clientX / innerWidth - .5) * -16}px,${(e.clientY / innerHeight - .5) * -10}px)` });
}
// ---- modal + petals
const bd = $('#bd') || document.createElement('div'), sh = $('#sh') || document.createElement('div');
function show(h) { sh.innerHTML = '<button class="x" aria-label="Close">×</button>' + h; bd.classList.add('on'); sh.querySelector('.x').focus() }
bd.onclick = e => { if (e.target === bd || e.target.classList.contains('x')) bd.classList.remove('on') }; addEventListener('keydown', e => e.key == 'Escape' && bd.classList.remove('on'));
function burst(x, y, n = 16) { for (let i = 0; i < n; i++) { let e = document.createElement('i'); e.className = 'bp'; e.style.cssText = `left:${x}px;top:${y}px;background:${['#E9B726', '#C9B8DA', '#7FA8A0', '#F0A21A'][i % 4]}`; document.body.append(e); let a = R(0, 6.28), r = R(60, 150); e.animate([{ transform: 'none', opacity: 1 }, { transform: `translate(${Math.cos(a) * r}px,${Math.sin(a) * r + 70}px) rotate(${R(200, 600)}deg)`, opacity: 0 }], { duration: 1200, easing: 'cubic-bezier(.2,.8,.3,1)' }).onfinish = () => e.remove() } }
const mid = el => { let b = el.getBoundingClientRect(); return [b.left + b.width / 2, b.top + b.height / 2] };
T('#go', b => b.onclick = () => { burst(...mid(b), 30); setTimeout(() => location.href = 'reasons.html', 650) });
if ($('#grid')) {
    const opened = new Set; let n = 0, gi = 0, gf = 0;
    for (let i = 0; i < 33; i++) {
        let b = document.createElement('button'); b.className = 'fl';
        if ([8, 19, 27].includes(i)) { let g = C.gems[gi++]; b.classList.add('gem'); b.setAttribute('aria-label', 'Hidden gem'); b.innerHTML = ic(g[0], 50); b.onclick = () => { if (!b.classList.contains('o')) { b.classList.add('o'); gf++ } burst(...mid(b), 28); show(`<small>Secret gem found (${gf} of 3)</small><p>${g[1]}</p>${gf == 3 ? '<p class="hw" style="margin-top:14px">You found all the secrets, of course you did.</p>' : ''}`) } }
        else { let k = n++; b.setAttribute('aria-label', 'Reason ' + (k + 1)); b.innerHTML = ic(['sf', 'mg', 'cs'][k % 3]) + `<i>${k + 1}</i>`; b.onclick = () => { b.classList.add('o'); opened.add(k); $('#prog').textContent = opened.size + ' of 30 found'; $('#pb').style.width = opened.size / 30 * 100 + '%'; burst(...mid(b), 12); show(`<small>Reason ${k + 1}</small><p>${C.reasons[k]}</p>${opened.size == 30 ? '<p class="hw" style="margin-top:16px">You read all 30. That\'s 30 years, 30 reasons, 1 you.</p>' : ''}`) } }
        $('#grid').append(b)
    }
}
if ($('#env')) {
    const cl = ['#e4daf0', '#dcebe6', '#fbefc4'];
    C.env.forEach(([t, msg], i) => {
        let b = document.createElement('button'); b.className = 'env' + (i == 5 ? ' wd' : ''); b.style.cssText = `--c:${cl[i % 3]};--r:${[-1.5, 1.2, -.8, 1.6, -1.2, 0][i]}deg`; b.innerHTML = `<em>${ic(['sf', 'opal', 'tour', 'sc', 'moon', 'sf'][i] == 'sc' ? 'sc' : ['sf', 'opal', 'tour', 'sc', 'moon', 'sf'][i], i % 5 == 3 || i == 4 ? 50 : 100).replace('<svg', '<svg')}</em>${t}`;
        b.onclick = () => { b.classList.add('o'); burst(...mid(b), i == 5 ? 36 : 14); show(`<small>${t}</small><p class="hw" style="font-size:30px;font-weight:500;line-height:1.3">${msg}</p>`) }; $('#env').append(b)
    });
}
if ($('#deck')) {
    C.tarot.forEach(([nu, sy, t, l]) => { let e = document.createElement('div'); e.className = 't'; e.tabIndex = 0; e.innerHTML = `<div class="ti"><div class="ba">${ic('sf')}<p class="hw" style="font-size:24px;margin-top:10px">♎</p></div><div class="fa"><small>${nu}</small>${ic(sy, sy == 'sf' ? 100 : 50)}<h3>${t}</h3><p>${l}</p></div></div>`; e.onclick = () => e.classList.toggle('f'); e.onkeydown = k => (k.key == 'Enter' || k.key == ' ') && e.click(); $('#deck').append(e) });
}
// ---- reveal + counter
const D = Math.max(0, Math.floor((Date.now() - new Date(C.met)) / 864e5));
const io = new IntersectionObserver((es, o) => es.forEach(x => { if (!x.isIntersecting) return; x.target.classList.add('on'); if (x.target.id == 'us') { let t0 = performance.now(); (function f(t) { let k = Math.min(1, (t - t0) / 1600); $('#days').textContent = Math.round(D * k); k < 1 && requestAnimationFrame(f) })(t0) } o.unobserve(x.target) }), { threshold: .1 });
document.querySelectorAll('.rv').forEach(el => io.observe(el));

T('#gar', g => { let h = '';['sf', 'mg', 'cs', 'mush', 'cs', 'mg', 'sf'].forEach((t, i) => { h += `<g transform="translate(${50 + i * 100} 45)"><g class="pop" style="--d:${i * .1}s"><g class="sw" style="--t:${4 + i % 3}s;--d2:${-i}s"><use href="#${t}" x="-34" y="-34" width="68" height="68"/></g></g></g>` }); g.innerHTML = '<svg viewBox="0 0 700 90">' + h + '</svg>' });

// ---- faerie layer: twinkling stars, fireflies that gather where you touch, pixie dust
(() => {
    const cv = document.createElement('canvas'); cv.id = 'fx'; cv.setAttribute('aria-hidden', 'true'); document.body.prepend(cv);
    const x = cv.getContext('2d'), rm = matchMedia('(prefers-reduced-motion:reduce)').matches, sp = document.createElement('canvas'); sp.width = sp.height = 48;
    const s2 = sp.getContext('2d'), g = s2.createRadialGradient(24, 24, 0, 24, 24, 24); g.addColorStop(0, '#fff8d6'); g.addColorStop(.25, '#f3d77acc'); g.addColorStop(1, '#f3d77a00'); s2.fillStyle = g; s2.fillRect(0, 0, 48, 48);
    let W, H, mx = -999, my = -999, t = 0, raf; const fl = [], st = [], tr = [];
    const size = () => { const d = Math.min(devicePixelRatio || 1, 2); W = innerWidth; H = innerHeight; cv.width = W * d; cv.height = H * d; x.setTransform(d, 0, 0, d, 0, 0); x.globalCompositeOperation = 'lighter' }; size(); addEventListener('resize', size);
    for (let i = 0; i < (W < 700 ? 18 : 34); i++)fl.push({ x: R(0, W), y: R(0, H), a: R(0, 6.28), s: R(.15, .45), z: R(10, 26), p: R(0, 6.28) });
    for (let i = 0; i < 60; i++)st.push({ x: R(0, W), y: R(0, H * .6), r: R(.4, 1.3), p: R(0, 6.28) });
    const dust = (px, py, n) => { for (let i = 0; i < n; i++)tr.push({ x: px, y: py, vx: R(-1, 1), vy: R(-1.4, .2), l: 1, z: R(8, 18) }) };
    addEventListener('pointermove', e => { mx = e.clientX; my = e.clientY; if (e.pointerType == 'mouse' && Math.random() < .5) dust(mx, my, 1) }, { passive: true });
    addEventListener('pointerdown', e => { mx = e.clientX; my = e.clientY; dust(mx, my, 10) }, { passive: true });
    addEventListener('pointerup', e => { if (e.pointerType != 'mouse') mx = my = -999 });
    const draw = () => {
        x.clearRect(0, 0, W, H); t += .016; x.fillStyle = '#fff';
        for (const s of st) { x.globalAlpha = .25 + .55 * Math.abs(Math.sin(t * .8 + s.p)); x.beginPath(); x.arc(s.x, s.y, s.r, 0, 6.283); x.fill() }
        for (const f of fl) {
            f.a += R(-.12, .12); const dx = mx - f.x, dy = my - f.y, dd = Math.hypot(dx, dy) || 1; if (dd < 220) { f.x += dx / dd * .7; f.y += dy / dd * .7 }
            f.x += Math.cos(f.a) * f.s; f.y += Math.sin(f.a) * f.s - .05; if (f.x < -30) f.x = W + 30; if (f.x > W + 30) f.x = -30; if (f.y < -30) f.y = H + 30; if (f.y > H + 30) f.y = -30;
            x.globalAlpha = .35 + .65 * Math.abs(Math.sin(t * 1.3 + f.p)); x.drawImage(sp, f.x - f.z, f.y - f.z, f.z * 2, f.z * 2)
        }
        for (let i = tr.length - 1; i >= 0; i--) { const p = tr[i]; p.vy += .03; p.x += p.vx; p.y += p.vy; p.l -= .02; if (p.l <= 0) { tr.splice(i, 1); continue } x.globalAlpha = p.l; x.drawImage(sp, p.x - p.z * p.l, p.y - p.z * p.l, p.z * 2 * p.l, p.z * 2 * p.l) }
        x.globalAlpha = 1
    };
    const run = () => { cancelAnimationFrame(raf); const f = () => { draw(); raf = requestAnimationFrame(f) }; f() };
    if (rm) draw(); else { run(); document.addEventListener('visibilitychange', () => document.hidden ? cancelAnimationFrame(raf) : run()) }
})();
