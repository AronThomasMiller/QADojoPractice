//xPath + const

import { test, expect } from "@playwright/test";

test.describe("Main page tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://coffee-cart.app/");
  });

  test(
    "[Test_Id-1] - Add coffee to cart and verify cart count",
    { tag: "@coffe" },
    async ({ page }) => {
      const espresso = page.locator('//div[@data-test="Espresso"]');
      const cartPage = page.locator('//*[@aria-label="Cart page"]');

      await espresso.click();
      await expect(cartPage).toContainText("cart (1)");
    }
  );

  test(
    "[Test_Id-4] - Verify discount extra cup flow works correctly",
    { tag: "@coffe" },
    async ({ page }) => {
      const espressoMacchiato = page.locator('//div[@data-test="Espresso_Macchiato"]');
      const cappuccino = page.locator('//div[@data-test="Cappuccino"]');
      const mocha = page.locator('//div[@data-test="Mocha"]');
      const cartPage = page.locator('//*[@aria-label="Cart page"]');
      const yesButton = page.locator('//button[contains(text(), "Yes, of course!")]');
      const cartLink = page.locator('//a[@aria-label="Cart page"]');
      const discountedMocha = page.locator('//li[contains(., "(Discounted) Mocha")]//span[contains(@class, "unit-desc") and contains(text(), "$4.00 x 1")]');

      await espressoMacchiato.click();
      await cappuccino.click();
      await mocha.click();

      await expect(
        page.locator('//body//*[contains(text(), "It\'s your lucky day! Get an extra cup of Mocha")]')
      ).toBeVisible();

      await expect(cartPage).toContainText("cart (3)");
      await yesButton.click();
      await expect(cartPage).toContainText("cart (4)");
      await cartLink.click();
      await expect(discountedMocha).toBeVisible();
    }
  );
});
