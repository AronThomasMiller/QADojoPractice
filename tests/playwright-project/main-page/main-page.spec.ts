import { test, expect } from "@playwright/test";

test.describe("Main page tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://playwright.dev/");
  });

  test(
    "[Test_Id-7] - Check Playwright homepage title",
    { tag: "@pw" },
    async ({ page }) => {
      await expect(page).toHaveTitle(/Playwright/);
      await expect(page.locator('[aria-label="Main"] b')).toContainText(
        "Playwright"
      );
    }
  );

  test(
    "[Test_Id-9] - Verify dark/light theme toggle is visible",
    { tag: "@pw" },
    async ({ page }) => {
      await expect(
        page.locator('[class="lightToggleIcon_pyhR"]')
      ).toBeVisible();
    }
  );
});
