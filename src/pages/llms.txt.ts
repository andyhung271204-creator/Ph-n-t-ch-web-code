// /llms.txt cho AI search (llmstxt.org): tự cập nhật theo services, bài cẩm nang và company.ts
import type { APIRoute } from 'astro';
import { company } from '../data/company';
import { services } from '../data/services';
import { posts } from '../data/posts';

export const GET: APIRoute = ({ site }) => {
  const url = (path: string) => new URL(path, site).href;
  const body = `# ${company.name}

> ${company.intro}

- Thương hiệu: ${company.brand}
- Mã số thuế: ${company.taxCode}
- Trụ sở: ${company.address}
- Hotline / Zalo: ${company.phoneDisplay}
- Khu vực phục vụ: ${company.area}

## Dịch vụ

${services.map((s) => `- [${s.name}](${url(`/dich-vu/${s.slug}/`)}): ${s.description}`).join('\n')}

## Trang chính

- [Giới thiệu](${url('/gioi-thieu/')}): đội ngũ, giá trị cốt lõi, thông tin pháp lý
- [Báo giá](${url('/bao-gia/')}): đơn giá xây nhà theo m², các gói, cách tính diện tích. ${company.priceNote}
- [Công trình](${url('/du-an/')}): ảnh công trình Gia Khánh đã thi công
- [Liên hệ](${url('/lien-he/')}): form nhận báo giá miễn phí, bản đồ

## Cẩm nang

${posts.map((p) => `- [${p.title}](${url(`/cam-nang/${p.slug}/`)}): ${p.excerpt}`).join('\n')}
`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
