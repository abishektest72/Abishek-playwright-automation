import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { EmployeePage } from '../pages/EmployeePage';
import { generateEmployeeData } from '../utils/testdata';

test('Create employee', async ({ page }) => {

    // Login
   await page.goto(process.env.ORANGEHRM_BASE_URL);
    const loginPage = new LoginPage(page);

    await loginPage.login(
    process.env.ORANGEHRM_USERNAME,
    process.env.ORANGEHRM_PASSWORD
);



    // Employee
    const employeePage = new EmployeePage(page);

    await employeePage.openPIM();

    await employeePage.openAddEmployee();


  const { firstName, lastName } = generateEmployeeData();


await employeePage.createEmployee(firstName, lastName);

    await employeePage.verifySuccessMessage();

    await employeePage.openEmployeeList();

    await employeePage.searchEmployee(`${firstName} ${lastName}`);

    await employeePage.verifyEmployeeDisplayed(firstName);

    await employeePage.editEmployee(firstName);
  

    const updatedLastName = `Updated${Date.now()}`;

await employeePage.updateEmployee(updatedLastName);

await employeePage.openEmployeeList();
await employeePage.searchEmployee(`${firstName} ${updatedLastName}`);


await employeePage.deleteEmployee(firstName);
});