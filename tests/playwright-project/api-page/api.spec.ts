//Css selector + const

import { test, expect } from "@playwright/test";

test.describe("Api page tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://playwright.dev/");
  });

  test(
    "[Test_Id-10] - Check API link navigation",
    { tag: "@pw" },
    async ({ page }) => {
      const api_link = 'a:has-text("API")';
      const header_h1 = "h1";

      await expect(page.locator(api_link)).toBeVisible();
      await page.locator(api_link).click();
      await expect(page).toHaveURL(/.*api/);
      await expect(page.locator(header_h1)).toContainText("Playwright Library");
    }
  );
});
