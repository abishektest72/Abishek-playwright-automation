# OrangeHRM Playwright Automation Framework

## Overview

This project is a UI automation framework developed using **Playwright with JavaScript** for testing the OrangeHRM application.

The framework demonstrates:

- Page Object Model (POM)
- Reusable test components
- Environment-based configuration
- Dynamic test data
- Cross-browser execution
- Playwright HTML reporting
- Screenshots and test artifacts
- CI/CD integration using GitHub Actions
- API-level verification

---

## Technology Stack

| Technology | Purpose |
|------------|---------|
| Playwright | Web automation and API testing |
| JavaScript | Programming language |
| Node.js | Runtime environment |
| VS Code | Development IDE |
| Git | Version control |
| GitHub | Source code repository |
| GitHub Actions | CI/CD |
| dotenv | Environment configuration |

---

## Project Structure

```text
OrangeHrm/
│
├── pages/
│   ├── LoginPage.js
│   └── EmployeePage.js
│
├── tests/
│   ├── Login.spec.js
│   └── EmployeeLifecycle.spec.js
│
├── utils/
│   └── testdata.js
│
├── .github/
│   └── workflows/
│       └── playwright.yml
│
├── .env
├── .gitignore
├── package.json
├── package-lock.json
├── playwright.config.js
└── README.md