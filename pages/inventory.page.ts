import { Page, expect } from '@playwright/test';

export class InventoryPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async addBackpackToCart() {
    await this.page.click('[data-test="add-to-cart-sauce-labs-backpack"]');
    await expect(this.page.locator('[data-test="remove-sauce-labs-backpack"]')).toBeVisible();
  }

  async goToCart() {
    await this.page.click('[data-test="shopping-cart-link"]');
    await expect(this.page).toHaveURL(/cart/);
  }
}
