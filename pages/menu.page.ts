import { Page, expect } from '@playwright/test';

// الكلاس الخاص بقائمة الـ Burger Menu (القائمة الجانبية)
export class MenuPage {
  readonly page: Page;

  // Constructor بياخد object من Page علشان نتحكم في الصفحة
  constructor(page: Page) {
    this.page = page;
  }

  // دالة لتسجيل الخروج (Logout)
  async logout() {
    // نضغط على زرار الـ Burger Menu لفتح القائمة الجانبية
    await this.page.click('#react-burger-menu-btn');

    // نضغط على رابط Logout في القائمة الجانبية
    await this.page.click('[data-test="logout-sidebar-link"]');

    // نتأكد إننا رجعنا لصفحة تسجيل الدخول (Login Page)
    await expect(this.page).toHaveURL('https://www.saucedemo.com/');
  }
}
