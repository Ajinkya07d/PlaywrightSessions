const { test, expect } = require('@playwright/test')

test('1 Demo WEb shop Navigation', async ({ page }) => {

    await page.goto('https://demowebshop.tricentis.com/login');
    await page.getByRole('link', { name: 'Books' }).first().click();
    await expect(page.locator('body')).toContainText('Health Book');
    await expect(page.locator('body')).toContainText('10.00');
    await page.getByRole('button', { name: 'Add to cart' }).nth(2).click();
    await page.getByRole('link', { name: 'Shopping cart (1)' }).click();
    await expect(page.locator('body')).toContainText('10.00');
    await expect(page.getByRole('heading', { name: 'Shopping cart' })).toBeVisible();
})

// below test will only be execueted & will open recrder at run time.
test.only('2 Demo WEb shop Navigation', async ({ page }) => {

    await page.goto('https://demowebshop.tricentis.com/login');
    await page.pause();
})