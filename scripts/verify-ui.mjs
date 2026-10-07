import { mkdir } from "node:fs/promises";
import { launchBrowser } from "./browser.mjs";

const base = process.env.BASE_URL ?? "http://localhost:3000";
const routes = ["/", "/products", "/about", "/sustainability", "/contact"];
const viewports = [{ name: "desktop", width: 1440, height: 1000 }, { name: "mobile", width: 390, height: 844 }];
const browser = await launchBrowser();
await mkdir("artifacts/routes", { recursive: true });
const failures = [];

for (const viewport of viewports) {
  for (const route of routes) {
    const page = await browser.newPage({ viewport });
    const errors = [];
    page.on("pageerror", error => errors.push(error.message));
    page.on("console", message => { if (message.type() === "error") errors.push(message.text()); });
    const response = await page.goto(`${base}${route}`, { waitUntil: "networkidle" });
    await page.evaluate(() => document.fonts.ready);
    await page.evaluate(async () => {
      const pause = (ms) => new Promise(resolve => setTimeout(resolve, ms));
      for (let y = 0; y < document.documentElement.scrollHeight; y += innerHeight * 0.8) {
        window.scrollTo(0, y);
        await pause(60);
      }
      window.scrollTo(0, 0);
      await pause(150);
    });
    const audit = await page.evaluate(() => ({
      title: document.title,
      horizontalOverflow: document.documentElement.scrollWidth > innerWidth,
      missingImages: [...document.images].filter(image => image.complete && !image.naturalWidth).map(image => image.getAttribute("src")),
      mainHeading: document.querySelector("main h1")?.textContent?.trim(),
    }));
    if (response?.status() !== 200 || errors.length || audit.horizontalOverflow || audit.missingImages.length || !audit.mainHeading) failures.push({ route, viewport: viewport.name, status: response?.status(), errors, ...audit });
    await page.screenshot({ path: `artifacts/routes/${viewport.name}-${route === "/" ? "home" : route.slice(1)}.png`, fullPage: true });
    await page.close();
  }
}

const page = await browser.newPage({ viewport: viewports[0] });
await page.goto(base, { waitUntil: "networkidle" });
await page.getByRole("button", { name: "View Product" }).click();
await page.locator("dialog").getByRole("heading", { name: "Honeycomb Cooling Pads" }).waitFor();
await page.locator("dialog").getByRole("button", { name: "Request a Quote" }).click();
await page.getByRole("heading", { name: "Request a Quote" }).waitFor();
await page.getByLabel("Your name *").fill("Visual QA");
await page.getByLabel("Email address *").fill("qa@example.com");
await page.getByLabel("How can we help? *").fill("Honeycomb pad requirement test");
const download = page.waitForEvent("download");
await page.getByRole("button", { name: "Download enquiry", exact: true }).click();
await download;
await page.getByText("Your enquiry is ready").waitFor();
await page.getByRole("button", { name: "Close dialog" }).click();
if (await page.locator("dialog[open]").count()) failures.push({ interaction: "dialog failed to close" });
await page.setViewportSize(viewports[1]);
await page.getByRole("button", { name: "Open navigation" }).click();
if (!(await page.getByRole("navigation", { name: "Main navigation" }).isVisible())) failures.push({ interaction: "mobile navigation failed to open" });
await page.close();
await browser.close();

if (failures.length) { console.error(JSON.stringify(failures, null, 2)); process.exit(1); }
console.log(`Verified ${routes.length} routes at desktop and mobile sizes, plus quote download and mobile navigation.`);
