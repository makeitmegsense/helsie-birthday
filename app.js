
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
<symbol id="sun" viewBox="-50 -50 100 100" overflow="visible">
    <!-- outer rays -->
    <path
        d="M0-46L6-31L0-34L-6-31Z
           M32-32L25-18L22-23L20-28Z
           M46 0L31 6L34 0L31-6Z
           M32 32L20 28L22 23L25 18Z
           M0 46L-6 31L0 34L6 31Z
           M-32 32L-25 18L-22 23L-20 28Z
           M-46 0L-31-6L-34 0L-31 6Z
           M-32-32L-20-28L-22-23L-25-18Z"
        fill="#E9B726"
        stroke="#C28E0E"
        stroke-width="1.5"
        stroke-linejoin="round"
    />

    <!-- sun -->
    <circle
        r="23"
        fill="#F3D77A"
        stroke="#C28E0E"
        stroke-width="2"
    />

    <!-- inner glow -->
    <circle
        cx="-6"
        cy="-7"
        r="7"
        fill="#fff"
        opacity=".22"
    />

    <!-- little centre detail -->
    <circle
        cx="5"
        cy="5"
        r="2"
        fill="#E9B726"
        opacity=".55"
    />
</symbol>
<!-- =========================
     LITTLE THINGS ILLUSTRATIONS
     ========================= -->

<symbol id="candle" viewBox="-50 -50 100 100" overflow="visible">

    <!-- flame -->
    <path
        d="M0-39
           C-8-30 -9-21 0-15
           C9-21 8-30 0-39Z"
        fill="#E9B726"
        stroke="#B87924"
        stroke-width="2"
        stroke-linejoin="round"
    />

    <!-- glow -->
    <circle
        cx="0"
        cy="-20"
        r="13"
        fill="#F3D77A"
        opacity=".22"
    />

    <!-- candle -->
    <rect
        x="-16"
        y="-16"
        width="32"
        height="48"
        rx="5"
        fill="#F5E7C8"
        stroke="#5B4655"
        stroke-width="2.5"
    />

    <!-- wax details -->
    <path
        d="M-10-10 C-6-4 -8 1 -10 5
           M8-8 C4-2 7 3 9 7"
        fill="none"
        stroke="#D8C5A5"
        stroke-width="2"
        stroke-linecap="round"
    />

    <!-- wick -->
    <path
        d="M0-16V-21"
        stroke="#5B4655"
        stroke-width="2"
        stroke-linecap="round"
    />

    <!-- base -->
    <ellipse
        cx="0"
        cy="32"
        rx="21"
        ry="5"
        fill="#D9C7A7"
        stroke="#5B4655"
        stroke-width="2"
    />

</symbol>


<symbol id="coffee" viewBox="-50 -50 100 100" overflow="visible">

    <!-- steam -->
    <path
        d="M-13-28
           C-20-36 -8-39 -14-47
           M3-28
           C-4-36 8-39 2-47
           M19-28
           C12-36 24-39 18-47"
        fill="none"
        stroke="#A98A83"
        stroke-width="2.5"
        stroke-linecap="round"
    />

    <!-- cup -->
    <path
        d="M-28-22
           H25
           V17
           C25 27 17 33 0 33
           C-17 33 -28 27 -28 17Z"
        fill="#F2D6B3"
        stroke="#5B4655"
        stroke-width="2.5"
    />

    <!-- coffee -->
    <ellipse
        cx="-1"
        cy="-22"
        rx="26"
        ry="7"
        fill="#8A5B45"
        stroke="#5B4655"
        stroke-width="2.5"
    />

    <!-- coffee highlight -->
    <ellipse
        cx="-7"
        cy="-24"
        rx="10"
        ry="2.5"
        fill="#B98767"
        opacity=".75"
    />

    <!-- handle -->
    <path
        d="M25-11
           C45-13 45 18 25 19"
        fill="none"
        stroke="#5B4655"
        stroke-width="5"
        stroke-linecap="round"
    />

    <!-- little heart -->
    <path
        d="M-7 3
           C-12-3 -21 3 -7 13
           C7 3 -2-3 -7 3Z"
        fill="#C58A9D"
        opacity=".75"
    />

</symbol>


<symbol id="phone" viewBox="-50 -50 100 100" overflow="visible">

    <!-- phone -->
    <rect
        x="-29"
        y="-43"
        width="58"
        height="86"
        rx="9"
        fill="#E7D8E5"
        stroke="#5B4655"
        stroke-width="2.8"
    />

    <!-- screen -->
    <rect
        x="-22"
        y="-27"
        width="44"
        height="51"
        rx="4"
        fill="#F8F0E5"
        stroke="#B59AAE"
        stroke-width="1.5"
    />

    <!-- camera -->
    <circle
        cx="0"
        cy="-35"
        r="3"
        fill="#5B4655"
    />

    <!-- selca placeholder -->
    <circle
        cx="0"
        cy="-6"
        r="10"
        fill="#F1C7B5"
    />

    <path
        d="M-15 15
           C-11 4 11 4 15 15"
        fill="#B78BA5"
    />

    <!-- little hearts -->
    <path
        d="M-15-15
           C-19-20 -26-15 -15-7
           C-4-15 -11-20 -15-15Z"
        fill="#C58A9D"
    />

    <path
        d="M14-5
           C11-9 6-5 14 1
           C22-5 17-9 14-5Z"
        fill="#E9B726"
    />

    <!-- home button -->
    <circle
        cx="0"
        cy="34"
        r="3"
        fill="#B59AAE"
    />

</symbol>


<symbol id="music" viewBox="-50 -50 100 100" overflow="visible">

    <!-- vinyl -->
    <circle
        cx="-8"
        cy="7"
        r="29"
        fill="#4D4050"
        stroke="#302938"
        stroke-width="2.5"
    />

    <!-- grooves -->
    <circle
        cx="-8"
        cy="7"
        r="21"
        fill="none"
        stroke="#746476"
        stroke-width="1.5"
    />

    <circle
        cx="-8"
        cy="7"
        r="13"
        fill="none"
        stroke="#746476"
        stroke-width="1.5"
    />

    <!-- label -->
    <circle
        cx="-8"
        cy="7"
        r="6"
        fill="#E9B726"
    />

    <circle
        cx="-8"
        cy="7"
        r="2"
        fill="#F8F0E5"
    />

    <!-- music note -->
    <path
        d="M19-30V12
           M19-30L37-35V3"
        fill="none"
        stroke="#C58A9D"
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
    />

    <ellipse
        cx="10"
        cy="16"
        rx="10"
        ry="6"
        fill="#C58A9D"
        transform="rotate(-12 10 16)"
    />

    <ellipse
        cx="37"
        cy="7"
        rx="9"
        ry="5.5"
        fill="#C58A9D"
        transform="rotate(-12 37 7)"
    />

</symbol>


<symbol id="treats" viewBox="-50 -50 100 100" overflow="visible">

    <!-- shopping bag -->
    <path
        d="M-43-18
           H-4
           L-8 34
           H-39Z"
        fill="#D9A6B8"
        stroke="#5B4655"
        stroke-width="2.5"
        stroke-linejoin="round"
    />

    <!-- handles -->
    <path
        d="M-35-18
           C-35-36 -13-36 -12-18"
        fill="none"
        stroke="#5B4655"
        stroke-width="2.5"
    />

    <!-- cupcake -->
    <path
        d="M12 0
           L39 0
           L34 28
           H17Z"
        fill="#E8B7A7"
        stroke="#5B4655"
        stroke-width="2.2"
    />

    <!-- frosting -->
    <path
        d="M10 0
           C10-12 19-16 25-11
           C29-21 43-15 42-5
           C42 1 37 4 31 4
           H16
           C12 4 10 2 10 0Z"
        fill="#F5E7C8"
        stroke="#5B4655"
        stroke-width="2.2"
    />

    <!-- cherry -->
    <circle
        cx="29"
        cy="-16"
        r="4"
        fill="#B85D68"
    />

    <path
        d="M29-20 C31-27 35-28 38-29"
        fill="none"
        stroke="#6E7E58"
        stroke-width="2"
        stroke-linecap="round"
    />

</symbol>


<symbol id="chat" viewBox="-50 -50 100 100" overflow="visible">

    <!-- back bubble -->
    <path
        d="M-39-25
           H8
           C15-25 20-19 20-12
           V7
           C20 14 15 19 8 19
           H-14
           L-28 31
           V19
           H-29
           C-36 19-41 14-41 7
           V-13
           C-41-20-36-25-29-25Z"
        fill="#D9A6B8"
        stroke="#5B4655"
        stroke-width="2.5"
    />

    <!-- front bubble -->
    <path
        d="M-2-4
           H30
           C37-4 42 1 42 8
           V24
           C42 31 37 36 30 36
           H17
           L7 45
           V36
           H-2
           C-9 36-14 31-14 24
           V8
           C-14 1-9-4-2-4Z"
        fill="#F2D6B3"
        stroke="#5B4655"
        stroke-width="2.5"
    />

    <!-- dots -->
    <circle cx="-23" cy="-4" r="3" fill="#5B4655"/>
    <circle cx="-12" cy="-4" r="3" fill="#5B4655"/>
    <circle cx="-1" cy="-4" r="3" fill="#5B4655"/>

    <circle cx="0" cy="14" r="3" fill="#5B4655"/>
    <circle cx="11" cy="14" r="3" fill="#5B4655"/>
    <circle cx="22" cy="14" r="3" fill="#5B4655"/>

</symbol>


<symbol id="cat" viewBox="-50 -50 100 100" overflow="visible">

    <!-- ears -->
    <path
        d="M-31-21 L-27-43 L-10-30
           M10-30 L27-43 L31-21"
        fill="#D8B7A4"
        stroke="#5B4655"
        stroke-width="2.5"
        stroke-linejoin="round"
    />

    <!-- head -->
    <path
        d="M-32-20
           C-35 7 -20 28 0 28
           C20 28 35 7 32-20
           C22-31 11-34 0-34
           C-11-34-22-31-32-20Z"
        fill="#D8B7A4"
        stroke="#5B4655"
        stroke-width="2.5"
    />

    <!-- eyes -->
    <path
        d="M-19-8 L-9-5
           M9-5 L19-8"
        fill="none"
        stroke="#5B4655"
        stroke-width="3"
        stroke-linecap="round"
    />

    <!-- grumpy brows -->
    <path
        d="M-20-16 L-9-19
           M9-19 L20-16"
        fill="none"
        stroke="#5B4655"
        stroke-width="2.5"
        stroke-linecap="round"
    />

    <!-- nose -->
    <path
        d="M-4 3 Q0 7 4 3 Q0 9 -4 3Z"
        fill="#C58A9D"
    />

    <!-- mouth -->
    <path
        d="M0 8 V12
           M0 12 L-6 15
           M0 12 L6 15"
        fill="none"
        stroke="#5B4655"
        stroke-width="2"
        stroke-linecap="round"
    />

    <!-- whiskers -->
    <path
        d="M-17 5 L-38 1
           M-17 11 L-39 12
           M17 5 L38 1
           M17 11 L39 12"
        fill="none"
        stroke="#5B4655"
        stroke-width="1.8"
        stroke-linecap="round"
    />

</symbol>


<symbol id="shopping" viewBox="-50 -50 100 100" overflow="visible">

    <!-- bag -->
    <path
        d="M-31-14
           H31
           L25 36
           H-25Z"
        fill="#E7D8E5"
        stroke="#5B4655"
        stroke-width="2.8"
        stroke-linejoin="round"
    />

    <!-- handles -->
    <path
        d="M-20-14
           C-20-37 20-37 20-14"
        fill="none"
        stroke="#5B4655"
        stroke-width="3"
        stroke-linecap="round"
    />

    <!-- tissue paper -->
    <path
        d="M-23-14
           L-31-29
           L-20-23
           L-12-34
           L-3-22
           L7-34
           L14-22
           L25-29
           L20-14Z"
        fill="#F3D77A"
        opacity=".9"
    />

    <!-- little star -->
    <path
        d="M0-2
           L4 7
           L14 8
           L6 14
           L9 24
           L0 18
           L-9 24
           L-6 14
           L-14 8
           L-4 7Z"
        fill="#C58A9D"
    />

</symbol>
<symbol id="mg" viewBox="-100 -100 200 200" overflow="visible">${m}</symbol>
<symbol id="cs" viewBox="-100 -100 200 200" overflow="visible">${c}<circle r="13" fill="#E9B726"/><circle r="6" fill="#c98f0a"/></symbol>
<symbol id="opal" viewBox="-50 -50 100 100" overflow="visible"><polygon points="0,-42 36,-21 36,21 0,42 -36,21 -36,-21" fill="url(#gop)" stroke="#9bb" stroke-width="2"/><path d="M0-42V42M-36-21L36 21M36-21L-36 21" stroke="#fff" stroke-opacity=".7"/><circle cx="-10" cy="-8" r="4" fill="#f9a8d4" opacity=".7"/></symbol>
<symbol id="tour" viewBox="-50 -50 100 100" overflow="visible"><polygon points="0,-44 40,-10 0,44 -40,-10" fill="url(#gt)" stroke="#b03d6b" stroke-width="2"/><path d="M-40-10H40M0-44L-14-10L0 44L14-10Z" stroke="#fff" stroke-opacity=".6" fill="none"/></symbol>
<symbol id="lapis" viewBox="-50 -50 100 100" overflow="visible"><polygon points="-30,-30 30,-30 44,0 0,44 -44,0" fill="url(#gl)" stroke="#2a1d6b" stroke-width="2"/><path d="M-44 0H44M-30-30L-14 0L0 44L14 0L30-30" stroke="#fff" stroke-opacity=".5" fill="none"/></symbol>
<symbol id="sc" viewBox="-50 -50 100 100" overflow="visible"><path d="M0-38V34M-26 34H26M-36-26H36M-36-26L-48 4H-24ZM36-26L24 4H48Z" stroke="#E9B726" stroke-width="4" fill="none" stroke-linejoin="round" stroke-linecap="round"/></symbol>
<symbol id="mush" viewBox="-50 -50 100 100" overflow="visible"><path d="M-8 6H8L11 40Q0 46-11 40Z" fill="#f6eedc"/><path d="M-42 8Q-40-38 0-40T42 8Q0 18-42 8Z" fill="#d9578a"/><circle cx="-18" cy="-12" r="6" fill="#fff" opacity=".9"/><circle cx="10" cy="-22" r="5" fill="#fff" opacity=".9"/><circle cx="24" cy="-4" r="4" fill="#fff" opacity=".9"/></symbol><symbol id="moon" viewBox="-50 -50 100 100" overflow="visible"><path d="M12-40A40 40 0 1 0 40 22A32 32 0 1 1 12-40Z" fill="#F3D77A" stroke="#C28E0E" stroke-width="2"/></symbol>`;
const ic = (id, v = 100) => `<svg viewBox="-${v} -${v} ${2 * v} ${2 * v}"><use href="#${id}" x="-${v}" y="-${v}" width="${2 * v}" height="${2 * v}"/></svg>`;
// ---- text
const T = (s, f) => { const e = $(s); e && f(e) }; T('#nm', e => e.textContent = C.friend); T('#by', e => e.textContent = C.you); T('#hrs', e => e.textContent = C.hours); T('#kilometres', e => e.textContent = C.kilometres); T('#fm', e => e.textContent = C.final); T('#sg', e => e.href = C.song); document.title = document.title.replace('Helsie', C.friend);
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
/* =========================================================
   HELSIE ARCANA — TAROT DECK
   ========================================================= */


/* ---------------------------------------------------------
   LIBRA SVG
   --------------------------------------------------------- */

$('#df').insertAdjacentHTML('beforeend', `

    <symbol
        id="libra"
        viewBox="0 0 100 100"
        overflow="visible">

        <!-- central pillar -->

        <path
            d="M50 24 V76"
            fill="none"
            stroke="#F3D77A"
            stroke-width="2.8"
            stroke-linecap="round"
        />

        <!-- top ornament -->

        <path
            d="M43 24 Q50 17 57 24"
            fill="none"
            stroke="#F3D77A"
            stroke-width="2.8"
            stroke-linecap="round"
        />

        <circle
            cx="50"
            cy="17"
            r="2.5"
            fill="#F3D77A"
        />


        <!-- balance beam -->

        <path
            d="M25 36 Q50 31 75 36"
            fill="none"
            stroke="#F3D77A"
            stroke-width="2.8"
            stroke-linecap="round"
        />


        <!-- left suspension -->

        <path
            d="M25 36 L18 55"
            fill="none"
            stroke="#F3D77A"
            stroke-width="2.4"
            stroke-linecap="round"
        />

        <path
            d="M25 36 L32 55"
            fill="none"
            stroke="#F3D77A"
            stroke-width="2.4"
            stroke-linecap="round"
        />


        <!-- right suspension -->

        <path
            d="M75 36 L68 55"
            fill="none"
            stroke="#F3D77A"
            stroke-width="2.4"
            stroke-linecap="round"
        />

        <path
            d="M75 36 L82 55"
            fill="none"
            stroke="#F3D77A"
            stroke-width="2.4"
            stroke-linecap="round"
        />


        <!-- left bowl -->

        <path
            d="M13 55 Q25 67 37 55"
            fill="none"
            stroke="#F3D77A"
            stroke-width="2.8"
            stroke-linecap="round"
        />

        <path
            d="M13 55 H37"
            fill="none"
            stroke="#F3D77A"
            stroke-width="2.8"
            stroke-linecap="round"
        />


        <!-- right bowl -->

        <path
            d="M63 55 Q75 67 87 55"
            fill="none"
            stroke="#F3D77A"
            stroke-width="2.8"
            stroke-linecap="round"
        />

        <path
            d="M63 55 H87"
            fill="none"
            stroke="#F3D77A"
            stroke-width="2.8"
            stroke-linecap="round"
        />


        <!-- base -->

        <path
            d="M36 76 H64"
            fill="none"
            stroke="#F3D77A"
            stroke-width="2.8"
            stroke-linecap="round"
        />

        <path
            d="M41 82 H59"
            fill="none"
            stroke="#F3D77A"
            stroke-width="2.8"
            stroke-linecap="round"
        />


        <!-- tiny stars -->

        <circle
            cx="10"
            cy="31"
            r="1.4"
            fill="#F3D77A"
        />

        <circle
            cx="90"
            cy="31"
            r="1.4"
            fill="#F3D77A"
        />

        <circle
            cx="18"
            cy="77"
            r="1"
            fill="#F3D77A"
        />

        <circle
            cx="82"
            cy="77"
            r="1"
            fill="#F3D77A"
        />

    </symbol>

`);


/* ---------------------------------------------------------
   BUILD THE TAROT DECK
   --------------------------------------------------------- */

if ($('#deck')) {

    C.tarot.forEach(([nu, sy, t, l], i) => {

        const e = document.createElement('div');

        e.className = 't';

        e.tabIndex = 0;

        e.setAttribute(
            'role',
            'button'
        );

        e.setAttribute(
            'aria-label',
            `Tarot card ${i + 1}. Click to reveal.`
        );


        e.innerHTML = `

            <div class="ti">


                <!-- =====================================
                     CARD BACK
                     ===================================== -->

                <div class="ba">


                    <!-- corner ornaments -->

                    <div class="tarot-corner top-left">
                        ✦
                    </div>

                    <div class="tarot-corner top-right">
                        ✦
                    </div>

                    <div class="tarot-corner bottom-left">
                        ✦
                    </div>

                    <div class="tarot-corner bottom-right">
                        ✦
                    </div>


                    <!-- constellation stars -->

                    <div class="tarot-stars">

                        <span class="star s1">✦</span>
                        <span class="star s2">✧</span>
                        <span class="star s3">·</span>
                        <span class="star s4">✦</span>
                        <span class="star s5">✧</span>
                        <span class="star s6">·</span>
                        <span class="star s7">✦</span>
                        <span class="star s8">✧</span>

                    </div>


                    <!-- celestial orbit -->

                    <div class="tarot-orbit outer-orbit"></div>

                    <div class="tarot-orbit inner-orbit"></div>


                    <!-- central celestial emblem -->

                    <div class="tarot-emblem">


                        <div class="emblem-rays">

                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>

                        </div>


                        <div class="emblem-art">

                            ${ic('sf', 82)}

                        </div>


                        <div class="emblem-zodiac">

                            ${ic('libra', 38)}

                        </div>


                    </div>


                    <!-- moons -->

                    <div class="tarot-moon moon-left">
                        ☾
                    </div>

                    <div class="tarot-moon moon-right">
                        ☽
                    </div>


                    <!-- deck title -->

                    <div class="tarot-back-title">

                        <span>
                            THE
                        </span>

                        <strong>
                            HELSIE
                        </strong>

                        <span>
                            ARCANA
                        </span>

                    </div>


                    <!-- card number -->

                    <div class="tarot-back-number">

                        ${String(i + 1).padStart(2, '0')}

                    </div>


                </div>


                <!-- =====================================
                     CARD FRONT
                     ===================================== -->

                <div class="fa">


                    <div class="tarot-front-border"></div>


                    <!-- corners -->

                    <div class="front-corner top-left">
                        ✦
                    </div>

                    <div class="front-corner top-right">
                        ✦
                    </div>

                    <div class="front-corner bottom-left">
                        ✦
                    </div>

                    <div class="front-corner bottom-right">
                        ✦
                    </div>


                    <!-- card number -->

                    <div class="tarot-number">

                        ${nu}

                    </div>


                    <!-- celestial divider -->

                    <div class="tarot-front-stars">

                        <span>✧</span>
                        <span>·</span>
                        <span>✦</span>
                        <span>·</span>
                        <span>✧</span>

                    </div>


                    <!-- artwork -->

                    <div class="tarot-art">

                        <div class="art-halo"></div>

                        ${ic(
                            sy,
                            sy === 'sf' ? 105 : 65
                        )}

                    </div>


                    <!-- title -->

                    <div class="tarot-title">

                        ${t}

                    </div>


                    <!-- ornamental divider -->

                    <div class="tarot-divider">

                        <span>✦</span>

                        <i></i>

                        <span>✦</span>

                    </div>


                    <!-- interpretation -->

                    <p class="tarot-message">

                        ${l}

                    </p>


                    <!-- footer -->

                    <div class="tarot-front-footer">

                        <span class="footer-libra">

                            ${ic('libra', 22)}

                        </span>

                        <span>✧</span>

                        <span>☽</span>

                    </div>


                </div>

            </div>

        `;


        /* ---------------------------------------------
           FLIP
           --------------------------------------------- */

        e.onclick = () => {

            const wasFlipped =
                e.classList.contains('f');

            e.classList.toggle('f');


            if (!wasFlipped) {

                burst(
                    ...mid(e),
                    18
                );

                e.setAttribute(
                    'aria-label',
                    `Tarot card ${i + 1}. Revealed.`
                );

            }

        };


        /* ---------------------------------------------
           KEYBOARD ACCESS
           --------------------------------------------- */

        e.onkeydown = k => {

            if (
                k.key === 'Enter' ||
                k.key === ' '
            ) {

                k.preventDefault();

                e.click();

            }

        };


        $('#deck').append(e);

    });

}
// ---- reveal + counter
// ---- reveal + friendship counter

const startDate = new Date(C.met + "T00:00:00");

function updateFriendshipCounter() {

    const now = new Date();

    // Exact elapsed time
    const difference = Math.max(0, now - startDate);

    const totalMinutes = Math.floor(difference / (1000 * 60));
    const totalHours = Math.floor(difference / (1000 * 60 * 60));
    const totalDays = Math.floor(difference / (1000 * 60 * 60 * 24));

    // Calendar-based years / months / days
    let years = now.getFullYear() - startDate.getFullYear();
    let months = now.getMonth() - startDate.getMonth();
    let days = now.getDate() - startDate.getDate();

    if (days < 0) {
        months--;

        const previousMonth = new Date(
            now.getFullYear(),
            now.getMonth(),
            0
        );

        days += previousMonth.getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    // Pretty calendar version
    T('#years', e => e.textContent = years);
    T('#months', e => e.textContent = months);
    T('#remaining-days', e => e.textContent = days);

    // Total elapsed time
    T('#total-days', e => e.textContent = totalDays.toLocaleString());
    T('#total-hours', e => e.textContent = totalHours.toLocaleString());
    T('#total-minutes', e => e.textContent = totalMinutes.toLocaleString());
}


// Initial calculation
updateFriendshipCounter();

// Keep it updated every minute
setInterval(updateFriendshipCounter, 60 * 1000);


// Reveal animations
const io = new IntersectionObserver((es, o) => es.forEach(x => {

    if (!x.isIntersecting) return;

    x.target.classList.add('on');

    if (x.target.id == 'us') {

        // Small animation when the friendship card enters the screen
        const targets = [
            '#years',
            '#months',
            '#remaining-days',
            '#total-days',
            '#total-hours',
            '#total-minutes'
        ];

        targets.forEach(selector => {
            const el = $(selector);

            if (el) {
                el.animate(
                    [
                        {
                            opacity: 0,
                            transform: 'translateY(8px)'
                        },
                        {
                            opacity: 1,
                            transform: 'translateY(0)'
                        }
                    ],
                    {
                        duration: 700,
                        easing: 'ease-out',
                        fill: 'forwards'
                    }
                );
            }
        });
    }

    o.unobserve(x.target);

}), { threshold: .1 });


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
