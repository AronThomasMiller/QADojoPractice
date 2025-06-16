import { Locator, Page } from "@playwright/test";

export class SignUpPage {
  page: Page;
  usernameInput: Locator;
  emailInput: Locator;
  passwordInput: Locator;
  signUpButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.getByRole("textbox", { name: "Username" });
    this.emailInput = page.getByRole("textbox", { name: "Email" });
    this.passwordInput = page.getByRole("textbox", { name: "Password" });
    this.signUpButton = page.getByRole("button", { name: "Sign up" });
  }

  async registerUniqueUserAndSignUp(): Promise<{ username: string; email: string; password: string }> {
    const timestamp = Date.now();
    const username = `user${timestamp}`;
    const email = `user${timestamp}@example.com`;
    const password = "password123";

    await this.signUp(username, email, password);

    return { username, email, password };
  }

  async signUp(username: string, email: string, password: string) {
    await this.usernameInput.fill(username);
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.signUpButton.click();
  }

}
