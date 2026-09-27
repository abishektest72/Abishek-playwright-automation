import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('Login test', async ({ page }) => {
  
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login', { waitUntil: 'domcontentloaded' });
  const loginPage = new LoginPage(page);
  await loginPage.login('Admin', 'admin123');
  await expect(page).toHaveURL(/dashboard/);
});