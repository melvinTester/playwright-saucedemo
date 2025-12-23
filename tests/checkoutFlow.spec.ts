import { test, expect } from '../fixtures/authenticatedPage';

test('checkout flow', async ({ authenticatedPage }) => {
  await authenticatedPage
    .locator('[data-test="add-to-cart-sauce-labs-backpack"]')
    .click();
});
