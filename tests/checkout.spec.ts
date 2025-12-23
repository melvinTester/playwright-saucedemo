import { test, expect } from '@playwright/test';
import { login } from '../helpers/login';

test('user can complete checkout for multiple items', async ({ page }) => {
  // IMPORTANT: navigate after storage state is loaded
  await page.goto('https://www.saucedemo.com/inventory.html');

  // Add items to cart
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await page.locator('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').click();

  // Checkout
  await page.locator('[data-test="shopping-cart-link"]').click();
  await page.locator('[data-test="checkout"]').click();

  await page.locator('[data-test="firstName"]').fill('Melvin');
  await page.locator('[data-test="lastName"]').fill('Burton');
  await page.locator('[data-test="postalCode"]').fill('TH4 3FD');
  await page.locator('[data-test="continue"]').click();
  await page.locator('[data-test="finish"]').click();

  await expect(page.locator('[data-test="complete-header"]'))
    .toHaveText('Thank you for your order!');
});
