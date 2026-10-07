import { chromium } from "@playwright/test";
import { existsSync, readdirSync } from "node:fs";
import path from "node:path";

export async function launchBrowser() {
  let executablePath = process.env.PLAYWRIGHT_EXECUTABLE_PATH;
  if (!executablePath && !existsSync(chromium.executablePath()) && process.platform === "win32") {
    const cache = path.join(process.env.LOCALAPPDATA ?? "", "ms-playwright");
    if (existsSync(cache)) {
      for (const version of readdirSync(cache).filter(name => /^chromium-\d+$/.test(name)).sort().reverse()) {
        const candidate = path.join(cache, version, "chrome-win64", "chrome.exe");
        if (existsSync(candidate)) { executablePath = candidate; break; }
      }
    }
  }
  return chromium.launch({ headless: true, ...(executablePath ? { executablePath } : {}) });
}
