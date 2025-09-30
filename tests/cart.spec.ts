import { test } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { InventoryPage } from '../pages/inventory.page';
import { CartPage } from '../pages/cart.page';

// قبل كل تست: نفتح صفحة اللوجين ونسجّل دخول بحساب صحيح
test.beforeEach(async ({ page }) => {
  const loginPage = new LoginPage(page); // نعمل instance من صفحة اللوجين
  await loginPage.goto(); // نفتح صفحة اللوجين
  await loginPage.login('standard_user', 'secret_sauce'); // نسجل الدخول باليوزر والباسورد
});

// التست الأول: التأكد أن المنتج موجود في الكارت بعد إضافته
test('Verify product in cart', async ({ page }) => {
  const inventoryPage = new InventoryPage(page); // نعمل instance من صفحة المنتجات
  const cartPage = new CartPage(page); // نعمل instance من صفحة الكارت

  await inventoryPage.addBackpackToCart(); // نضيف الـ Backpack للكارت
  await inventoryPage.goToCart(); // نروح لصفحة الكارت
  await cartPage.verifyBackpackInCart(); // نتأكد أن الـ Backpack موجود فعلاً في الكارت
});

// التست الثاني: إزالة المنتج من الكارت بعد إضافته
test('Remove product from cart', async ({ page }) => {
  const inventoryPage = new InventoryPage(page); // نعمل instance من صفحة المنتجات
  const cartPage = new CartPage(page); // نعمل instance من صفحة الكارت

  await inventoryPage.addBackpackToCart(); // نضيف الـ Backpack للكارت
  await inventoryPage.goToCart(); // نروح لصفحة الكارت
  await cartPage.removeBackpack(); // نشيل الـ Backpack من الكارت
});
