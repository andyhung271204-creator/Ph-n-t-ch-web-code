// Kiểm tra nhanh: node scripts/kiem-tra.mjs [/duong-dan ...]   (cần server đang chạy)
// Mỗi trang x 3 độ rộng: cuộn ngang, lỗi console, vùng chạm < 44px, link nội bộ 404.
import { chromium } from 'playwright';

const BASE = process.env.BASE || 'http://localhost:4321';
const paths = process.argv.slice(2);
if (!paths.length) paths.push('/', '/gioi-thieu', '/dich-vu', '/du-an', '/bao-gia', '/lien-he');
const widths = [375, 768, 1280];

const browser = await chromium.launch();
const seen = new Map(); // link nội bộ -> status (mỗi link chỉ gọi một lần)
let fail = 0;

for (const p of paths) {
  for (const w of widths) {
    const page = await browser.newPage({ viewport: { width: w, height: 800 } });
    const errs = [];
    page.on('response', (r) => r.status() >= 400 && !/\/@(vite|id)\//.test(r.url()) && errs.push(`${r.status()} ${r.url()}`));
    page.on('console', (m) => m.type() === 'error' && !m.text().startsWith('Failed to load resource') && errs.push(m.text()));
    page.on('pageerror', (e) => errs.push(e.message));
    await page.goto(BASE + p, { waitUntil: 'networkidle' });

    const r = await page.evaluate(() => ({
      scrollX: document.documentElement.scrollWidth > innerWidth,
      small: innerWidth > 768 ? [] : [...document.querySelectorAll('a,button,summary')]
        .filter((e) => { const b = e.getBoundingClientRect(); return b.width && b.height && b.right > 0 && b.bottom > 0 && (b.height < 44 || b.width < 44) && getComputedStyle(e).display !== 'inline'; })
        .map((e) => (e.textContent.trim().slice(0, 25) || e.ariaLabel || e.tagName)),
      links: [...new Set([...document.querySelectorAll('a[href^="/"]')].map((a) => a.getAttribute('href').split('#')[0]))],
    }));

    for (const l of r.links) {
      if (l && !seen.has(l)) seen.set(l, (await page.request.get(BASE + l)).status());
    }
    const issues = [];
    if (r.scrollX) issues.push('cuộn ngang');
    if (errs.length) issues.push(`console: ${errs[0]}`);
    if (r.small.length) issues.push(`vùng chạm <44px (${r.small.length}): ${r.small.slice(0, 3).join(' | ')}`);
    console.log(`${issues.length ? 'FAIL' : 'ok  '} ${p} @${w}${issues.length ? ' — ' + issues.join('; ') : ''}`);
    fail += issues.length;
    await page.close();
  }
}
for (const [l, s] of seen) if (s >= 400) { console.log(`FAIL link ${l} -> ${s}`); fail++; }
await browser.close();
process.exit(fail ? 1 : 0);
