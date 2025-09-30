import { Page, expect } from '@playwright/test';

// ده الكلاس الخاص بصفحة الكارت (Cart Page)
export class CartPage {
  readonly page: Page;

  // Constructor بياخد object من Page علشان نقدر نتحكم في الصفحة
  constructor(page: Page) {
    this.page = page;
  }

  // دالة علشان نتأكد إن البرودكت (Backpack) موجود في الكارت
  async verifyBackpackInCart() {
    // بنستخدم locator علشان نمسك اسم المنتج ونتأكد إن فيه نص "Sauce Labs Backpack"
    await expect(this.page.locator('[data-test="inventory-item-name"]'))
      .toContainText('Sauce Labs Backpack');
  }

  // دالة علشان نعمل Remove للبرودكت من الكارت
  async removeBackpack() {
    // نضغط على زرار Remove الخاص بالـ Backpack
    await this.page.click('[data-test="remove-sauce-labs-backpack"]');
    // نتأكد إن بعد ما عملنا Remove الكارت بقى فاضي (عدد العناصر = 0)
    await expect(this.page.locator('[data-test="inventory-item-name"]'))
      .toHaveCount(0);
  }

  // دالة علشان نعمل Checkout من الكارت
  async checkout() {
    // نضغط على زرار Checkout
    await this.page.click('[data-test="checkout"]');
    // نتأكد إننا اتحولنا لصفحة checkout-step-one
    await expect(this.page).toHaveURL(/checkout-step-one/);
  }
}
