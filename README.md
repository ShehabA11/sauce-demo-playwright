Playwright Automation Testing (SauceDemo)
Project Overview

This project demonstrates end-to-end UI automation using Playwright
 with TypeScript.
The tested application is Sauce Demo
.
The framework is built following the Page Object Model (POM) design pattern for clean and maintainable code.

1. Dependency Installation

Make sure you have Node.js (LTS version ≥ 18)
 installed.

# Clone the repository
git clone <repo-url>
cd <repo-name>

# Install dependencies
npm install

# Install Playwright browsers
npx playwright install

2. Test Execution Commands

Run all tests:

npx playwright test


Run tests with headed browser:

npx playwright test --headed


Run a specific test file:

npx playwright test tests/full-flow.spec.ts


Run with UI mode (interactive):

npx playwright test --ui

3. View the HTML Report

After running tests, generate and open the HTML report:

# Show last test report
npx playwright show-report


This will open the test execution results in your default browser.

4. Challenges & Solutions

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

2. Why Test Case "Empty Cart Checkout" was skipped?

The Empty Cart Checkout test case was not implemented because:

The designed E2E scenario focuses on the happy path with valid checkout flow.

In the current application behavior, even if the cart is empty, the system allows proceeding with checkout without blocking the user.

Including this step in the E2E test would add no value and could create confusion about expected behavior.

This test case is better suited for a negative or edge case test suite (e.g., “Cart Validation Tests”), rather than being part of the main E2E scenario.