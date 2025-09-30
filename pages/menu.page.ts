import { Page, expect } from '@playwright/test';

export class MenuPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async logout() {
    await this.page.click('#react-burger-menu-btn');
    await this.page.click('[data-test="logout-sidebar-link"]');
    await expect(this.page).toHaveURL('https://www.saucedemo.com/');
  }
}
