import { expect, test } from "@playwright/test";
import { SignUpPage } from "../pages/SignUpPage";
import { HomePage } from "../pages/HomePage";
import { ArticlePage } from "../pages/ArticlePage";

test("Should show selected tag inside opened article", async ({ page }) => {
  await page.goto("https://demo.learnwebdriverio.com/register");
  const signUpPage = new SignUpPage(page);
  const homePage = new HomePage(page);
  const articlePage = new ArticlePage(page);
  
  const { username } = await signUpPage.registerUniqueUserAndSignUp();
  await expect(page).toHaveURL("https://demo.learnwebdriverio.com/");
  await expect(page.locator(".navbar")).toContainText(username);
  await homePage.clickYourFeed();
  await homePage.clickGlobalFeed();
  const selectedTag = await homePage.getFirstTagText();
  await homePage.clickOnFirstTag();
  await expect(page).toHaveURL(new RegExp(`/tag/${selectedTag}`));
  await articlePage.clickOnFirstArticle();
  await articlePage.verifyTagIsVisible(selectedTag);
});
