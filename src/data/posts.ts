import { imageAt } from './images';
import { company } from './company';

// Bài cẩm nang (blog): mỗi bài là một file noi-dung/cam-nang/<slug>.md, soạn qua /admin (Sveltia CMS).
// Tên file = URL bài. Ảnh bìa: frontmatter `cover` (đường dẫn trong src/assets/).
// Sửa danh mục ở đây thì sửa luôn options của `category` trong public/admin/config.yml.
export const categories = [
  { slug: 'chi-phi', name: 'Chi phí xây nhà' },
  { slug: 'thiet-ke', name: 'Thiết kế nhà' },
  { slug: 'sua-chua', name: 'Sửa chữa – cải tạo' },
  { slug: 'noi-that', name: 'Hoàn thiện nội thất' },
];

// Nội dung bài: noi-dung/cam-nang/<slug>.md. Quy ước đánh dấu cho biên tập (hiện trên web cho tới khi xóa):
//   [ẢNH: mô tả]      → khung chờ ảnh
//   [cần xác nhận...]  → đoạn tô vàng
//   mục "## Nguồn tham khảo" → chỉ để biên tập, không hiển thị
type Fm = {
  title: string;
  category: string;
  excerpt: string;
  cover: string;
  date: string | Date;
  draft?: boolean;
  meta_title?: string;
  meta_description?: string;
};
type Md = { frontmatter: Fm; compiledContent: () => string | Promise<string> };
const mds = import.meta.glob<Md>('/noi-dung/cam-nang/*.md', { eager: true });

const ctaButtons = `<div class="post-cta">
<a href="/lien-he" class="btn btn-primary">Nhận báo giá miễn phí</a>
<a href="${company.telUrl}" class="btn btn-outline">Gọi ngay ${company.phoneDisplay}</a>
<a href="${company.zaloUrl}" class="btn btn-outline" target="_blank" rel="noopener">Chat Zalo</a>
</div>`;

const toHtml = (html: string) => {
  const [main] = html.split(/(?:<hr>\s*)?<h2[^>]*>Nguồn tham khảo<\/h2>/);
  return (
    main
      .replace(/<h1[^>]*>[\s\S]*?<\/h1>/, '') // tiêu đề đã có ở PageHeader
      .replace('<strong>Sapo:</strong> ', '')
      // FAQ "**Câu hỏi?**\nTrả lời" → <details> (<br>: CMS ghi Shift+Enter thành xuống dòng cứng)
      .replace(
        /<p><strong>([^<]*\?)<\/strong>(?:<br\s*\/?>)?\r?\n([\s\S]*?)<\/p>/g,
        '<details><summary>$1</summary><p>$2</p></details>',
      )
      .replace(/<p>[^\n]*\[Nhận báo giá miễn phí\][^\n]*<\/p>(\s*<p>[^\n]*\[Gọi ngay\][^\n]*<\/p>)?/, ctaButtons)
      .replace(/<p>\[ẢNH: ([^\]]+)\]<\/p>/g, '<figure class="img-placeholder" role="note">📷 Chờ ảnh: $1</figure>')
      .replace(/\[(cần xác nhận[^\]]*)\]/g, '<mark class="note-xn">⚠ $1</mark>')
      .replace(/<table>/g, '<div class="table-wrap"><table>')
      .replace(/<\/table>/g, '</table></div>')
      .replace(/<img (?![^>]*loading=)/g, '<img loading="lazy" ') // ảnh chèn qua CMS (public/uploads/)
  );
};

// Bỏ bài nháp; mới nhất trước (bài đầu = bài nổi bật trang chủ).
export const posts = (
  await Promise.all(
    Object.entries(mds)
      .filter(([, m]) => !m.frontmatter.draft)
      .map(async ([path, m]) => {
        const fm = m.frontmatter;
        const slug = path.split('/').pop()!.replace(/\.md$/, '');
        const cover = imageAt(fm.cover);
        if (!cover) throw new Error(`Bài "${slug}": không tìm thấy ảnh bìa ${fm.cover}`);
        return {
          slug,
          category: fm.category,
          title: fm.title,
          excerpt: fm.excerpt,
          date: new Date(fm.date),
          cover,
          body: toHtml(await m.compiledContent()),
          // CMS ghi ô bỏ trống thành "" → dùng ||, không dùng ??
          metaTitle: fm.meta_title?.replace(/\s*\|\s*Gia Khánh$/, '') || fm.title,
          metaDescription: fm.meta_description || fm.excerpt,
        };
      }),
  )
).sort((a, b) => +b.date - +a.date);
export type Post = (typeof posts)[number];
