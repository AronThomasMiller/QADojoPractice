import { Locator, Page } from "@playwright/test";
import { loginUserData} from "../utils/testData";
import { log } from "console";

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
    await this.usernameField.fill(loginUserData.username_standard_user);
    await this.passwordField.fill(loginUserData.password);
    await this.loginButton.click();
  }
}
