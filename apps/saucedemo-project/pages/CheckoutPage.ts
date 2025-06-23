import { Locator, Page } from "@playwright/test";

export class CheckoutPage {
  page: Page;
  firstNameField: Locator;
  lastNameField: Locator;
  postalCodeField: Locator;
  continueButton: Locator;
  checkOutItemName: Locator;
  finishButton: Locator;
  successOrderCompleteMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.firstNameField = this.page.locator('[data-test="firstName"]');
    this.lastNameField = this.page.locator('[data-test="lastName"]');
    this.postalCodeField = this.page.locator('[data-test="postalCode"]');
    this.continueButton = this.page.locator('[data-test="continue"]');
    this.checkOutItemName = this.page.locator(".inventory_item_name");
    this.finishButton = this.page.locator('[data-test="finish"]');
    this.successOrderCompleteMessage = this.page.locator('[data-test="complete-header"]');
  }

  async fillInformation(firstName: string, lastName: string, zip: string) {
    await this.firstNameField.fill(firstName);
    await this.lastNameField.fill(lastName);
    await this.postalCodeField.fill(zip);
    await this.continueButton.click();
  }

  async getCheckoutItemName(): Promise<string> {
    return await this.checkOutItemName.innerText();
  }

  async clickFinishButton() {
    await this.finishButton.click();
  }
}
