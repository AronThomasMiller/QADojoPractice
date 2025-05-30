//xPath

import { test } from "@playwright/test";

test.describe("Test radio-button elements", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://demoqa.com/radio-button");
  });

  test(
    "[Test_Id-18] - Test radio-button elements",
    { tag: "@demoQa" },
    async ({ page }) => {
      await page.locator('//label[@for="yesRadio"]').click();
      await page.locator('//label[@for="impressiveRadio"]').click();
    }
  );
});
