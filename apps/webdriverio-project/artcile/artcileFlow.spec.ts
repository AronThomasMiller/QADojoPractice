// import { test, expect } from "@playwright/test";

// test.describe("SignUp Page", () => {
//   test.beforeEach(async ({ page }) => {
//     await page.goto("https://demo.learnwebdriverio.com/register");
//   });

//   test(
//     "[Test_Id-20] - Verify article creation flow",
//     { tag: "@webdriverio" },
//     async ({ page }) => {
//       const timestamp = Date.now();
//       const username = `user${timestamp}`;
//       const email = `user${timestamp}@example.com`;
//       const password = "password123";
//       const openUserProfile = page.getByRole("navigation").getByRole("link", { name: "user" }); 
    

//       await page.getByRole("textbox", { name: "Username" }).fill(username);
//       await page.getByRole("textbox", { name: "Email" }).fill(email);
//       await page.getByRole("textbox", { name: "Password" }).fill(password);
//       await page.getByRole("button", { name: "Sign up" }).click();
//       await expect(page).toHaveURL("https://demo.learnwebdriverio.com/");
//       await expect(page.locator(".navbar")).toContainText(username);

//       for (let i = 1; i <= 3; i++) {
//         await page.getByRole("link", { name: "New Article" }).click();
//         await page.getByRole("textbox", { name: "Article Title" }).fill(`article ${i}`);
//         await page.getByRole("textbox", { name: "What's this article about?" }).fill("test");
//         await page.getByRole("textbox", { name: "Write your article (in" }).fill(`article ${i}`);
//         await page.getByRole("textbox", { name: "Enter tags" }).fill("article");
//         await page.getByRole("button", { name: "Publish Article" }).click();
//         await page.goto("https://demo.learnwebdriverio.com/");
//       }

//       await expect(openUserProfile).toBeVisible();
//       await openUserProfile.click();

//       for (let i = 1; i <= 3; i++) {
//         await expect(page.getByRole("link", { name: `article ${i}` }).first()).toBeVisible();
//       }
//     }
//   );
// });


import { test, expect, Page } from "@playwright/test";

test.describe("SignUp Page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://demo.learnwebdriverio.com/register");
  });

  const usernameInput = (page: Page) => page.getByRole("textbox", { name: "Username" });
  const emailInput = (page: Page) => page.getByRole("textbox", { name: "Email" });
  const passwordInput = (page: Page) => page.getByRole("textbox", { name: "Password" });
  const signUpButton = (page: Page) => page.getByRole("button", { name: "Sign up" });
  const newArticleLink = (page: Page) => page.getByRole("link", { name: "New Article" });
  const articleTitleInput = (page: Page) => page.getByRole("textbox", { name: "Article Title" });
  const articleAboutInput = (page: Page) => page.getByRole("textbox", { name: "What's this article about?" });
  const articleContentInput = (page: Page) => page.getByRole("textbox", { name: "Write your article (in" });
  const articleTagsInput = (page: Page) => page.getByRole("textbox", { name: "Enter tags" });
  const publishArticleButton = (page: Page) => page.getByRole("button", { name: "Publish Article" });
  const userProfileLink = (page: Page, username: string) => page.getByRole("navigation").getByRole("link", { name: username });
  const articleLink = (page: Page, title: string) => page.getByRole("link", { name: title }).first();
 
  async function signUp(page: Page, username: string, email: string, password: string) {
    await usernameInput(page).fill(username);
    await emailInput(page).fill(email);
    await passwordInput(page).fill(password);
    await signUpButton(page).click();
    await expect(page).toHaveURL("https://demo.learnwebdriverio.com/");
    await expect(page.locator(".navbar")).toContainText(username);
  }

  async function createArticle(page: Page, title: string) {
    await newArticleLink(page).click();
    await articleTitleInput(page).fill(title);
    await articleAboutInput(page).fill("test");
    await articleContentInput(page).fill(title);
    await articleTagsInput(page).fill("article");
    await publishArticleButton(page).click();
    await page.goto("https://demo.learnwebdriverio.com/");
  }

  test(
    "[Test_Id-20] - Verify article creation flow",
    { tag: "@webdriverio" },
    async ({ page }) => {
      const timestamp = Date.now();
      const username = `user${timestamp}`;
      const email = `user${timestamp}@example.com`;
      const password = "password123";

      await signUp(page, username, email, password);

      for (let i = 1; i <= 3; i++) {
        await createArticle(page, `article ${i}`);
      }

      const profile = userProfileLink(page, username);
      await expect(profile).toBeVisible();
      await profile.click();

      for (let i = 1; i <= 3; i++) {
        await expect(articleLink(page, `article ${i}`)).toBeVisible();
      }
    }
  );
});
