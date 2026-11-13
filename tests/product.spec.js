import { test, expect } from '@playwright/test';
import LoginPage from '../pages/LoginPage.js';
import ProductsPage from '../pages/ProductPage.js';

test('Verify products page', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    const loginPage=new LoginPage(page);
    await loginPage.login('standard_user','secret_sauce')
    const productsPage=new ProductsPage(page)
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
    await expect(page.locator('.title')).toHaveText('Products');
    await expect(page.locator('.inventory_item')).toHaveCount(6);
    await productsPage.addProductToCart('Sauce Labs Backpack');
    await expect(page.locator('.shopping_cart_link')).toHaveText('1');






});