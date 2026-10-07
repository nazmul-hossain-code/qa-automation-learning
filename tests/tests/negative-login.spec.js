const { test, expect } = require('@playwright/test');

test('ব্যর্থ লগইন টেস্ট - ভুল পাসওয়ার্ড দিলে এরর দেখানো', async ({ page }) => {
  // ১. SauceDemo ওয়েবসাইটে যাও
  await page.goto('https://www.saucedemo.com/');

  // ২. সঠিক ইউজারনেম কিন্তু ভুল পাসওয়ার্ড টাইপ করো
  await page.locator('#user-name').fill('standard_user');
  await page.locator('#password').fill('wrong_password_123');

  // ৩. Login বাটনে ক্লিক করো
  await page.locator('#login-button').click();

  // ৪. এরর মেসেজের লাল বক্সটি খুঁজে বের করো
  const errorMessage = page.locator('[data-test="error"]');

  // ৫. যাচাই করো: এরর বক্সটা স্ক্রিনে দৃশ্যমান কি না
  await expect(errorMessage).toBeVisible();

  // ৬. যাচাই করো: ভেতরে কাঙ্ক্ষিত সতর্কবার্তা লেখা আছে কি না
  await expect(errorMessage).toContainText('Username and password do not match');
});