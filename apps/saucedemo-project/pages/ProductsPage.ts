import { Locator, Page } from "@playwright/test";

export class ProductsPage {
  page: Page;
  itemNames: Locator;
  addToCartButtons: Locator;
  cartLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.itemNames = page.locator(".inventory_item_name");
    this.addToCartButtons = page.locator("button.btn_inventory");
    this.cartLink = page.locator(".shopping_cart_link");
  }

  async addFirstProductToCart(): Promise<string> {
    const productName = await this.itemNames.first().innerText();
    await this.addToCartButtons.first().click();
    return productName;
  }

  async goToCart() {
    await this.cartLink.click();
  }
}
