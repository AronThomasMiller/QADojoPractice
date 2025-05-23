//xPath + const

import { test, expect } from "@playwright/test";

test.describe("Checkout flow tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://coffee-cart.app/");
  });

  test(
    "[Test_Id-2] - Verify complete coffee purchase flow works correctly",
    { tag: "@coffe" },
    async ({ page }) => {
      const espresso = page.locator('//div[@data-test="Espresso"]');
      const checkoutButton = page.locator('//button[@data-test="checkout"]');
      const nameInput = page.locator('//input[@name="name"]');
      const emailInput = page.locator('//input[@name="email"]');
      const submitButton = page.locator('//button[@type="submit"]');
      const successSnackbar = page.locator('//div[contains(@class, "snackbar") and contains(@class, "success")]');
      const cartPage = page.locator('//*[@aria-label="Cart page"]');

      await espresso.click();
      await checkoutButton.click();
      await nameInput.fill("max");
      await emailInput.fill("max@gmail.com");
      await submitButton.click();

      await expect(successSnackbar).toHaveText(
        "Thanks for your purchase. Please check your email for payment."
      );
      await expect(cartPage).toContainText("cart (0)");
    }
  );
});
