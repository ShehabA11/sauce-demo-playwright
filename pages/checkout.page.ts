import { Page, expect } from '@playwright/test';

// ده الكلاس الخاص بصفحة الـ Checkout
export class CheckoutPage {
  readonly page: Page;

  // Constructor بياخد object من Page علشان نتحكم في الصفحة
  constructor(page: Page) {
    this.page = page;
  }

  // دالة علشان نملأ بيانات الـ Checkout (First Name, Last Name, Zip Code)
  async fillCheckoutInfo(first: string, last: string, zip: string) {
    // نكتب الاسم الأول في الحقل المخصص له
    await this.page.fill('[data-test="firstName"]', first);
    // نكتب الاسم الأخير في الحقل المخصص له
    await this.page.fill('[data-test="lastName"]', last);
    // نكتب الكود البريدي في الحقل المخصص له
    await this.page.fill('[data-test="postalCode"]', zip);

    // نتأكد إن القيم اتحفظت بشكل صحيح في الحقول
    await expect(this.page.locator('#first-name')).toHaveValue(first);
    await expect(this.page.locator('#last-name')).toHaveValue(last);
    await expect(this.page.locator('#postal-code')).toHaveValue(zip);
  }

  // دالة علشان نكمل عملية الـ Checkout
  async continueCheckout() {
    // نضغط على زرار Continue
    await this.page.click('[data-test="continue"]');
    // نتأكد إننا اتحولنا لصفحة checkout-step-two
    await expect(this.page).toHaveURL(/checkout-step-two/);
  }

  // دالة علشان نلغي عملية الـ Checkout
  async cancelCheckout() {
    // نضغط على زرار Cancel
    await this.page.click('[data-test="cancel"]');
    // نتأكد إننا رجعنا لصفحة الكارت (Cart)
    await expect(this.page).toHaveURL(/cart/);
  }
}
