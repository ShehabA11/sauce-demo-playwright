import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { InventoryPage } from '../pages/inventory.page';

// التست: التحقق إن ترتيب المنتجات بالسعر (من الأقل للأعلى) شغال صح
test('Verify product sorting by price (low to high)', async ({ page }) => {
  const loginPage = new LoginPage(page);       // نعمل instance لصفحة اللوجين
  const inventoryPage = new InventoryPage(page); // نعمل instance لصفحة الـ Inventory

  // 1. تسجيل الدخول
  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');

  // 2. ننتظر dropdown بتاع الـ sorting يظهر
  await page.waitForSelector('[data-test="product-sort-container"]');

  // 3. نطبق الفلترة: السعر من الأقل للأعلى
  await inventoryPage.sortProducts('lohi');

  // 4. نجيب كل الأسعار بعد الترتيب
  const prices = await inventoryPage.getAllProductPrices();

  // 5. نعمل نسخة مرتبة من الأسعار (تصاعدي)
  const sorted = [...prices].sort((a, b) => a - b);

  // 6. نتأكد إن اللي ظاهر في الصفحة = الترتيب الصح
  expect(prices).toEqual(sorted);
});
