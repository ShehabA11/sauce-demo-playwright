import { test } from '@playwright/test';
import { LoginPage } from '../pages/login.page';

// التست: تسجيل الدخول ببيانات صحيحة
test('Login with valid credentials', async ({ page }) => {
  const loginPage = new LoginPage(page); // نعمل instance لصفحة اللوجين

  await loginPage.goto(); // نفتح صفحة Sauce Demo
  await loginPage.login('standard_user', 'secret_sauce'); // نسجل الدخول باليوزر والباسورد الصح
});
