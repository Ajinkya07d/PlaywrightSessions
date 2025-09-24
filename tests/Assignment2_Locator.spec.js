import { test, expect } from '@playwright/test';
test('test locators',async ({page}) => {

    await page.goto('https://www.saucedemo.com/');
    await page.getByRole('textbox',{name:'Username'}).fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.getByText('Login').click();
    await expect(page.getByText('Sauce Labs Backpack')).toBeVisible();

    // add item 1 in the cart
    await expect(page.locator("//div[text()='Sauce Labs Backpack']")).toBeVisible();
    await expect(page.locator("//div[text()='Sauce Labs Backpack']/ancestor::div[@class='inventory_item_description']/div[@class='pricebar']/div[@class='inventory_item_price']")).toBeVisible();
    await page.locator("//div[text()='Sauce Labs Backpack']/ancestor::div[@class='inventory_item_description']/div[@class='pricebar']/button[text()='Add to cart']").click();
    
    // add item 2 in the cart
    await expect(page.locator("//div[text()='Sauce Labs Bike Light']")).toBeVisible();
    await expect(page.locator("//div[text()='Sauce Labs Bike Light']/ancestor::div[@class='inventory_item_description']/div[@class='pricebar']/div[@class='inventory_item_price']")).toBeVisible();
    await page.locator("//div[text()='Sauce Labs Bike Light']/ancestor::div[@class='inventory_item_description']/div[@class='pricebar']/button[text()='Add to cart']").click();
    
    //Click on container
    await page.locator("//div[@id='shopping_cart_container']").click();

    //verify items & prices in container
    await expect(page.locator("//div[text()='Sauce Labs Backpack']")).toBeVisible();
    await expect(page.locator("//div[text()='Sauce Labs Backpack']/ancestor::div[@class='cart_item_label']//div[@class='inventory_item_price']")).toBeVisible();

    await expect(page.locator("//div[text()='Sauce Labs Bike Light']")).toBeVisible();
    await expect(page.locator("//div[text()='Sauce Labs Bike Light']/ancestor::div[@class='cart_item_label']//div[@class='inventory_item_price']")).toBeVisible();

    //click on checkout
    await page.locator("//button[@id='checkout']").click();

})
