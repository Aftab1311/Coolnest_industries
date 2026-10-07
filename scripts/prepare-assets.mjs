import sharp from "sharp";
import { mkdir, copyFile } from "node:fs/promises";
import path from "node:path";

// Extract only the provided brand and photographic artwork. The page itself is
// rebuilt with semantic HTML, real text, CSS, and interactive React components.
const reference = process.argv[2];
if (!reference) throw new Error("Usage: node scripts/prepare-assets.mjs <reference.png>");
await mkdir("public/images", { recursive: true });
await mkdir("artifacts", { recursive: true });
await copyFile(reference, "artifacts/reference.png");
const crops = {
  "coolnest-logo": [50, 7, 202, 65],
  "cooling-pads": [677, 534, 296, 173],
  "coolnest-interior": [0, 1136, 383, 215],
  "sustainability-leaves": [867, 1365, 157, 112],
};
for (const [name, [left, top, width, height]] of Object.entries(crops)) {
  await sharp(reference).extract({ left, top, width, height }).webp({ lossless: true }).toFile(path.join("public/images", `${name}.webp`));
}
// The reference card has a small interface badge overlapping the image at its
// lower-left edge. Cover that UI fragment so the reusable product photograph is clean.
await sharp("public/images/cooling-pads.webp")
  .composite([{ input: { create: { width: 48, height: 21, channels: 4, background: "#f8f4ec" } }, left: 0, top: 152 }])
  .webp({ lossless: true })
  .toFile("public/images/cooling-pads-clean.webp");
await sharp(reference).extract({ left: 50, top: 7, width: 68, height: 65 }).resize(64,64).png().toFile("app/icon.png");
console.log(`Extracted ${Object.keys(crops).length} reference assets and the site icon.`);
