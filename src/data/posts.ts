import { imagesIn } from './images';
import { company } from './company';

// Bài cẩm nang (blog). Ảnh bìa lấy từ thư mục công trình thật trong src/assets/.
// Thân bài lấy từ noi-dung/cam-nang/<slug>.md (xem toHtml bên dưới).
export const categories = [
  { slug: 'chi-phi', name: 'Chi phí xây nhà' },
  { slug: 'thiet-ke', name: 'Thiết kế nhà' },
  { slug: 'sua-chua', name: 'Sửa chữa – cải tạo' },
  { slug: 'noi-that', name: 'Hoàn thiện nội thất' },
];

const raw = [
  {
    slug: 'chi-phi-xay-nha-pho-tron-goi',
    category: 'chi-phi',
    title: 'Chi phí xây nhà phố trọn gói: những yếu tố quyết định tổng chi phí',
    excerpt:
      'Đơn giá theo m² chỉ là điểm bắt đầu. Diện tích sàn, phần móng – mái, vật tư hoàn thiện và điều kiện thi công thực tế mới quyết định con số cuối cùng.',
    img: 'nha-da-hoan-thien',
  },
  {
    slug: 'cach-tinh-dien-tich-xay-dung',
    category: 'chi-phi',
    title: 'Cách tính diện tích xây dựng để dự trù ngân sách',
    excerpt: 'Hiểu cách quy đổi móng, sàn, mái ra diện tích để ước tính chi phí trước khi khảo sát.',
    img: 'cong-trinh-11',
  },
  {
    slug: 'luu-y-khi-thiet-ke-nha-pho',
    category: 'thiet-ke',
    title: 'Những điều cần lưu ý khi thiết kế nhà phố',
    excerpt: 'Ánh sáng, thông gió, cầu thang và công năng từng tầng — những điểm nên chốt sớm khi thiết kế.',
    img: 'cong-trinh-06',
  },
  {
    slug: 'kiem-tra-truoc-khi-cai-tao-nha-cu',
    category: 'sua-chua',
    title: 'Sửa nhà cũ: cần kiểm tra gì trước khi cải tạo?',
    excerpt: 'Kết cấu, thấm dột, hệ thống điện nước — những hạng mục cần kiểm tra trước khi quyết định sửa.',
    img: 'cong-trinh-05',
  },
  {
    slug: 'chon-vat-lieu-hoan-thien-noi-that',
    category: 'noi-that',
    title: 'Hoàn thiện nội thất: chọn vật liệu phù hợp ngân sách',
    excerpt: 'Gỗ, sơn, gạch, trần — cách cân đối vật liệu hoàn thiện theo ngân sách gia đình.',
    img: 'noi-that',
  },
];

// Nội dung bài: noi-dung/cam-nang/<slug>.md. Quy ước đánh dấu cho biên tập (hiện trên web cho tới khi xóa):
//   [ẢNH: mô tả]      → khung chờ ảnh
//   [cần xác nhận...]  → đoạn tô vàng
//   mục "## Nguồn tham khảo" → chỉ để biên tập, không hiển thị
type Md = { frontmatter: Record<string, string>; compiledContent: () => string | Promise<string> };
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
      // FAQ "**Câu hỏi?**\nTrả lời" → <details>
      .replace(
        /<p><strong>([^<]*\?)<\/strong>\r?\n([\s\S]*?)<\/p>/g,
        '<details><summary>$1</summary><p>$2</p></details>',
      )
      .replace(/<p>[^\n]*\[Nhận báo giá miễn phí\][^\n]*<\/p>(\s*<p>[^\n]*\[Gọi ngay\][^\n]*<\/p>)?/, ctaButtons)
      .replace(/<p>\[ẢNH: ([^\]]+)\]<\/p>/g, '<figure class="img-placeholder" role="note">📷 Chờ ảnh: $1</figure>')
      .replace(/\[(cần xác nhận[^\]]*)\]/g, '<mark class="note-xn">⚠ $1</mark>')
      .replace(/<table>/g, '<div class="table-wrap"><table>')
      .replace(/<\/table>/g, '</table></div>')
  );
};

const bodies = Object.fromEntries(
  await Promise.all(
    Object.values(mds).map(async (m) => [m.frontmatter.slug, { html: toHtml(await m.compiledContent()), fm: m.frontmatter }]),
  ),
);

export const posts = raw.map((p) => ({
  ...p,
  cover: imagesIn(p.img)[0],
  body: bodies[p.slug]?.html ?? '',
  metaTitle: bodies[p.slug]?.fm.meta_title?.replace(/\s*\|\s*Gia Khánh$/, '') ?? p.title,
  metaDescription: bodies[p.slug]?.fm.meta_description ?? p.excerpt,
}));
export type Post = (typeof posts)[number];
