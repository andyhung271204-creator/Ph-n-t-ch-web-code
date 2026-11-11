// Ảnh cho bài Cẩm nang (skill viet-cam-nang), lấy từ ảnh công trình thật trong src/assets/mau-nha và src/assets/du-an.
//   node scripts/anh-cam-nang.mjs                     → liệt kê ảnh đủ lớn (rộng ≥ 1000px) chưa bài nào dùng
//   node scripts/anh-cam-nang.mjs <slug> <ảnh>...      → nén sang public/uploads/cam-nang/<slug>/ (webp, ≤2000px, như CMS), in đường dẫn để chèn vào bài
import { readdirSync, readFileSync, mkdirSync, statSync } from 'node:fs';
import { join, relative, sep } from 'node:path';
import sharp from 'sharp';

const DIRS = ['src/assets/mau-nha', 'src/assets/du-an'];
const MIN_WIDTH = 1000;
const walk = (d) => readdirSync(d).flatMap((f) => (statSync(join(d, f)).isDirectory() ? walk(join(d, f)) : [join(d, f)]));
const posix = (p) => p.split(sep).join('/');
// Tên file đích mã hoá ảnh gốc (mau-nha/05/2.jpg → mau-nha-05-2.webp) để biết ảnh nào đã dùng.
const keyOf = (p) => posix(relative('src/assets', p)).replace(/\.[^.]+$/, '').replace(/\//g, '-');

const [slug, ...srcs] = process.argv.slice(2);

if (!slug) {
  const posts = walk('noi-dung/cam-nang').map((f) => readFileSync(f, 'utf8')).join('\n');
  for (const p of DIRS.flatMap(walk).filter((p) => /\.(jpe?g|png|webp)$/i.test(p))) {
    const used = posts.includes('/' + posix(p)) || posts.includes(`/${keyOf(p)}.webp`);
    if (used) continue;
    const { width, height } = await sharp(p).metadata();
    if (width >= MIN_WIDTH) console.log(`/${posix(p)}\t${width}x${height}`);
  }
} else {
  const out = `public/uploads/cam-nang/${slug}`;
  mkdirSync(out, { recursive: true });
  for (const s of srcs) {
    const p = s.replace(/^\//, '');
    const dest = `${out}/${keyOf(p)}.webp`;
    await sharp(p).rotate().resize(2000, 2000, { fit: 'inside', withoutEnlargement: true }).webp({ quality: 85 }).toFile(dest);
    console.log('/' + dest.replace(/^public\//, ''));
  }
}
