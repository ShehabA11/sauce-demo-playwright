import { test } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { InventoryPage } from '../pages/inventory.page';

// قبل كل تست: تسجيل الدخول بحساب صحيح
test.beforeEach(async ({ page }) => {
  const loginPage = new LoginPage(page); // نعمل instance لصفحة اللوجين
  await loginPage.goto(); // نفتح صفحة اللوجين
  await loginPage.login('standard_user', 'secret_sauce'); // نسجل الدخول باليوزر والباسورد
});

// التست: إضافة Backpack للكارت من صفحة الإنفنتوري
test('Add Backpack to cart from inventory page', async ({ page }) => {
  const inventoryPage = new InventoryPage(page); // صفحة الإنفنتوري (المنتجات)

  await inventoryPage.addBackpackToCart(); // نضغط على زر Add to Cart للـ Backpack
  await inventoryPage.goToCart(); // نروح لصفحة الكارت للتأكد إن المنتج اتضاف
});
