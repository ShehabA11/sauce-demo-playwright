import { test } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { InventoryPage } from '../pages/inventory.page';
import { CartPage } from '../pages/cart.page';
import { CheckoutPage } from '../pages/checkout.page';
import { MenuPage } from '../pages/menu.page';



test('Sauce Demo Full Flow - Clean POM', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);
  const menuPage = new MenuPage(page);

  // 🔹 Login
  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');

  // 🔹 Add product
  await inventoryPage.addBackpackToCart();
  await inventoryPage.goToCart();

  // 🔹 Verify + Checkout
  await cartPage.verifyBackpackInCart();
  await cartPage.checkout();

  // 🔹 Fill checkout data
  await checkoutPage.fillCheckoutInfo('Test', 'Scenario', '3526');
  await checkoutPage.continueCheckout();

  // 🔹 Cancel and return to inventory
  await checkoutPage.cancelCheckout();

  // 🔹 Go back to cart and remove product
  await inventoryPage.goToCart();
  await cartPage.removeBackpack();

  // 🔹 Logout
  await menuPage.logout();
});
