import { Locator, Page } from "@playwright/test";

export class HomePage {
  page: Page;
  yourFeedTab: Locator;
  globalFeedTab: Locator;
  firstTag: Locator;

  constructor(page: Page) {
    this.page = page;
    this.yourFeedTab = this.page.getByRole("link", { name: "Your Feed" });
    this.globalFeedTab = this.page.getByRole("link", { name: "Global Feed" });
    this.firstTag = this.page.locator(
      "//div[@class='tag-list']/a[contains(@class, 'tag-pill')]"
    );
  }

  async clickYourFeed() {
    await this.yourFeedTab.click();
  }

  async clickGlobalFeed() {
    await this.globalFeedTab.click();
  }

  async clickOnFirstTag() {
    await this.firstTag.first().click();
  }

  async getFirstTagText(): Promise<string> {
    return (await this.firstTag.first().textContent())?.trim() || "";
  }
}
