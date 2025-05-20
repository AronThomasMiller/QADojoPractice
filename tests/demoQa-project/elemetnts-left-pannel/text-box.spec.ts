import { test } from "@playwright/test";

test.describe("Test text-box elements", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://demoqa.com/text-box");
  });

  test(
    "[Test_Id-17] - Test text-box elements",
    { tag: "@demoQa" },
    async ({ page }) => {
      await page.locator('//input[@id="userName"]').fill("John");
      await page.locator('//input[@id="userEmail"]').fill("John@gmail.com");
      await page.locator('//textarea[@id="currentAddress"]').fill("1234");
      await page.locator('//textarea[@id="permanentAddress"]').fill("12345");
      await page.locator('//button[@id="submit"]').click();
    }
  );
});
