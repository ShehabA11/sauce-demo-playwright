import { Page } from '@playwright/test';

// كلاس InventoryPage بيحتوي على كل الفانكشنز الخاصة بصفحة المنتجات (Inventory)
export class InventoryPage {
  readonly page: Page; // تعريف متغير page علشان نستخدمه في التفاعل مع عناصر الصفحة

  constructor(page: Page) {
    this.page = page; // نخزن الـ page اللي جاي من Playwright في المتغير علشان نستخدمه جوه الكلاس
  }

  // ميثود لإضافة الـ Backpack للـ Cart
  async addBackpackToCart() {
    // نضغط على زرار Add to cart الخاص بالـ Backpack
    await this.page.click('[data-test="add-to-cart-sauce-labs-backpack"]');
  }

  // ميثود للانتقال لصفحة الـ Cart
  async goToCart() {
    // نضغط على أيقونة الـ Cart (Shopping Cart)
    await this.page.click('[data-test="shopping-cart-link"]');
  }

  // ميثود لتغيير ترتيب المنتجات (Sorting)
  async sortProducts(optionValue: string) {
    // نختار قيمة من Dropdown الـ Sort (مثلاً lohi أو hilo أو az أو za)
    await this.page.selectOption('[data-test="product-sort-container"]', optionValue);
  }

  // ميثود للحصول على كل أسعار المنتجات المعروضة
  async getAllProductPrices(): Promise<number[]> {
    // نجمع نص الأسعار من العناصر اللي ليها الكلاس .inventory_item_price
    const priceTexts = await this.page.$$eval('.inventory_item_price', els =>
      els.map(el => el.textContent?.replace('$', '').trim() || '') // نشيل علامة الدولار ونعمل Trim
    );
    // نحول النصوص لأرقام float ونرجعهم كـ Array من الأرقام
    return priceTexts.map(price => parseFloat(price));
  }
}
