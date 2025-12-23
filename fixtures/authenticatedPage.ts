import { test as base, Page } from '@playwright/test';

export const test = base.extend<{
  authenticatedPage: Page;
}>({
  authenticatedPage: async ({ page }, use) => {
    // This runs before EACH test
    await page.goto('https://www.saucedemo.com/inventory.html');
    await use(page);
    // Cleanup happens automatically
  },
});

export { expect } from '@playwright/test';
