import { test, expect } from "@playwright/test";

test.describe("Get started tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://playwright.dev/");
  });

  test(
    "[Test_Id-6] - Verify Get Started link navigation",
    { tag: "@pw" },
    async ({ page }) => {
      await page.locator('a:has-text("Get started")').click();
      await expect(page).toHaveURL(/.*intro/);
      await expect(page.locator("h1")).toContainText("Installation");
    }
  );
});
