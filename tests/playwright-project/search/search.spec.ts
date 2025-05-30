//Css selector + const

import { test, expect } from "@playwright/test";

test.describe("Search tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://playwright.dev/");
  });

  test(
    "[Test_Id-8] - Verify search functionality test",
    { tag: "@pw" },
    async ({ page }) => {
      const searchButton = page.locator('button[aria-label="Search (Ctrl+K)"]');
      const searchInput = page.locator("#docsearch-input");
      const locatorsLink = page.locator('a[href="/docs/locators"]');
      const heading = page.locator("h1");

      await searchButton.click();
      await searchInput.fill("locator");
      await expect(locatorsLink).toBeVisible();
      await locatorsLink.click();
      await expect(heading).toContainText("Locators");
    }
  );
});
