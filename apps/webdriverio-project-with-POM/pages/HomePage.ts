import { BasePage } from "./BasePage";

export class HomePage extends BasePage {
  yourFeedTab = this.page.getByRole("link", { name: "Your Feed" });
  globalFeedTab = this.page.getByRole("link", { name: "Global Feed" });
  firstTag = this.page.locator("//div[@class='tag-list']/a[contains(@class, 'tag-pill')]");

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
