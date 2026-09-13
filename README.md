# Talon.One Take Home Task(QA Engineer)

This repository contains an end-to-end Cypress test suite for the Demoblaze e-commerce web application. The automated coverage focuses on the essential user journey for a new customer: creating an account, logging in, and purchasing a laptop.

## Project Objective

The goal is to build a reliable regression suite for the most important flows of the online store, with a strong emphasis on the following scenario:

- Create a new user account
- Log in with valid credentials
- Browse laptops
- Select a laptop product
- Add it to the cart
- Place an order and confirm the purchase

This project is designed to support a fast launch of automated coverage with Cypress, using clean page object patterns and reusable test logic.

## Tools and Stack

- Cypress
- TypeScript
- Faker.js for generating dynamic test data
- Page Object Model (POM) structure

## Repository Structure

```bash
.
├── cypress/
│   ├── e2e/
│   │   ├── login.cy.ts
│   │   ├── purchase.cy.ts
│   │   └── signup.cy.ts
│   ├── fixtures/
│   │   └── example.json
│   ├── pages/
│   │   ├── cartPage.ts
│   │   ├── homePage.ts
│   │   ├── loginPage.ts
│   │   ├── orderModalPage.ts
│   │   ├── productDetailsPage.ts
│   │   ├── productListPage.ts
│   │   └── signupPage.ts
│   └── support/
│       ├── commands.ts
│       └── e2e.ts
├── cypress.config.ts
├── cypress.env.json
├── package.json
├── tsconfig.json
├── README.md
└── package-lock.json
```

## Test Coverage Included

### 1. Signup flow
1. Opens the Demoblaze homepage
2. Navigates to the signup form
3. Creates a random new user account
4. Validates confirmation message

### 2. Login flow
1. Visits the homepage
2. Opens the login form
3. Login with registered user's credentials
4. Validates successful login
5. Verifies invalid input handling for:
    - non-existent user
    - wrong password
    - empty credentials

### 3. Purchase flow
1. Logs in as a valid user
2. Opens the Laptops category
3. Selects the laptop(MacBook Pro) product
4. Adds the laptop to cart
5. Verifies the cart contains the expected item
6. Places an order
7. Fills in billing details
8. Confirms purchase success message

## Testing Approach

The essential flows were selected based on business risk and customer impact(risk based testing). In an e-commerce application, the most critical activities are creating an account, signing in, selecting a product, and completing checkout. If these fail, the customer cannot complete a purchase, so they were prioritized first.

The tests were designed to cover the primary happy path and the most important validation scenarios:

- Sign-up: verifies that a new customer can create an account successfully, which is a prerequisite for the purchase flow.
- Login: covers both valid and invalid authentication attempts, ensuring the app correctly handles both successful access and common user errors.
- Purchase flow: validates that a laptop can be selected, added to the cart, and ordered through the checkout process without interruption.

This approach follows a risk-based testing strategy: the suite focuses on the core user journey and the highest-risk validation points, while keeping the tests simple, readable, and maintainable. The Page Object Model was used to separate test logic from UI selectors so the suite is easier to extend when additional scenarios are needed.

The test design also emphasizes real user behavior rather than implementation details. Each test navigates through the app as a customer would, validates visible UI states, and checks alert messages where the application exposes feedback through browser alerts. This makes the tests more representative of the actual customer experience and more effective at catching regressions.

## Configuration

The test suite is configured in `cypress.config.ts` with the following defaults:

- Base URL: `https://www.demoblaze.com`
- Default timeout: `8000` ms
- Spec pattern: `cypress/e2e/**/*.cy.ts`
- Viewport: `1920 x 1080`

The suite expects a registered Demoblaze user to exist in `cypress.env.json` before running the login and purchase flows. Use your own valid test account credentials there instead of committing real account details to the repository.

```json
{
  "username": "ENTER_YOUR_REGISTERED_USERNAME",
  "password": "ENTER_YOUR_REGISTERED_PASSWORD"
}
```

## Prerequisites

Before running the tests, install the required dependencies:

- Node.js (LTS version recommended)
- npm(version > 11.0)

## Installation

```bash
npm install
```

## Running the Tests

Tests can be run within Cypress Launchpad or directly with headless mode via npm scripts

### Open Cypress Test Runner

Enter the following command to run all the E2E tests within the Cypress Launchpad

```bash
npm run cy:open:e2e
```

After it is loaded, select an available browser and then click on `Start E2E Testing in [Selected Browser Name]`. All the E2E spec files are dislayed and you can click on one of them to start running it. After the execution, you can see the detailed executed test steps from the command log in the Test Runner.

### Run as an npm script

To select a specific browser for running tests, you can use the following npm script conventions directly. 
```bash
npm run cy:run:chrome   // For running tests in Chrome browser
npm run cy:run:firefox  // For running tests in Firefox browser
npm run cy:run:edge     // For running tests in Edge browser
```

Note that the selected browser must be installed on your system prior to executing the tests.

## Notes

- This project follows the Page Object Model to keep tests readable and maintainable.
- Alerts are used throughout the app for validation, so Cypress listeners are used to assert the expected browser messages.
- The suite uses generated random values where possible to reduce test dependence on fixed data.
- The current focus is on critical user journeys rather than a broad coverage set, which matches the requested tight-deadline QA objective.

## Future Improvements

Some possible next steps for the project include:

- Adding negative tests for purchase validation
- Covering additional product categories
- Enhancing assertion coverage for cart and checkout details
- Adding reporting and screenshots for failed tests
