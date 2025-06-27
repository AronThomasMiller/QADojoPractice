import { expect } from "@playwright/test";
import { test } from "./fixtures/baseFixture";

test.describe("Article Tag Selection", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://demo.learnwebdriverio.com/");
  });
  test("Should show selected tag inside opened article", async ({
    page,
    username,
    homePage,
    articlePage,
    navBarPage,
  }) => {
    await test.step("Verify that the user is logged in", async () => {
      await navBarPage.expectUserLoggedIn(username);
    });

    await test.step("Click on 'Your Feed' tab", async () => {
      await homePage.clickYourFeed();
    });

    await test.step("Click on 'Global Feed' tab", async () => {
      await homePage.clickGlobalFeed();
    });

    let selectedTag: string;

    await test.step("Get the first tag and click on it", async () => {
      selectedTag = await homePage.getFirstTagText();
      await homePage.clickOnFirstTag();
    });

    await test.step("Verify the URL contains the selected tag", async () => {
      await expect(page).toHaveURL(new RegExp(`/tag/${selectedTag}`));
    });

    await test.step("Open the first article with the selected tag", async () => {
      await articlePage.clickOnFirstArticle();
    });

    await test.step("Verify the tag is visible inside the article", async () => {
      await articlePage.verifyTagIsVisible(selectedTag);
    });
  });
});
