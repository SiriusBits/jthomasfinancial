import { BRAND_KIT_TEXT } from "@/data/brandDownloads";
import { createSimplePdfFromText } from "@/utils/createSimplePdf";

export const prerender = true;

export function GET() {
  const pdf = createSimplePdfFromText(BRAND_KIT_TEXT);

  return new Response(new Uint8Array(pdf), {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'attachment; filename="jtf-brand-kit.pdf"',
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}
