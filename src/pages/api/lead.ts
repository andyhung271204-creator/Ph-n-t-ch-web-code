import type { APIRoute } from 'astro';
import { env } from 'cloudflare:workers';

export const prerender = false;

const json = (body: object, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { 'content-type': 'application/json' } });

export const POST: APIRoute = async ({ request }) => {
  const d = await request.formData().catch(() => null);
  const get = (k: string, max: number) => String(d?.get(k) ?? '').trim().slice(0, max);
  const name = get('ho-ten', 100);
  const phone = get('sdt', 20);
  if (d?.get('website')) return json({ ok: true }); // honeypot: bot điền, bỏ qua im lặng
  if (!name || !/^[0-9+ .]{9,15}$/.test(phone)) return json({ ok: false }, 400);

  await env.DB.prepare('INSERT INTO leads (name, phone, area, need, model) VALUES (?, ?, ?, ?, ?)')
    .bind(name, phone, get('khu-vuc', 100), get('nhu-cau', 1000), get('mau-nha', 100))
    .run();
  return json({ ok: true });
};
