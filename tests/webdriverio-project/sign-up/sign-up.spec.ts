import { test, expect } from "@playwright/test";

test.describe("SignUp Page Tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://demo.learnwebdriverio.com/register");
  });

  test(
    "[Test_Id-11] - Should display registration form with all required fields",
    { tag: "@webdriverio" },
    async ({ page }) => {
      await expect(
        page.getByRole("heading", { name: "Sign up" })
      ).toContainText("Sign up");
      await expect(
        page.getByRole("textbox", { name: "Username" })
      ).toBeVisible();
      await expect(page.getByRole("textbox", { name: "Email" })).toBeVisible();
      await expect(
        page.getByRole("textbox", { name: "Password" })
      ).toBeVisible();
      await expect(page.getByRole("button", { name: "Sign up" })).toBeVisible();
    }
  );

  test(
    "[Test_Id-12] - Should show error when submitting empty registration form",
    { tag: "@webdriverio" },
    async ({ page }) => {
      await page.getByRole("button", { name: "Sign up" }).click();
      await expect(page.getByText("username can't be blank")).toContainText(
        "username can't be blank"
      );
      await expect(page.getByText("email can't be blank")).toContainText(
        "email can't be blank"
      );
      await expect(page.getByText("password can't be blank")).toContainText(   //На сторінці реєстрації є баг, немає валідації паролю, користувач може зареєструватись без паролю
        "password can't be blank"
      );
    }
  );

  test(
    "[Test_Id-13] - Should show error when using invalid email format",
    { tag: "@webdriverio" },
    async ({ page }) => {
      await page.getByRole("textbox", { name: "Username" }).fill("testuser");
      await page.getByRole("textbox", { name: "Email" }).fill("invalid-email");
      await page.getByRole("textbox", { name: "Password" }).fill("test123");
      await page.getByRole("button", { name: "Sign up" }).click();
      await expect(page.getByText("email is invalid")).toContainText(
        "email is invalid"
      );
    }
  );

  test(
    "[Test_Id-14] - Should successfully register with valid credentials",
    { tag: "@webdriverio" },
    async ({ page }) => {
      const timestamp = Date.now();
      const username = `user${timestamp}`;
      const email = `user${timestamp}@example.com`;

      await page.getByRole("textbox", { name: "Username" }).fill(username);
      await page.getByRole("textbox", { name: "Email" }).fill(email);
      await page.getByRole("textbox", { name: "Password" }).fill("password123");
      await page.getByRole("button", { name: "Sign up" }).click();

      await expect(page).toHaveURL("https://demo.learnwebdriverio.com/");
      await expect(page.locator(".navbar")).toContainText(username);
    }
  );

  test(
    "[Test_Id-15] - Should show error when registering with existing username",
    { tag: "@webdriverio" },
    async ({ page }) => {
      await page.getByRole("textbox", { name: "Username" }).fill("testuser");
      await page
        .getByRole("textbox", { name: "Email" })
        .fill("newemail@example.com");
      await page.getByRole("textbox", { name: "Password" }).fill("test123");
      await page.getByRole("button", { name: "Sign up" }).click();
      await expect(page.getByText("username is already taken.")).toContainText(
        "username is already taken."
      );
      await expect(page.getByText("email is already taken.")).toContainText(
        "email is already taken."
      );
    }
  );
});