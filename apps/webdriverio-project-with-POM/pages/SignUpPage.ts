import { BasePage } from "./BasePage";

export class SignUpPage extends BasePage {
  userNameInput = this.page.getByRole("textbox", { name: "Username" });
  emailInput = this.page.getByRole("textbox", { name: "Email" });
  passwordInput = this.page.getByRole("textbox", { name: "Password" });
  signUpButton = this.page.getByRole("button", { name: "Sign up" });

  async signUp(username: string, email: string, password: string) {
    await this.userNameInput.fill(username);
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.signUpButton.click();
  }
}
