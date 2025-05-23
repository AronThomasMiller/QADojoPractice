//xPath

import { test } from "@playwright/test";

test.describe("Test checkbox elements", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://demoqa.com/checkbox");
  });

  test(
    "[Test_Id-18] - Test checkbox elements",
    { tag: "@demoQa" },
    async ({ page }) => {
      await page.locator('//button[@aria-label="Expand all"]').click();
      await page
        .locator(
          '//span[text()="WorkSpace"]/preceding-sibling::span[@class="rct-checkbox"]'
        )
        .check();
      await page
        .locator(
          '//span[text()="Public"]/preceding-sibling::span[@class="rct-checkbox"]'
        )
        .check();
      await page.locator('//button[@aria-label="Collapse all"]').click();
    }
  );
});
