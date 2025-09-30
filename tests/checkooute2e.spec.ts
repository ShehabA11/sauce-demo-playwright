// import { test } from '@playwright/test';
// import { LoginPage } from '../pages/login.page';
// import { InventoryPage } from '../pages/inventory.page';
// import { CartPage } from '../pages/cart.page';
// import { CheckoutPage } from '../pages/checkout.page';
// import { MenuPage } from '../pages/menu.page';

// test('Sauce Demo Full Flow - Clean POM', async ({ page }) => {
//   // إنشاء كائنات من الكلاسات الخاصة بالصفحات
//   const loginPage = new LoginPage(page);
//   const inventoryPage = new InventoryPage(page);
//   const cartPage = new CartPage(page);
//   const checkoutPage = new CheckoutPage(page);
//   const menuPage = new MenuPage(page);

//   // تسجيل الدخول
//   await loginPage.goto();
//   await loginPage.login('standard_user', 'secret_sauce');

//   // إضافة المنتج إلى الكارت
//   await inventoryPage.addBackpackToCart();
//   await inventoryPage.goToCart();

//   // التحقق من المنتج والبدء في Checkout
//   await cartPage.verifyBackpackInCart();
//   await cartPage.checkout();

//   // ملأ بيانات الـ Checkout
//   await checkoutPage.fillCheckoutInfo('Test', 'Scenario', '3526');
//   await checkoutPage.continueCheckout();

//   // إلغاء Checkout والرجوع للصفحة السابقة
//   await checkoutPage.cancelCheckout();

//   // العودة للكارت وحذف المنتج
//   await inventoryPage.goToCart();
//   await cartPage.removeBackpack();

//   // تسجيل الخروج
//   await menuPage.logout();
// });
