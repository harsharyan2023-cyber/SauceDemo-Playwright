import { test, expect } from '@playwright/test';
import LoginPage from '../pages/LoginPage.js';
import ProductsPage from '../pages/ProductPage.js';
import CartPage from '../pages/CartPage.js';


test('Verify product in cart', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  const loginPage = new LoginPage(page);
  await loginPage.login('standard_user', 'secret_sauce');

  const productsPage = new ProductsPage(page);
  await productsPage.addProductToCart('Sauce Labs Backpack');
  await productsPage.openCart();
  


  const cartPage = new CartPage(page);

  await expect(page).toHaveURL(/cart.html/);
  await expect(cartPage.productName).toHaveText('Sauce Labs Backpack');
  expect(await cartPage.getCartItemCount()).toBe(1);
  console.log('Cart item count:',await page.locator('.cart_item').count());
  console.log('Product names:',await page.locator('.cart_item .inventory_item_name').allTextContents())
});