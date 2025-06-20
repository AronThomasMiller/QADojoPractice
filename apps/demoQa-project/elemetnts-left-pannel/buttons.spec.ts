//xPath

import { test } from "@playwright/test";

test.describe("Test buttons elements", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://demoqa.com/buttons");
  });

  test(
    "[Test_Id-18] - Test buttons elements",
    { tag: "@demoQa" },
    async ({ page }) => {
      await page.locator('//button[@id="doubleClickBtn"]').click();
      await page.locator('//button[@id="rightClickBtn"]').click();
      await page.locator('//button[text()="Click Me"]').click();
    }
  );
});
