import { expect, Locator } from "@playwright/test";
import { BasePage } from "./BasePage";

export class ArticlePage extends BasePage {
  listOfArticle = this.page.locator('[data-qa-type="preview-title"]');

  private tagLocator(tag: string): Locator {
    return this.page.locator(`.tag-list a:has-text("${tag}")`);
  }
  async clickOnFirstArticle() {
    await this.listOfArticle.first().click();
  }

  async verifyTagIsVisible(tagName: string) {
    await expect(this.tagLocator(tagName)).toBeVisible();
  }
}
