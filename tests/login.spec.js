import { test, expect } from '@playwright/test';
import LoginPage from '../pages/LoginPage.js';

test('Valid login', async ({ page }) => {

    await page.goto('/');

    const loginPage = new LoginPage(page);

    await loginPage.login('standard_user', 'secret_sauce');

    await expect(page).toHaveURL(/inventory.html/);

});