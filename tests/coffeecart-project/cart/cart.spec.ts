import { test, expect } from "@playwright/test";

test.describe("Cart page tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://coffee-cart.app/");
  });

  test(
    "[Test_Id-3] - Verify user can remove items from cart",
    { tag: "@coffee" },
    async ({ page }) => {
      await page.locator('[data-test="Espresso"]').click();
      await page.locator('[data-test="Espresso_Macchiato"]').click();
      await page.locator('a[href="/cart"]').click();
      await page.locator(".delete").first().click();
      await expect(page.locator('[aria-label="Cart page"]')).toContainText(
        "cart (1)"
      );
    }
  );

  test(
    "[Test_Id-5] - Verify empty cart state displays correctly",
    { tag: "@coffee" },
    async ({ page }) => {
      await page.locator('a[href="/cart"]').click();
      await expect(page.locator('[aria-label="Cart page"]')).toContainText(
        "cart (0)"
      );
      await expect(page.locator("text=No coffee, go add some.")).toBeVisible();
    }
  );
});
