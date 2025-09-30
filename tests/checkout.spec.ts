import { test } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { InventoryPage } from '../pages/inventory.page';
import { CartPage } from '../pages/cart.page';
import { CheckoutPage } from '../pages/checkout.page';

// قبل كل تست: تسجيل الدخول بحساب صحيح
test.beforeEach(async ({ page }) => {
  const loginPage = new LoginPage(page); // نعمل instance لصفحة اللوجين
  await loginPage.goto(); // نفتح صفحة اللوجين
  await loginPage.login('standard_user', 'secret_sauce'); // نسجل الدخول باليوزر والباسورد
});

// التست الأول: ملء بيانات الشيك آوت والاستمرار
test('Fill checkout form and continue', async ({ page }) => {
  const inventoryPage = new InventoryPage(page); // صفحة المنتجات
  const cartPage = new CartPage(page); // صفحة الكارت
  const checkoutPage = new CheckoutPage(page); // صفحة الشيك آوت

  await inventoryPage.addBackpackToCart(); // نضيف المنتج للكارت
  await inventoryPage.goToCart(); // نروح لصفحة الكارت
  await cartPage.checkout(); // نضغط على زر Checkout
  await checkoutPage.fillCheckoutInfo('Test', 'User', '12345'); // نملأ بيانات الشيك آوت (FirstName, LastName, PostalCode)
  await checkoutPage.continueCheckout(); // نضغط Continue ونكمل العملية
});

// التست الثاني: إلغاء عملية الشيك آوت والرجوع لصفحة المنتجات
test('Cancel checkout and return to inventory', async ({ page }) => {
  const inventoryPage = new InventoryPage(page); // صفحة المنتجات
  const cartPage = new CartPage(page); // صفحة الكارت
  const checkoutPage = new CheckoutPage(page); // صفحة الشيك آوت

  await inventoryPage.addBackpackToCart(); // نضيف المنتج للكارت
  await inventoryPage.goToCart(); // نروح لصفحة الكارت
  await cartPage.checkout(); // نضغط على زر Checkout
  await checkoutPage.cancelCheckout(); // نلغي الشيك آوت ونرجع للإنفنتوري
});
