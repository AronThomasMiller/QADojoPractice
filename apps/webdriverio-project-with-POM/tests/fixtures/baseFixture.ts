import { test as base, expect } from "@playwright/test";
import fs from "fs";
import { SignUpPage } from "../../pages/SignUpPage";
import { ArticlePage } from "../../pages/ArticlePage";
import { HomePage } from "../../pages/HomePage";
import { AUTH_PATHS } from "../../utils/authPaths";
import { generateRandomUser } from "../../utils/userGenerator";
import { NavBarPage } from "../../pages/NavBarPage";

type Pages = {
  articlePage: ArticlePage;
  homePage: HomePage;
  signUpPage: SignUpPage;
  username: string;
  navBarPage: NavBarPage;
};

export const test = base.extend<Pages>({
  storageState: async ({ browser }, use) => {
    fs.mkdirSync(AUTH_PATHS.DIR, { recursive: true });

    const isStorageExists =
      fs.existsSync(AUTH_PATHS.STATE) && fs.existsSync(AUTH_PATHS.USER);

    if (!isStorageExists) {
      const page = await browser.newPage();
      const user = generateRandomUser();
      await page.goto("https://demo.learnwebdriverio.com/register");
      const signUpPage = new SignUpPage(page);
      await signUpPage.signUp(user.username, user.email, user.password);
      await expect(page.locator(".navbar")).toContainText(user.username);
      await page.context().storageState({ path: AUTH_PATHS.STATE });
      fs.writeFileSync(AUTH_PATHS.USER, JSON.stringify(user, null, 2));
      await page.close();
    }
    await use(AUTH_PATHS.STATE);
  },

  context: async ({ browser, storageState }, use) => {
    const context = await browser.newContext({ storageState });
    await use(context);
    await context.close();
  },

  page: async ({ context }, use) => {
    const page = await context.newPage();
    await use(page);
  },

  username: async ({}, use) => {
    const user = JSON.parse(fs.readFileSync(AUTH_PATHS.USER, "utf-8"));
    await use(user.username);
  },

  signUpPage: async ({ page }, use) => {
    await use(new SignUpPage(page));
  },

  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },

  articlePage: async ({ page }, use) => {
    await use(new ArticlePage(page));
  },

  navBarPage: async ({ page }, use) => {
    await use(new NavBarPage(page));
  },
});
