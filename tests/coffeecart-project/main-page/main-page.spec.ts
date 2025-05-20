// import { test, expect } from "@playwright/test";

// test.describe("Main page tests", () => {
//   test.beforeEach(async ({ page }) => {
//     await page.goto("https://coffee-cart.app/");
//   });

//   test(
//     "[Test_Id-1] - Add coffee to cart and verify cart count",
//     { tag: "@coffe" },
//     async ({ page }) => {
//       await page.locator('[data-test="Espresso"]').click();
//       await expect(page.getByLabel("Cart page")).toContainText("cart (1)");
//     }
//   );

//   test(
//     "[Test_Id-4] - Verify discount extra cup flow works correctly",
//     { tag: "@coffe" },
//     async ({ page }) => {
//       await page.locator('[data-test="Espresso_Macchiato"]').click();
//       await page.locator('[data-test="Cappuccino"]').click();
//       await page.locator('[data-test="Mocha"]').click();
//       await expect(
//         page.getByText(
//           "It's your lucky day! Get an extra cup of Mocha for $4.espressochocolate"
//         )
//       ).toBeVisible();
//       await expect(page.getByLabel("Cart page")).toContainText("cart (3)");
//       await page.getByRole("button", { name: "Yes, of course!" }).click();
//       await expect(page.getByLabel("Cart page")).toContainText("cart (4)");
//       await page.getByRole("link", { name: "Cart page" }).click();
//       await expect(
//         page.locator("div").filter({ hasText: /^\(Discounted\) Mocha$/ })
//       ).toBeVisible();
//       await expect(page.locator("#app")).toContainText("$4.00");
//     }
//   );
// });

import { test, expect } from "@playwright/test";

test.describe("Main page tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://coffee-cart.app/");
  });

  test(
    "[Test_Id-1] - Add coffee to cart and verify cart count",
    { tag: "@coffe" },
    async ({ page }) => {
      await page.locator('[data-test="Espresso"]').click();
      await expect(page.locator('[aria-label="Cart page"]')).toContainText(
        "cart (1)"
      );
    }
  );

  test(
    "[Test_Id-4] - Verify discount extra cup flow works correctly",
    { tag: "@coffe" },
    async ({ page }) => {
      await page.locator('[data-test="Espresso_Macchiato"]').click();
      await page.locator('[data-test="Cappuccino"]').click();
      await page.locator('[data-test="Mocha"]').click();
      await expect(
        page
          .locator("body")
          .locator(
            ":text('It\\'s your lucky day! Get an extra cup of Mocha for $4.espressochocolate')"
          )
      ).toBeVisible();
      await expect(page.locator('[aria-label="Cart page"]')).toContainText(
        "cart (3)"
      );
      await page.locator('button:has-text("Yes, of course!")').click();
      await expect(page.locator('[aria-label="Cart page"]')).toContainText(
        "cart (4)"
      );
      await page.locator('a[aria-label="Cart page"]').click();
      await expect(
        page.locator("div").filter({ hasText: /^\(Discounted\) Mocha$/ })
      ).toBeVisible();
      await expect(page.locator("#app")).toContainText("$4.00");
    }
  );
});
