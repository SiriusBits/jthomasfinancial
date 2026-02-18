import { BRAND_KIT_TEXT } from "@/data/brandDownloads";

export const prerender = true;

export function GET() {
  return new Response(`${BRAND_KIT_TEXT}\n`, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Content-Disposition": 'attachment; filename="jtf-brand-kit.txt"',
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}
