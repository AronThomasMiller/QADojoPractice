import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/loginPage";
import { ProductsPage } from "../pages/ProductsPage";
import { CartPage } from "../pages/cartPage";
import { CheckoutPage } from "../pages/CheckoutPage";

test("Verify that the user can purchase an order", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");
  const loginPage = new LoginPage(page);
  const productsPage = new ProductsPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);

  await loginPage.loginInAccount();
  const selectedProduct = await productsPage.addFirstProductToCart();
  await productsPage.goToCart();
  const cartProduct = await cartPage.getCartItemName();
  expect(cartProduct).toBe(selectedProduct);
  await cartPage.goToCheckout();
  await checkoutPage.fillInformation("Test", "Testovich", "12345");
  const checkoutProduct = await checkoutPage.getCheckoutItemName();
  expect(checkoutProduct).toBe(selectedProduct);
  await checkoutPage.verifySuccessMessage();
});