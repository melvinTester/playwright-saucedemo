import { Page } from '@playwright/test';

export class InventoryPage {
  constructor(private readonly page: Page) {}

  async addBackpack() {
    await this.page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  }

  async addRedTShirt() {
    await this.page
      .locator('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]')
      .click();
  }

  async openCart() {
    await this.page.locator('[data-test="shopping-cart-link"]').click();
  }
}
