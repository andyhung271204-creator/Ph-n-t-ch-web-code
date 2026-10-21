// Worker entry: 301 về https://xaydunggiakhanh.vn/<trang>/ (bỏ www, http, thiếu "/" cuối) rồi mới giao cho Astro.
import { handle } from '@astrojs/cloudflare/handler';

const HOST = 'xaydunggiakhanh.vn';

export default {
  async fetch(request: Request, env: any, ctx: any) {
    const url = new URL(request.url);
    if (url.hostname.endsWith(HOST)) {
      const { pathname } = url;
      const lastSegment = pathname.slice(pathname.lastIndexOf('/') + 1);
      const missingSlash = lastSegment !== '' && !lastSegment.includes('.') && !pathname.startsWith('/api/');
      if (url.hostname !== HOST || url.protocol === 'http:' || missingSlash) {
        const target = `https://${HOST}${pathname}${missingSlash ? '/' : ''}${url.search}`;
        return Response.redirect(target, 301);
      }
    }
    return handle(request, env, ctx);
  },
};
