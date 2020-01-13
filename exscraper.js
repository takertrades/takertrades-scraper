const puppeteer = require("puppeteer");
async function run() {
  const browser = await puppeteer.launch({
    defaultViewport: { width: 1920, height: 1080 }
  });
  const page = await browser.newPage(); 
  await page.goto("https://www.google.com/search?q=bitcoin");
  await page.screenshot({ path: "screenshot.png" });
  browser.close();
}
run();
