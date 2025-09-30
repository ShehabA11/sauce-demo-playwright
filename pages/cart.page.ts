import { Page, expect } from '@playwright/test';

export class CartPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async verifyBackpackInCart() {
    await expect(this.page.locator('[data-test="inventory-item-name"]')).toContainText('Sauce Labs Backpack');
  }

  async removeBackpack() {
    await this.page.click('[data-test="remove-sauce-labs-backpack"]');
    await expect(this.page.locator('[data-test="inventory-item-name"]')).toHaveCount(0);
  }

  async checkout() {
    await this.page.click('[data-test="checkout"]');
    await expect(this.page).toHaveURL(/checkout-step-one/);
  }
}
