import { Locator, Page } from "@playwright/test";

export class CartPage {
  page: Page;
  cartItemName: Locator;
  checkoutButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.cartItemName = this.page.locator(".inventory_item_name");
    this.checkoutButton = this.page.locator('[data-test="checkout"]');
  }

  async getCartItemName(): Promise<string> {
    return await this.cartItemName.innerText();
  }

  async goToCheckout() {
    await this.checkoutButton.click();
  }
}
