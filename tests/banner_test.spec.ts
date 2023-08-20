import { test, expect, type Page } from '@playwright/test';

test.describe('Check all banners', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.thepcmanwebsite.com/');
  });

  test('banner not showing', async ({ page }) => {
    const ads = page.locator('a[target="_blank"]');

    await expect(ads).not.toBeVisible()

  });
});
