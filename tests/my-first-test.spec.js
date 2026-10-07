const { test, expect } = require('@playwright/test');

test('আমার প্রথম অটোমেশন টেস্ট - গুগল পেজ টাইটেল চেক', async ({ page }) => {
  // ১. গুগলে যাও
  await page.goto('https://www.google.com');

  // ২. পেজের টাইটেল চেক করো
  await expect(page).toHaveTitle(/Google/);
});