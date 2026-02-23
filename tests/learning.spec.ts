import { test, expect } from '@playwright/test';

// We'll test https://example.com — a simple, stable page, perfect for learning

test('check page title', async ({ page }) => {
  await page.goto('https://example.com');

  // Assert the page title
  await expect(page).toHaveTitle('Example Domain');
});

test('check heading text is visible', async ({ page }) => {
  await page.goto('https://example.com');

  // Find element by its role + name
  const heading = page.getByRole('heading', { name: 'Example Domain' });
  await expect(heading).toBeVisible();
});

test('check paragraph contains text', async ({ page }) => {
  await page.goto('https://example.com');

  // Find element by partial text
  const paragraph = page.getByText('This domain is for use in documentation');
  await expect(paragraph).toBeVisible();
});

test('click a link and check new URL', async ({ page }) => {
  await page.goto('https://example.com');

  // Click the "More information" link
  await page.getByRole('link', { name: 'Learn more' }).click();

  // After clicking, the URL should change to iana.org
  await expect(page).toHaveURL(/iana\.org/);
});

test('take a screenshot', async ({ page }) => {
  await page.goto('https://example.com');

  // Save a screenshot to disk — useful for debugging
  await page.screenshot({ path: 'test-results/example.png' });
});
