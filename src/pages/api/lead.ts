import type { APIRoute } from 'astro';
import { env } from 'cloudflare:workers';

export const prerender = false;

const json = (body: object, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { 'content-type': 'application/json' } });

export const POST: APIRoute = async ({ request, locals }) => {
  const d = await request.formData().catch(() => null);
  const get = (k: string, max: number) => String(d?.get(k) ?? '').trim().slice(0, max);
  const name = get('ho-ten', 100);
  const phone = get('sdt', 20);
  if (d?.get('website')) return json({ ok: true }); // honeypot: bot điền, bỏ qua im lặng
  if (!name || !/^[0-9+ .]{9,15}$/.test(phone)) return json({ ok: false }, 400);

  const area = get('khu-vuc', 100);
  const need = get('nhu-cau', 1000);
  const model = get('mau-nha', 100);
  await env.DB.prepare('INSERT INTO leads (name, phone, area, need, model) VALUES (?, ?, ?, ?, ?)')
    .bind(name, phone, area, need, model)
    .run();

  // Báo qua Zalo Bot; thiếu secret hoặc lỗi gửi thì bỏ qua, lead đã nằm trong D1.
  const { ZALO_BOT_TOKEN: token, ZALO_CHAT_ID: chatId } = env as unknown as Record<string, string | undefined>;
  if (token && chatId) {
    const text = ['Lead mới từ website', `Họ tên: ${name}`, `SĐT: ${phone}`, area && `Khu vực: ${area}`, model && `Mẫu nhà: ${model}`, need && `Nhu cầu: ${need}`]
      .filter(Boolean)
      .join('\n');
    const notify = fetch(`https://bot-api.zaloplatforms.com/bot${token}/sendMessage`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ chat_id: chatId, text }),
    }).catch(() => {});
    locals.cfContext.waitUntil(notify);
  }
  return json({ ok: true });
};
