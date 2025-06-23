import { personalData } from "../utils/testData";
import { test } from "./fixtures/baseFixture";
import { expect } from "@playwright/test";

test("User can purchase an order", async ({
  loginPage,
  productsPage,
  cartPage,
  checkoutPage,
}) => {
  await test.step("Log in with valid credentials", async () => {
    await loginPage.loginInAccount();
  });

  let selectedProduct: string;
  await test.step("Add first product to the cart", async () => {
    selectedProduct = await productsPage.addFirstProductToCart();
  });

  await test.step("Go to the cart page", async () => {
    await productsPage.goToCart();
  });

  await test.step("Verify that the correct product is in the cart", async () => {
    const cartProduct = await cartPage.getCartItemName();
    expect(cartProduct).toBe(selectedProduct);
  });

  await test.step("Go to the checkout page", async () => {
    await cartPage.goToCheckout();
  });

  await test.step("Fill in personal information at checkout", async () => {
    await checkoutPage.fillInformation(
      personalData.firstName,
      personalData.lastName,
      personalData.zipCode
    );
  });

  await test.step("Verify that the correct product is shown at checkout", async () => {
    const checkoutProduct = await checkoutPage.getCheckoutItemName();
    expect(checkoutProduct).toBe(selectedProduct);
  });

  await test.step("Click the finish button to complete the order", async () => {
    await checkoutPage.clickFinishButton();
  });

  await test.step("Verify that the order was successfully completed", async () => {
    await expect(checkoutPage.successOrderCompleteMessage).toContainText(
      "Thank you for your order!"
    );
  });
});
