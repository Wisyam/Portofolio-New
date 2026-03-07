import { test, expect, type Locator } from '@playwright/test';

async function openMobileMenu(menuButton: Locator) {
  for (let i = 0; i < 3; i += 1) {
    const expanded = await menuButton.getAttribute('aria-expanded');
    if (expanded === 'true') {
      return;
    }

    await menuButton.click();
    await menuButton.page().waitForTimeout(300);
  }
}

test('home page renders key sections', async ({ page }) => {
  await page.goto('/', { waitUntil: 'domcontentloaded' });

  await expect(page.getByRole('heading', { name: 'Wisyam Zain Amanullah' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Featured Projects' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Certifications & Achievements' })).toBeVisible();
});

test('download CV button points to CV_Wisyam document (desktop)', async ({ page }, testInfo) => {
  test.skip(testInfo.project.name.includes('mobile'), 'Header desktop nav is hidden on mobile viewport.');

  await page.goto('/', { waitUntil: 'domcontentloaded' });

  const downloadCv = page.getByRole('link', { name: 'Download CV' });
  await expect(downloadCv).toBeVisible();
  await expect(downloadCv).toHaveAttribute('href', '/CV_Wisyam.docx');
});

test('mobile menu opens and closes after nav click', async ({ page }, testInfo) => {
  test.skip(testInfo.project.name.includes('mobile'), 'Run with desktop project + forced mobile viewport for stability.');

  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/', { waitUntil: 'domcontentloaded' });

  const menuButton = page.locator('button[aria-controls="mobile-menu-panel"]');
  await openMobileMenu(menuButton);
  await expect(menuButton).toHaveAttribute('aria-expanded', 'true');
  await expect(page.locator('#mobile-menu-panel')).toBeVisible();

  await page.locator('#mobile-menu-panel').getByRole('link', { name: 'About' }).click();
  await expect(menuButton).toHaveAttribute('aria-expanded', 'false');
});

test('mobile menu closes on Escape key', async ({ page }, testInfo) => {
  test.skip(testInfo.project.name.includes('mobile'), 'Run with desktop project + forced mobile viewport for stability.');

  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/', { waitUntil: 'domcontentloaded' });

  const menuButton = page.locator('button[aria-controls="mobile-menu-panel"]');
  await openMobileMenu(menuButton);
  await expect(menuButton).toHaveAttribute('aria-expanded', 'true');

  await page.keyboard.press('Escape');
  await expect(menuButton).toHaveAttribute('aria-expanded', 'false');
});

test('chatbot open button is visible', async ({ page }) => {
  await page.goto('/', { waitUntil: 'domcontentloaded' });

  await expect(page.getByRole('button', { name: 'Open Chat' })).toBeVisible();
});
