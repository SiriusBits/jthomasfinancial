import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { strToU8, zipSync } from "fflate";
import { BRAND_ASSET_FILES, BRAND_KIT_TEXT } from "@/data/brandDownloads";
import { createSimplePdfFromText } from "@/utils/createSimplePdf";

export const prerender = true;

const brandAssetsDir = fileURLToPath(
  new URL("../../../../reference/brand-assets/", import.meta.url),
);

export async function GET() {
  const zipEntries: Record<string, Uint8Array> = {
    "jtf-brand-kit/jtf-brand-kit.txt": strToU8(`${BRAND_KIT_TEXT}\n`),
    "jtf-brand-kit/jtf-brand-kit.pdf": createSimplePdfFromText(BRAND_KIT_TEXT),
  };

  const files = await Promise.all(
    BRAND_ASSET_FILES.map(async (file) => {
      const data = await readFile(join(brandAssetsDir, file));
      return { file, data: new Uint8Array(data) };
    }),
  );

  for (const { file, data } of files) {
    zipEntries[`jtf-brand-kit/assets/${file}`] = data;
  }

  const archive = zipSync(zipEntries, { level: 9 });

  return new Response(archive, {
    headers: {
      "Content-Type": "application/zip",
      "Content-Disposition": 'attachment; filename="jtf-brand-kit.zip"',
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}
