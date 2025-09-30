# 🧪 Playwright Automation Testing (SauceDemo)

## 📌 Project Overview
This project demonstrates **end-to-end UI automation** using [Playwright](https://playwright.dev/) with **TypeScript**.  
The tested application is [Sauce Demo](https://www.saucedemo.com/).  
The framework is built following the **Page Object Model (POM)** design pattern for clean and maintainable code.

---

## ⚙️ 1. Dependency Installation

Make sure you have [Node.js (LTS version ≥ 18)](https://nodejs.org/) installed.

```bash
# Clone the repository
git clone <repo-url>
cd <repo-name>

# Install dependencies
npm install

# Install Playwright browsers
npx playwright install






▶️ 2. Test Execution Commands
Run all tests
npx playwright test

Run tests with headed browser
npx playwright test --headed

Run a specific test file
npx playwright test tests/full-flow.spec.ts

Run with UI mode (interactive)
npx playwright test --ui



📊 3. View the HTML Report

After running tests, generate and open the HTML report:

# Show last test report
npx playwright show-report


This will open the test execution results in your default browser.






⚠️ 4. Challenges & Solutions
1. 401 Unauthorized Issue

Cause: Wrong credentials, session cookies, or blocked requests by SauceDemo.

Solution:

Always use correct credentials:

Username: standard_user

Password: secret_sauce

Clear cookies before each test:

test.beforeEach(async ({ page }) => {
  await page.context().clearCookies();
});


Ensure base URL is correct (https://www.saucedemo.com/).


2.❌ Why Test Case 4 (Remove Products from Listing Page) was skipped?

The reason we didn’t implement the “Remove Products from Product Listing Page” test case is because it conflicts with the E2E flow designed for this assignment:

Our main E2E scenario is:
Login → Add Product → Go to Cart → Checkout → Cancel → Remove from Cart → Logout.

If we remove the product directly from the Inventory Page, then when we navigate to the Cart Page, it will already be empty.
➝ This breaks the E2E scenario since there would be no item to checkout or remove later in the cart.

💡 Therefore, we intentionally skipped this test case to maintain the consistency of the end-to-end flow.
(If needed, it can be implemented as a separate independent test case, outside the main E2E scenario).


3.❌ Why Test Case "Empty Cart Checkout" was skipped?

The Empty Cart Checkout test case was not implemented because:

Our designed E2E scenario focuses on the happy path with valid checkout flow.

In the current application behavior, even if the cart is empty, the system still allows proceeding with checkout without blocking the user.

This makes the scenario not realistic as a functional negative case, since the system doesn’t actually prevent empty cart checkout.

Including this step in the E2E test would add no value and could create confusion about expected behavior.

💡 This test case is better suited for a negative or edge case test suite (e.g., “Cart Validation Tests”), where the purpose is to check whether the system should ideally prevent such actions — but it does not belong in the main E2E scenario.