import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/loginPage";
import { ProductsPage } from "../pages/ProductsPage";
import { CartPage } from "../pages/CartPage";
import { CheckoutPage } from "../pages/CheckoutPage";
import { personalData } from "../utils/testData";

test("User can purchase an order", async ({ page }) => {
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
  await checkoutPage.fillInformation(personalData.firstname, personalData.lastname, personalData.zipCode);
  const checkoutProduct = await checkoutPage.getCheckoutItemName();
  expect(checkoutProduct).toBe(selectedProduct);
  await checkoutPage.clickFinishButton();
  await expect((checkoutPage.successOrderCompleteMessage)).toContainText('Thank you for your order!')
});