import { test, expect } from '@playwright/test';
//import { TIMEOUT } from 'dns/promises';
import { faker } from '@faker-js/faker';
//import exp from 'constants';
 
const URL = "https://demowebshop.tricentis.com/";
 
let SearchData = "Book",
    Email = "sss789@gmail.com",
    Password = "admin@123",
    product = "14.1-inch Laptop",
    Top_Menu = "Electronics",
    Top_Sub_Menu = "Cell phones",
    Subscribe_Email = faker.internet.email();
 
const Subscribe_Success_Message = "Thank you for signing up! A verification email has been sent. We appreciate your interest.";
 
 
test('Task3', async ({ page }) => {
 
 // 1. Write a test that searches for 'Books' and verifies the results page.
 
 await page.goto(URL); //Open Application
 
 await page.locator('//input[@value="Search store"]').fill(SearchData); //Search for Book
 
 await page.locator("//input[@value='Search']").click();   //Click on Search button
 
 await expect(page.locator("//label[text()='Advanced search']")).toBeVisible();  //Verify result page
 
 // 2. Automate login with valid credentials and check that 'Log out' is visible.
 
 await page.locator("//a[text()='Log in']").click(); //Click on login Button
 
 await page.locator("//input[@name='Email']").fill(Email);   // Enter Valid Email
 
await page.locator("//input[@name='Password']").fill(Password);   // Enter Valid password
 
await page.locator("//input[@value='Log in']").click();   //Click on Logn Button
 
await expect(page.getByText("Log out")).toBeVisible();   //verify Logout is visible
 
// 3. Add a product to the cart, then take a screenshot of the cart page.
 
//Adding product to cart
 
await page.locator(`//a[text()="${product}"]/ancestor::div[@class='details']//input[@value="Add to cart"]`).click();
 
await page.locator("//span[text()='Shopping cart']").click();   //Go to cart
 
await page.screenshot({ path: 'Cart_Page_screenshot.png' });
 
await page.screenshot({ path: 'Cart_FullPage_screenshot.png', fullPage: true });
 
// 4. Use hover to navigate to the 'Electronics > Cell phones' menu and click it.
 
await page.locator(`//ul[@class='top-menu']//a[contains(text(),"${Top_Menu}")]`).hover();
 
await page.locator(`//ul[@class='top-menu']//a[contains(text(),"${Top_Sub_Menu}")]`).click();
 
// await page.waitForTimeout(5000);
 
// 5. Subscribe to the newsletter with a new email and verify the confirmation message.
 
await page.locator("//input[@name='NewsletterEmail']").fill(Subscribe_Email); //Entering Email
 
await page.locator("//input[@value='Subscribe']").click(); //Click on subscription
 
//Verify Subcription success message
 
await expect(page.locator(`//div[text()="${Subscribe_Success_Message}"]`)).toBeVisible();
 
// 6. Capture a screenshot of only the footer element and save it as footer.png.
 
//store the footer locator
 
const footer = await page.locator("//div[@class='footer-menu-wrapper']");
 
await footer.screenshot({ path: 'footer.png' }); //take footer screenshot
 
// 7. Perform a visual regression test for the login page.
 
await page.goto(URL); //Open URL
 
//compare login page screenshots
 
expect(await page.screenshot()).toMatchSnapshot('Login page.png',{ maxDiffPixels: 20});
 
 
 
});