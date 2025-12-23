import { chromium, FullConfig } from '@playwright/test';

async function globalSetup(config: FullConfig) {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();

  // Wait until logged in
  await page.waitForURL('**/inventory.html');

  // Save authentication state
  await page.context().storageState({ path: 'storageState.json' });

  await browser.close();
}

export default globalSetup;
