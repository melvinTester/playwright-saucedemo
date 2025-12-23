
import { test, expect } from '../fixtures/authenticatedPage';

test('user can complete checkout', async ({ inventoryPage, checkoutPage }) => {
  await inventoryPage.addBackpack();
  await inventoryPage.openCart();

  await checkoutPage.startCheckout();
  await checkoutPage.enterFirstName('Melvin');
  await checkoutPage.enterLastName('Burton');
  await checkoutPage.enterPostcode('TH4 3FD');
  await checkoutPage.continue();
  await checkoutPage.finish();
});

