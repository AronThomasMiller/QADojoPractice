import { test, expect } from "@playwright/test";

test.describe("Api page tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://playwright.dev/");
  });

  test(
    "[Test_Id-10] - Check API link navigation",
    { tag: "@pw" },
    async ({ page }) => {
      await expect(page.locator('a:has-text("API")')).toBeVisible();
      await page.locator('a:has-text("API")').click();
      await expect(page).toHaveURL(/.*api/);
      await expect(page.locator("h1")).toContainText("Playwright Library");
    }
  );
});
