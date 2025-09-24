const {test, expect}=require('@playwright/test')

test('Session 1', async({ page })=>{

    await page.goto('https://demowebshop.tricentis.com/login');
    await expect(page).toHaveTitle('Demo Web Shop. Login');
})