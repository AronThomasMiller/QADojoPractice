// import { test, expect } from "@playwright/test";

// test.describe("Checkout flow tests", () => {
//   test.beforeEach(async ({ page }) => {
//     await page.goto("https://coffee-cart.app/");
//   });

//   test(
//     "[Test_Id-2] - Verify complete coffee purchase flow works correctly",
//     { tag: "@coffe" },
//     async ({ page }) => {
//       await page.locator('[data-test="Espresso"]').click();
//       await page.locator('[data-test="checkout"]').click();
//       await page.getByRole("textbox", { name: "Name" }).fill("max");
//       await page.getByRole("textbox", { name: "Email" }).fill("max@gmail.com");
//       await page.getByRole("button", { name: "Submit" }).click();
//       await expect(
//         page.getByRole("button", { name: "Thanks for your purchase." })
//       ).toBeVisible();
//       await expect(page.getByLabel("Cart page")).toContainText("cart (0)");
//     }
//   );
// });

import { test, expect } from "@playwright/test";

test.describe("Checkout flow tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://coffee-cart.app/");
  });

  test(
    "[Test_Id-2] - Verify complete coffee purchase flow works correctly",
    { tag: "@coffe" },
    async ({ page }) => {
      await page.locator('[data-test="Espresso"]').click();
      await page.locator('[data-test="checkout"]').click();
      await page.locator('input[name="name"]').fill("max");
      await page.locator('input[name="email"]').fill("max@gmail.com");
      await page.locator('button[type="submit"]').click();
      await expect(page.locator("div.snackbar.success")).toHaveText(
        "Thanks for your purchase. Please check your email for payment."
      );
      await expect(page.locator('[aria-label="Cart page"]')).toContainText(
        "cart (0)"
      );
    }
  );
});
