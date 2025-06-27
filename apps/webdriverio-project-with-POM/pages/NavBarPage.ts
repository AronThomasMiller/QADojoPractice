import { expect } from "@playwright/test";
import { BasePage } from "./BasePage";

export class NavBarPage extends BasePage {
  nav = this.page.locator(".navbar");

  async expectUserLoggedIn(username: string) {
    await expect(this.nav).toContainText(username);
  }
}
