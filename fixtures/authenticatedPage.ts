import { test as base, Page } from '@playwright/test';

export const test = base.extend<{
  authenticatedPage: Page;
}>({
  authenticatedPage: async ({ page }, use) => {
    await page.goto('https://www.saucedemo.com/inventory.html');
    await use(page);
  },
});

export { expect } from '@playwright/test';
