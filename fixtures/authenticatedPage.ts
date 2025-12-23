import { test as base } from '@playwright/test';
import { InventoryPage } from '../pages/InventoryPage';
import { CheckoutPage } from '../pages/CheckoutPage';


export const test = base.extend<{
  inventoryPage: InventoryPage;
  checkoutPage: CheckoutPage;
}>({
  inventoryPage: async ({ page }, use) => {
    await page.goto('/inventory.html');
    await use(new InventoryPage(page));
  },
  checkoutPage: async ({ page }, use) => {
    await use(new CheckoutPage(page));
  },
});

export { expect } from '@playwright/test';
