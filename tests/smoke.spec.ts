import { test, expect } from "@playwright/test";

const pages = [
  "/",
  "/about",
  "/contact",
  "/quote",
  "/projects",
  "/projects/1",
  "/careers",
  "/careers/senior-frontend-engineer",
  "/blog",
  "/services/custom-web-development",
  "/locations/itahari",
  "/ne",
  "/search?q=cloud",
  "/privacy",
  "/terms",
];

for (const path of pages) {
  test(`${path} renders with one h1, title, description and no horizontal scroll`, async ({ page }) => {
    const errors: string[] = [];
    page.on("pageerror", (e) => errors.push(e.message));

    const res = await page.goto(path);
    expect(res?.status()).toBe(200);
    await expect(page.locator("h1")).toHaveCount(1);
    await expect(page).toHaveTitle(/Astra Technology Horizon/);
    await expect(page.locator('meta[name="description"]')).toHaveAttribute("content", /.{50,}/);

    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
    expect(overflow).toBeLessThanOrEqual(0);
    expect(errors).toEqual([]);
  });
}

test("unknown page shows branded 404", async ({ page }) => {
  const res = await page.goto("/this-page-does-not-exist");
  expect(res?.status()).toBe(404);
  await expect(page.getByRole("heading", { level: 1 })).toContainText("can’t find that page");
});

test("legacy blog URLs redirect or 404 cleanly", async ({ page }) => {
  const res = await page.goto("/blog/1");
  expect([200, 404]).toContain(res?.status());
});

test("sitemap, robots and RSS are served", async ({ request }) => {
  const sitemap = await request.get("/sitemap.xml");
  expect(sitemap.ok()).toBeTruthy();
  expect(await sitemap.text()).toContain("/services/custom-web-development");
  expect((await request.get("/robots.txt")).ok()).toBeTruthy();
  expect((await request.get("/rss.xml")).ok()).toBeTruthy();
});

test("forms API validates input", async ({ request }) => {
  const res = await request.post("/api/forms", { multipart: { formType: "contact", name: "", email: "bad" } });
  expect(res.status()).toBe(400);
});

test("mobile menu opens and closes with Escape", async ({ page, isMobile }) => {
  test.skip(!isMobile, "mobile only");
  await page.goto("/");
  await page.getByRole("button", { name: "Open menu" }).click();
  await expect(page.locator("#mobile-menu")).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(page.locator("#mobile-menu")).toHaveCount(0);
});

test("theme toggle switches to dark mode and persists", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("button", { name: "Switch to dark theme" }).first().click();
  await expect(page.locator("html")).toHaveClass(/dark/);
  await page.reload();
  await expect(page.locator("html")).toHaveClass(/dark/);
});

test("contact form shows native validation for required fields", async ({ page }) => {
  await page.goto("/contact");
  await page.getByRole("button", { name: "Send Message" }).click();
  const valid = await page.locator("#name").evaluate((el: HTMLInputElement) => el.validity.valid);
  expect(valid).toBe(false);
});

test("site search finds services", async ({ page }) => {
  await page.goto("/search?q=mobile");
  await expect(page.getByRole("link", { name: /Mobile App Development/ }).first()).toBeVisible();
});
