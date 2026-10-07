import sharp from "sharp";

const [input, output, cropBottom = "0"] = process.argv.slice(2);
if (!input || !output) throw new Error("Usage: node scripts/optimize-image.mjs <input> <output> [crop-bottom-px]");
const source = sharp(input);
const metadata = await source.metadata();
const crop = Number(cropBottom);
let pipeline = source;
if (crop > 0 && metadata.width && metadata.height) pipeline = pipeline.extract({ left: 0, top: 0, width: metadata.width, height: metadata.height - crop });
await pipeline.webp({ quality: 90, effort: 5 }).toFile(output);
console.log(output);
