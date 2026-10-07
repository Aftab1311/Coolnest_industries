import { mkdir, writeFile } from "node:fs/promises";
import { launchBrowser } from "./browser.mjs";

const pass = process.argv[2] ?? "final";
const browser = await launchBrowser();
await mkdir("artifacts", { recursive: true });
const page = await browser.newPage({ viewport: { width: 1024, height: 1536 }, deviceScaleFactor: 1 });
const errors = [];
page.on("pageerror", error => errors.push(error.message));
page.on("console", message => { if (message.type() === "error") errors.push(message.text()); });
await page.goto(process.env.BASE_URL ?? "http://localhost:3000", { waitUntil: "networkidle" });
await page.evaluate(() => document.fonts.ready);
await page.locator(".site-footer").scrollIntoViewIfNeeded();
await page.waitForFunction(() => [...document.images].every(image => image.complete && image.naturalWidth > 0));
await page.evaluate(() => window.scrollTo({ top: 0, behavior: "instant" }));
await page.screenshot({ path: `artifacts/desktop-${pass}.png`, fullPage: true });
const measurements = await page.evaluate(() => ({
  viewport: { width: innerWidth, height: document.documentElement.scrollHeight },
  overflow: document.documentElement.scrollWidth > innerWidth,
  sections: [...document.querySelectorAll("header, main > section, footer")].map(element => {
    const bounds = element.getBoundingClientRect();
    return { name: element.className, top: bounds.top, height: bounds.height };
  }),
}));
await writeFile(`artifacts/measurements-${pass}.json`, JSON.stringify({ ...measurements, errors }, null, 2));
console.log(JSON.stringify({ ...measurements, errors }, null, 2));
await browser.close();
