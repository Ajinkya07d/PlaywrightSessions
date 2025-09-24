import { test, expect } from '@playwright/test';
const { faker } = require ('@faker-js/faker');
test('test locators',async ({page}) => {

    let name= faker.person.firstName();

})