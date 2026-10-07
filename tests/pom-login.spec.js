const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
test('POM ব্যবহার করে সফল লগইন টেস্ট', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');

  await expect(page.locator('.title')).toHaveText('Products');
});

test('POM ব্যবহার করে ভুল পাসওয়ার্ড দিয়ে ব্যর্থ লগইন টেস্ট', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login('standard_user', 'wrong_pass');

  await expect(loginPage.errorMessage).toBeVisible();
  await expect(loginPage.errorMessage).toContainText('Username and password do not match');
});