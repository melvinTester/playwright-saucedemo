import { chromium, FullConfig } from '@playwright/test';

async function globalSetup(config: FullConfig) {
  const baseURL = config.projects[0].use?.baseURL as string;

  const browser = await chromium.launch();
  const page = await browser.newPage();

  await page.goto(baseURL);

  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();

  await page.waitForURL('**/inventory.html');

  await page.context().storageState({ path: 'storageState.json' });
  await browser.close();
}

export default globalSetup;
