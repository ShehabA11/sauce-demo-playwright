import { test } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { MenuPage } from '../pages/menu.page';

// التست: تسجيل الخروج بنجاح
test('Logout successfully', async ({ page }) => {
  const loginPage = new LoginPage(page); // نعمل instance لصفحة اللوجين
  const menuPage = new MenuPage(page);   // نعمل instance لصفحة المنيو (اللي فيها زرار اللوج آوت)

  await loginPage.goto(); // نفتح صفحة Sauce Demo
  await loginPage.login('standard_user', 'secret_sauce'); // نسجل الدخول ببيانات صحيحة
  await menuPage.logout(); // نضغط على زرار اللوج آوت ونتأكد إننا رجعنا لصفحة اللوجين
});
