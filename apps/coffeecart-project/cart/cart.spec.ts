//xPath + const

import { test, expect } from "@playwright/test";

test.describe("Cart page tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://coffee-cart.app/");
  });

  test(
    "[Test_Id-3] - Verify user can remove items from cart",
    { tag: "@coffee" },
    async ({ page }) => {
      const espresso = page.locator('//div[@data-test="Espresso"]');
      const espressoMacchiato = page.locator('//div[@data-test="Espresso_Macchiato"]');
      const cartLink = page.locator('//a[@href="/cart"]');
      const deleteButton = page.locator('//button[contains(@class, "delete") and @aria-label]').first();
      const cartPage = page.locator('//*[@aria-label="Cart page"]');

      await espresso.click();
      await espressoMacchiato.click();
      await cartLink.click();
      await deleteButton.click();

      await expect(cartPage).toContainText("cart (1)");
    }
  );

  test(
    "[Test_Id-5] - Verify empty cart state displays correctly",
    { tag: "@coffee" },
    async ({ page }) => {
      const cartLink = page.locator('//a[@href="/cart"]');
      const cartPage = page.locator('//*[@aria-label="Cart page"]');
      const emptyMessage = page.locator('//*[text()="No coffee, go add some."]');

      await cartLink.click();
      await expect(cartPage).toContainText("cart (0)");
      await expect(emptyMessage).toBeVisible();
    }
  );
});
