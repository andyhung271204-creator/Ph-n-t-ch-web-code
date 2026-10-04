import type { ImageMetadata } from 'astro';

// Mọi ảnh dưới src/assets/**/<thư-mục>/ — giải nén thư mục Drive vào src/assets/ là đủ.
const all = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/**/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}',
  { eager: true },
);

/** Ảnh trong thư mục có tên `dir` (không phân biệt hoa thường), sắp theo tên file. */
export const imagesIn = (dir: string): ImageMetadata[] =>
  Object.keys(all)
    .filter((p) => p.toLowerCase().includes(`/${dir.toLowerCase()}/`))
    .sort()
    .map((p) => all[p].default);
