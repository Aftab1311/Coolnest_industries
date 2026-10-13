import { mkdir } from "node:fs/promises";
import { launchBrowser } from "./browser.mjs";

const base = process.env.BASE_URL ?? "http://localhost:3000";
const routes = ["/", "/products", "/products/honeycomb-cooling-pads", "/products/air-cooler-cooling-pads", "/about", "/sustainability", "/contact"];
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
await page.goto(`${base}/products`, { waitUntil: "networkidle" });
await page.getByRole("link", { name: "Product information" }).first().click();
await page.getByRole("heading", { name: "Honeycomb Cooling Pad Manufacturer in Hapur" }).waitFor();
if (!page.url().endsWith("/products/honeycomb-cooling-pads")) failures.push({ interaction: "product detail link did not navigate" });

await page.goto(`${base}/contact?product=air-cooler-pad#quote-form`, { waitUntil: "networkidle" });
await page.getByRole("heading", { name: "Tell Us What You Need" }).waitFor();
await page.getByLabel("Your name *").fill("Visual QA");
await page.getByLabel("Phone number *").fill("+91 9000000000");
await page.getByLabel("Quantity *").fill("10 pieces");
if (await page.locator("#quote-product").inputValue() !== "air-cooler-pad") failures.push({ interaction: "product enquiry selection did not load" });

await page.setViewportSize(viewports[1]);
await page.locator(".mobile-nav summary").click();
if (!(await page.getByRole("navigation", { name: "Mobile navigation" }).isVisible())) failures.push({ interaction: "mobile navigation failed to open" });
await page.close();
await browser.close();

if (failures.length) { console.error(JSON.stringify(failures, null, 2)); process.exit(1); }
console.log(`Verified ${routes.length} routes at desktop and mobile sizes, product detail navigation, enquiry form inputs and mobile navigation.`);
