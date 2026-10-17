// Dựng 2 banner cho slider trang chủ (slide 2–3) từ HTML/CSS rồi chụp thành JPG.
// Chạy: node scripts/banners.mjs  → src/assets/slider/<ten>-desktop.jpg (2400×1000) và -mobile.jpg (750×1080)
// Bố cục theo mẫu betaviet.vn, màu theo thương hiệu (xanh lá + trắng). Sửa chữ/ảnh trong từng template rồi chạy lại.
import { chromium } from 'playwright';
import { mkdirSync, writeFileSync, rmSync } from 'node:fs';
import { pathToFileURL } from 'node:url';
import { company } from '../src/data/company.ts';

const root = process.cwd();
const asset = (p) => pathToFileURL(`${root}/src/assets/${p}`).href;
const out = `${root}/src/assets/slider`;
mkdirSync(out, { recursive: true });

const phone =
  'M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z';
const hotline = `<div class="hot"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="${phone}"/></svg>Hotline / Zalo <b>${company.phoneDisplay}</b></div>`;
const logo = `<span class="logo"><img src="${asset('logo-ngang.png')}" alt=""></span>`;

const base = `
*{box-sizing:border-box;margin:0;padding:0}
html,body{width:100%;height:100%;overflow:hidden}
body{font-family:'Be Vietnam Pro',sans-serif;color:#fff;background:#093f1f;position:relative}
.bg{position:absolute;inset:0;background:var(--img) var(--pos)/cover no-repeat}
.logo{position:absolute;top:22px;right:28px;background:#fff;border-radius:12px;padding:8px 14px;box-shadow:0 8px 24px rgba(0,0,0,.25)}
.logo img{height:40px;display:block}
.hot{position:absolute;left:28px;bottom:22px;display:flex;align-items:center;gap:8px;font-size:14px;background:rgba(9,63,31,.75);border:1px solid rgba(255,255,255,.25);border-radius:999px;padding:7px 14px}
.hot b{font-size:17px}
/* Chữ trắng nổi khối xanh (thay hiệu ứng chữ vàng của mẫu) */
.emboss{padding:.18em .04em .06em;background:linear-gradient(180deg,#fff 40%,#d6f0db 75%,#a9dcb2);-webkit-background-clip:text;background-clip:text;color:transparent;
  filter:drop-shadow(0 2px 0 #178a3e) drop-shadow(0 4px 0 #0d5a2c) drop-shadow(0 10px 18px rgba(0,0,0,.45))}
.bokeh{position:absolute;border-radius:50%;background:radial-gradient(circle,rgba(236,247,238,.55),rgba(236,247,238,0) 70%)}`;

// ---------- Slide 2: thương hiệu (mẫu "15 năm") ----------
const brand = {
  name: 'thuong-hieu',
  css: `
.bg{--img:url('${asset('anh-dich-vu/noi-that-hang-muc/01.jpg')}');--pos:30% 40%}
.glow{position:absolute;inset:0}
.values{position:absolute;right:64px;top:70px;width:420px;height:300px}
.values li{position:absolute;list-style:none;width:150px;height:150px;border-radius:50%;display:flex;align-items:center;justify-content:center;text-align:center;
  background:radial-gradient(circle at 35% 30%,#fff,#ecf7ee 60%,#cfe9d4);color:#0d5a2c;font-weight:800;font-size:17px;line-height:1.25;text-transform:uppercase;
  box-shadow:0 0 0 6px rgba(61,190,58,.35),0 0 28px 6px rgba(61,190,58,.45),0 14px 30px rgba(0,0,0,.35)}
.values li:nth-child(1){left:0;top:0}.values li:nth-child(2){left:150px;top:120px}.values li:nth-child(3){left:290px;top:10px}
.years{position:absolute;left:56px;bottom:92px;display:flex;align-items:flex-end;gap:14px}
.years .num{font-size:168px;line-height:.8;font-weight:900;letter-spacing:-.04em}
.years .lbl{padding-bottom:6px;font-weight:800;text-transform:uppercase;font-size:22px;line-height:1.15;text-shadow:0 2px 10px rgba(0,0,0,.4)}
.years .lbl span{display:block;font-size:15px;font-weight:600;color:#cfe9d4;letter-spacing:.08em}
.slogan{position:absolute;left:600px;bottom:100px;font-family:'Dancing Script',cursive;font-size:48px;font-weight:700;color:#fff;
  text-shadow:0 0 18px rgba(61,190,58,.8),0 4px 14px rgba(0,0,0,.5);white-space:nowrap}
@media (max-width:600px){
  .bg{--pos:35% 30%}
  .logo{top:16px;right:auto;left:16px}.logo img{height:30px}
  .values{right:auto;left:16px;top:auto;bottom:250px;width:auto;height:auto;display:flex;gap:10px}
  .values li{position:static;width:106px;height:106px;font-size:12px}
  .years{left:20px;bottom:140px}.years .num{font-size:96px}.years .lbl{font-size:15px}.years .lbl span{font-size:11px}
  .slogan{left:20px;right:auto;bottom:98px;font-size:29px}
  .hot,.glow{display:none}
}`,
  html: `
<div class="bg"></div>
<span class="bokeh" style="width:120px;height:120px;left:560px;top:250px"></span>
<span class="bokeh" style="width:70px;height:70px;left:120px;top:280px"></span>
<span class="bokeh" style="width:90px;height:90px;right:430px;top:20px"></span>
<svg class="glow" viewBox="0 0 1200 500" preserveAspectRatio="none" fill="none">
  <defs><filter id="b"><feGaussianBlur stdDeviation="3"/></filter>
  <linearGradient id="g" x1="0" x2="1"><stop offset="0" stop-color="#3dbe3a" stop-opacity="0"/><stop offset=".35" stop-color="#ecf7ee"/><stop offset="1" stop-color="#3dbe3a"/></linearGradient></defs>
  <path d="M-20 300 C 300 420, 700 380, 1220 250" stroke="url(#g)" stroke-width="6" filter="url(#b)"/>
  <path d="M-20 300 C 300 420, 700 380, 1220 250" stroke="#fff" stroke-width="1.5"/>
  <path d="M760 145 C 840 230, 900 260, 1000 205 S 1120 120, 1200 90" stroke="#ecf7ee" stroke-width="2" opacity=".8"/>
</svg>
<ul class="values">${['Báo giá<br>minh bạch', 'Thi công<br>tận tâm', 'Bàn giao<br>đúng hẹn'].map((v) => `<li>${v}</li>`).join('')}</ul>
<div class="years"><span class="num emboss">10+</span><span class="lbl">Năm kinh nghiệm<span>của đội ngũ Gia Khánh</span></span></div>
<p class="slogan">${company.slogan}</p>
${hotline}`,
};

// ---------- Slide 3: cải tạo nhà cũ (mẫu "Cải tạo nhà cũ – hãy lựa chọn") ----------
const renovate = {
  name: 'cai-tao',
  css: `
/* Ảnh nền tạo bằng Stitch (AI), minh họa – không phải công trình thật */
.bg{--img:url('${asset('slider/nen-cai-tao-stitch.jpg')}');--pos:center 55%}
.shade{position:absolute;inset:0;background:radial-gradient(55% 60% at 50% 48%,rgba(9,63,31,.42),rgba(9,63,31,0) 80%),linear-gradient(180deg,rgba(0,0,0,0) 60%,rgba(9,63,31,.42))}
.divider{position:absolute;left:50%;top:0;bottom:0;width:4px;margin-left:-2px;background:#fff;box-shadow:0 0 18px rgba(61,190,58,.9)}
.center{position:absolute;inset:0 0 40px;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center}
h1{font-size:94px;line-height:1;font-weight:900;text-transform:uppercase;letter-spacing:-.01em}
.ribbon{margin-top:22px;position:relative;background:#fff;color:#0d5a2c;font-weight:900;font-size:40px;text-transform:uppercase;padding:12px 44px;border-radius:4px;
  box-shadow:0 0 0 4px #3dbe3a,0 14px 30px rgba(0,0,0,.4)}
.issues{margin-top:22px;font-size:20px;font-weight:600;letter-spacing:.02em;text-shadow:0 2px 10px rgba(0,0,0,.6)}
.tag{position:absolute;top:30px;padding:7px 16px;border-radius:999px;font-size:15px;font-weight:800;text-transform:uppercase;box-shadow:0 6px 16px rgba(0,0,0,.3)}
.tag.l{left:calc(50% - 170px);background:rgba(26,36,51,.85)}.tag.r{left:calc(50% + 24px);background:#178a3e}
.badge{position:absolute;top:20px;right:24px;width:128px;height:128px;border-radius:50%;border:2px dashed #fff;display:flex;flex-direction:column;align-items:center;justify-content:center;
  background:rgba(13,90,44,.85);box-shadow:0 0 24px rgba(61,190,58,.6);text-transform:uppercase;font-weight:700;font-size:15px;line-height:1.2}
.badge b{font-size:25px;font-weight:900}
.logo{right:auto;left:28px}
@media (max-width:600px){
  h1{font-size:54px}
  .ribbon{font-size:19px;padding:9px 18px;margin-top:16px}
  .issues{font-size:13px;margin-top:14px;padding:0 20px}
  .center{inset:110px 0 150px}
  .badge{width:96px;height:96px;font-size:10px;top:14px;right:14px}.badge b{font-size:19px}
  .logo{top:16px;left:16px}.logo img{height:30px}
  .tag{top:auto;bottom:104px;font-size:12px;padding:5px 10px}.tag.l{left:16px}.tag.r{left:auto;right:16px}
  .hot{display:none}
}`,
  html: `
<div class="bg"></div><div class="shade"></div><div class="divider"></div>
<span class="bokeh" style="width:110px;height:110px;left:90px;top:120px"></span>
<span class="bokeh" style="width:80px;height:80px;right:200px;bottom:120px"></span>
${logo}
<div class="badge">Khảo sát<b>Miễn phí</b>tận nơi</div>
<div class="center">
  <h1 class="emboss">Cải tạo nhà cũ</h1>
  <div class="ribbon">Hãy lựa chọn ${company.brand}</div>
  <p class="issues">Thấm dột · Nứt tường · Điện nước cũ · Đổi công năng — báo giá từng hạng mục</p>
</div>
<span class="tag l">Xuống cấp</span><span class="tag r">Làm mới</span>
${hotline}`,
};

const page = (b) => `<!doctype html><html lang="vi"><head><meta charset="utf-8">
<link href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@600;700;800;900&family=Dancing+Script:wght@700&display=swap" rel="stylesheet">
<style>${base}${b.css}</style></head><body>${b.html}</body></html>`;

const browser = await chromium.launch();
for (const [suffix, width, height] of [['desktop', 1200, 500], ['mobile', 375, 540]]) {
  const p = await browser.newPage({ viewport: { width, height }, deviceScaleFactor: 2 });
  for (const b of [brand, renovate]) {
    const tmp = `${out}/_${b.name}.html`;
    writeFileSync(tmp, page(b));
    await p.goto(pathToFileURL(tmp).href, { waitUntil: 'networkidle' });
    await p.evaluate(() => document.fonts.ready);
    await p.screenshot({ path: `${out}/${b.name}-${suffix}.jpg`, type: 'jpeg', quality: 88 });
    rmSync(tmp);
    console.log(`${b.name}-${suffix}.jpg`);
  }
  await p.close();
}
await browser.close();
