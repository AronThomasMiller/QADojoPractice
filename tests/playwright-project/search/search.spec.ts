import { test, expect } from "@playwright/test";

test.describe("Search tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://playwright.dev/");
  });

  test(
    "[Test_Id-8] - Verify search functionality test",
    { tag: "@pw" },
    async ({ page }) => {
      await page.locator('button[aria-label="Search (Ctrl+K)"]').click();
      await page.locator("#docsearch-input").fill("locator");
      await expect(page.locator('a[href="/docs/locators"]')).toBeVisible();
      await page.locator('a[href="/docs/locators"]').click();
      await expect(page.locator("h1")).toContainText("Locators");
    }
  );
});
