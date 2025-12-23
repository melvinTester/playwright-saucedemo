import { test as base } from '@playwright/test';
import { InventoryPage } from '../pages/InventoryPage';

export const test = base.extend<{
  inventoryPage: InventoryPage;
}>({
  inventoryPage: async ({ page }, use) => {
    await page.goto('https://www.saucedemo.com/inventory.html');
    await use(new InventoryPage(page));
  },
});

export { expect } from '@playwright/test';
