import { Locator, Page } from "@playwright/test";

export class LoginPage {
  page: Page;
  usernameField: Locator;
  passwordField: Locator;
  loginButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameField = this.page.locator('[data-test="username"]');
    this.passwordField = this.page.locator('[data-test="password"]');
    this.loginButton = this.page.locator('[data-test="login-button"]');
  }

  async loginInAccount() {
    await this.usernameField.fill("standard_user");
    await this.passwordField.fill("secret_sauce");
    await this.loginButton.click();
  }
}
