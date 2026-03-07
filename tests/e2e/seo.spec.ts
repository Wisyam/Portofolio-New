import { test, expect } from '@playwright/test';

test('SEO metadata is rendered in head', async ({ page }) => {
  await page.goto('/', { waitUntil: 'domcontentloaded' });

  const metadata = await page.evaluate(() => ({
    canonical: document.querySelector('link[rel="canonical"]')?.getAttribute('href') || '',
    ogImage: document.querySelector('meta[property="og:image"]')?.getAttribute('content') || '',
    twitterCard: document.querySelector('meta[name="twitter:card"]')?.getAttribute('content') || '',
    robots: document.querySelector('meta[name="robots"]')?.getAttribute('content') || '',
  }));

  expect(metadata.canonical).toContain('wisyam-portfolio.vercel.app');
  expect(metadata.ogImage).toContain('og-image.svg');
  expect(metadata.twitterCard).toBe('summary_large_image');
  expect(metadata.robots.toLowerCase()).toContain('index');
  expect(metadata.robots.toLowerCase()).toContain('follow');
});
