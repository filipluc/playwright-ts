import { test, expect } from '@playwright/test';

test('test1', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.waitForTimeout(2000);
  await page.getByRole('link', { name: 'Get started' }).click();
  await page.waitForTimeout(2000);
  await page.getByRole('link', { name: 'Playwright logo Playwright' }).click();
  await page.waitForTimeout(2000);

  await expect(page).toHaveTitle(/Playwright/);
});