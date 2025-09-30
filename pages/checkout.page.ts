import { Page, expect } from '@playwright/test';

export class CheckoutPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async fillCheckoutInfo(first: string, last: string, zip: string) {
    await this.page.fill('[data-test="firstName"]', first);
    await this.page.fill('[data-test="lastName"]', last);
    await this.page.fill('[data-test="postalCode"]', zip);

    await expect(this.page.locator('#first-name')).toHaveValue(first);
    await expect(this.page.locator('#last-name')).toHaveValue(last);
    await expect(this.page.locator('#postal-code')).toHaveValue(zip);
  }

  async continueCheckout() {
    await this.page.click('[data-test="continue"]');
    await expect(this.page).toHaveURL(/checkout-step-two/);
  }

  async cancelCheckout() {
    await this.page.click('[data-test="cancel"]');
    await expect(this.page).toHaveURL(/inventory/);
  }
}
