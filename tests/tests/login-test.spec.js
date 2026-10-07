const { test, expect } = require('@playwright/test');

test('সফল লগইন টেস্ট - SauceDemo', async ({ page }) => {
  // ১. SauceDemo ওয়েবসাইটে যাও
  await page.goto('https://www.saucedemo.com/');

  // ২. ইউজারনেম বক্সে 'standard_user' টাইপ করো
  await page.locator('#user-name').fill('standard_user');

  // ৩. পাসওয়ার্ড বক্সে 'secret_sauce' টাইপ করো
  await page.locator('#password').fill('secret_sauce');

  // ৪. Login বাটনে ক্লিক করো
  await page.locator('#login-button').click();

  // ৫. প্রোডাক্ট পেজের হেডার 'Products' দেখা যাচ্ছে কি না যাচাই করো
  const pageTitle = page.locator('.title');
  await expect(pageTitle).toHaveText('Products');
});