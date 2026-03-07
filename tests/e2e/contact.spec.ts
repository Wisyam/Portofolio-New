import { test, expect } from '@playwright/test';

test('contact form shows success feedback and disables submit while sending', async ({ page }) => {
  await page.route('**/api/contact', async (route) => {
    await new Promise((resolve) => setTimeout(resolve, 700));
    await route.fulfill({
      status: 201,
      contentType: 'application/json',
      body: JSON.stringify({ success: true, message: 'Message sent successfully.' }),
    });
  });

  await page.goto('/', { waitUntil: 'domcontentloaded' });
  await page.locator('#contact').scrollIntoViewIfNeeded();

  await page.locator('#contact input[name="name"]').fill('Playwright Tester');
  await page.locator('#contact input[name="email"]').fill('tester@example.com');
  await page.locator('#contact textarea[name="message"]').fill('Hello, this is an automated contact test message.');

  const submitButton = page.locator('#contact button[type="submit"]');
  await submitButton.click();

  await expect(submitButton).toBeDisabled();
  await expect(page.locator('#contact p', { hasText: 'Message sent successfully.' })).toBeVisible();
});

test('contact form shows error feedback on API error', async ({ page }) => {
  await page.route('**/api/contact', async (route) => {
    await route.fulfill({
      status: 400,
      contentType: 'application/json',
      body: JSON.stringify({ success: false, message: 'Please enter a valid email address.' }),
    });
  });

  await page.goto('/', { waitUntil: 'domcontentloaded' });
  await page.locator('#contact').scrollIntoViewIfNeeded();

  await page.locator('#contact input[name="name"]').fill('Playwright Tester');
  await page.locator('#contact input[name="email"]').fill('invalid-email');
  await page.locator('#contact textarea[name="message"]').fill('This payload should trigger error from mocked API response.');

  await page.locator('#contact button[type="submit"]').click();
  await expect(page.locator('#contact p', { hasText: 'Please enter a valid email address.' })).toBeVisible();
});
