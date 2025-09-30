import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { InventoryPage } from '../pages/inventory.page';

// التست: إزالة المنتج مباشرة من صفحة الـ Inventory
test('Remove product directly from Inventory Page', async ({ page }) => {
  const loginPage = new LoginPage(page);      // نعمل instance لصفحة اللوجين
  const inventoryPage = new InventoryPage(page); // نعمل instance لصفحة الـ Inventory

  // 1. تسجيل الدخول
  await loginPage.goto(); 
  await loginPage.login('standard_user', 'secret_sauce');

  // 2. إضافة المنتج (Backpack)
  await page.click('[data-test="add-to-cart-sauce-labs-backpack"]'); 
  await expect(page.locator('[data-test="remove-sauce-labs-backpack"]')).toBeVisible(); // نتأكد إن زرار Remove ظهر

  // 3. إزالة المنتج من صفحة الـ Inventory
  await page.click('[data-test="remove-sauce-labs-backpack"]');

  // 4. التحقق إن زرار Add to Cart ظهر مرة تانية
  await expect(page.locator('[data-test="add-to-cart-sauce-labs-backpack"]')).toBeVisible();
});
