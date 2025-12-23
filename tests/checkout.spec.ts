
import { test, expect } from '../fixtures/authenticatedPage';

test('user can complete checkout for multiple items', async ({ inventoryPage }) => {
  await inventoryPage.addBackpack();
  await inventoryPage.addRedTShirt();
  await inventoryPage.openCart();

  // Checkout steps still use page directly for now
  const page = inventoryPage['page'];

  await page.locator('[data-test="checkout"]').click();
  await page.locator('[data-test="firstName"]').fill('Melvin');
  await page.locator('[data-test="lastName"]').fill('Burton');
  await page.locator('[data-test="postalCode"]').fill('TH4 3FD');
  await page.locator('[data-test="continue"]').click();
  await page.locator('[data-test="finish"]').click();

  await expect(page.locator('[data-test="complete-header"]'))
    .toHaveText('Thank you for your order!');
});
