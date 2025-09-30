import { Page, expect } from '@playwright/test';

// الكلاس الخاص بصفحة تسجيل الدخول
export class LoginPage {
  readonly page: Page;

  // Constructor بياخد object من Page علشان نتحكم في الصفحة
  constructor(page: Page) {
    this.page = page;
  }

  // دالة علشان نفتح صفحة تسجيل الدخول
  async goto() {
    // نفتح رابط موقع Sauce Demo
    await this.page.goto('https://www.saucedemo.com/');
  }

  // دالة تسجيل الدخول
  async login(username: string, password: string) {
    // نكتب اسم المستخدم في خانة اليوزر
    await this.page.fill('[data-test="username"]', username);
    // نكتب الباسورد في خانة الباسورد
    await this.page.fill('[data-test="password"]', password);
    // نضغط على زرار تسجيل الدخول
    await this.page.click('[data-test="login-button"]');
    // نتأكد إننا اتحولنا لصفحة الـ Inventory (يعني اللوجين نجح)
    await expect(this.page).toHaveURL(/inventory/);
  }
}
