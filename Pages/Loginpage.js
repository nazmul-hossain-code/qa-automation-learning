class LoginPage {
  constructor(page) {
    this.page = page;
    // সব লোকেটর এক জায়গায়
    this.usernameInput = page.locator('#user-name');
    this.passwordInput = page.locator('#password');
    this.loginButton = page.locator('#login-button');
    this.errorMessage = page.locator('[data-test="error"]');
  }

  // ওয়েবসাইটে যাওয়ার অ্যাকশন
  async goto() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  // ফর্ম পূরণ করে সাবমিট করার অ্যাকশন
  async login(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}

module.exports = { LoginPage };