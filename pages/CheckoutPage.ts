import { Page } from '@playwright/test';

export class CheckoutPage {
  constructor(private readonly page: Page) {}

  async startCheckout() {
    await this.page.locator('[data-test="checkout"]').click();
  }

  async enterFirstName(first: string) {
    await this.page.locator('[data-test="firstName"]').fill(first);
  }

  async enterLastName(last: string) {
    await this.page.locator('[data-test="lastName"]').fill(last);
  }

  async enterPostcode(postcode: string) {
    await this.page.locator('[data-test="postalCode"]').fill(postcode);
  }

  async continue() {
    await this.page.locator('[data-test="continue"]').click();
  }

  async finish() {
    await this.page.locator('[data-test="finish"]').click();
  }
}
