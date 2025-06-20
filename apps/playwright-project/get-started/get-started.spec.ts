//Css selector + const

import { test, expect } from "@playwright/test";

test.describe("Get started tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://playwright.dev/");
  });

  test(
    "[Test_Id-6] - Verify Get Started link navigation",
    { tag: "@pw" },
    async ({ page }) => {
      const get_started_link = 'a:has-text("Get started")';
      const header_h1 = "h1";

      await page.locator(get_started_link).click();
      await expect(page).toHaveURL(/.*intro/);
      await expect(page.locator(header_h1)).toContainText("Installation");
    }
  );
});
