//Css selector + const

import { test, expect } from "@playwright/test";

test.describe("Main page tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://playwright.dev/");
  });

  test(
    "[Test_Id-7] - Check Playwright homepage title",
    { tag: "@pw" },
    async ({ page }) => {
      const mainTitle = page.locator('[aria-label="Main"]');

      await expect(page).toHaveTitle(/Playwright/);
      await expect(mainTitle).toContainText("Playwright");
    }
  );

  test(
    "[Test_Id-9] - Verify dark/light theme toggle іcon is visible",
    { tag: "@pw" },
    async ({ page }) => {
      const themeToggleIcon = page.locator('[class="lightToggleIcon_pyhR"]');

      await expect(themeToggleIcon).toBeVisible();
    }
  );
});
