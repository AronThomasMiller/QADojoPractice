import { test as base } from "@playwright/test";
import { LoginPage } from "../../pages/loginPage";
import { ProductsPage } from "../../pages/ProductsPage";
import { CheckoutPage } from "../../pages/CheckoutPage";
import { CartPage } from "../../pages/CartPage";

type Pages = {
  loginPage: LoginPage;
  productsPage: ProductsPage;
  cartPage: CartPage;
  checkoutPage: CheckoutPage;
};
export const test = base.extend<Pages>({
  page: async ({ page }, use) => {
    await page.goto("https://www.saucedemo.com/");
    await use(page);
  },
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  productsPage: async ({ page }, use) => {
    await use(new ProductsPage(page));
  },
  cartPage: async ({ page }, use) => {
    await use(new CartPage(page));
  },
  checkoutPage: async ({ page }, use) => {
    await use(new CheckoutPage(page));
  },
});
