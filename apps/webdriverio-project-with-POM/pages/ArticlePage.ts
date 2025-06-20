import { expect, Locator, Page } from "@playwright/test";

export class ArticlePage {
  page: Page;
  listOfArticle: Locator;


  constructor(page: Page) {
    this.page = page;
    this.listOfArticle = this.page.locator('[data-qa-type="preview-title"]');
  }

  async clickOnFirstArticle() {
    await this.listOfArticle.first().click();
  }

  async verifyTagIsVisible(tagName: string) {
    await expect(
      this.page.locator(`.tag-list a:has-text("${tagName}")`)
    ).toBeVisible();
  }
}
