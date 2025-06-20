//Codegen

import { test, expect } from "@playwright/test";

test.describe("SignIn Navigation Test", () => {
  test(
    '[Test_Id-16] - Should navigate to login page when clicking "Have an account?" link',
    { tag: "@webdriverio" },
    async ({ page }) => {
      await page.goto("https://demo.learnwebdriverio.com/register");
      await page.getByRole("link", { name: "Have an account?" }).click();
      await expect(page).toHaveURL("https://demo.learnwebdriverio.com/login");
      await expect(
        page.getByRole("heading", { name: "Sign in" })
      ).toContainText("Sign in");
    }
  );
});