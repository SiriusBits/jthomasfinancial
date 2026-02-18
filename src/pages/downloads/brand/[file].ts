import { readFile } from "node:fs/promises";
import { extname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { BRAND_ASSET_FILES } from "@/data/brandDownloads";

export const prerender = true;

const allowedFiles = BRAND_ASSET_FILES;

const mimeByExt: Record<string, string> = {
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".pdf": "application/pdf",
};

const brandAssetsDir = fileURLToPath(
  new URL("../../../../reference/brand-assets/", import.meta.url),
);

export function getStaticPaths() {
  return allowedFiles.map((file) => ({ params: { file } }));
}

export async function GET({ params }: { params: { file?: string } }) {
  const file = params.file;
  if (!file || !allowedFiles.includes(file as (typeof allowedFiles)[number])) {
    return new Response("Not found", { status: 404 });
  }

  const filePath = join(brandAssetsDir, file);
  const data = await readFile(filePath);
  const ext = extname(file).toLowerCase();
  const contentType = mimeByExt[ext] ?? "application/octet-stream";

  return new Response(data, {
    headers: {
      "Content-Type": contentType,
      "Content-Disposition": `attachment; filename="${file}"`,
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}
