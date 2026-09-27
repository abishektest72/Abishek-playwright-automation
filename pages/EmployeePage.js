import { expect } from '@playwright/test';

export class EmployeePage{

    constructor(page){

        this.page=page;

         this.pimMenu = page.locator(
            'a[href="/web/index.php/pim/viewPimModule"]');

     this.employeeList = page.getByRole('link', {
    name: 'Employee List'
});

this.addEmployeeButton = page.getByRole('link', {
    name: 'Add Employee'
});

    this.firstNameInput = page.locator(
            'input[name="firstName"]');
     this.lastNameInput = page.locator(
            'input[name="lastName"]'
        );

 this.saveButton = page.getByRole('button', {
            name: 'Save'
        });

this.successMessage = page.getByText('Successfully Saved', {
    exact: true
});


this.employeeNameInput = page
    .locator('.oxd-grid-item')
    .filter({ hasText: 'Employee Name' })
    .locator('input[placeholder="Type for hints..."]');

    this.searchButton = page.getByRole('button', {
    name: 'Search'
});
    }
     async openPIM() {
        await this.pimMenu.click();
    }
async openAddEmployee() {
    await this.addEmployeeButton.click();
}
    
 async createEmployee(firstName, lastName) {
        await this.firstNameInput.fill(firstName);
        await this.lastNameInput.fill(lastName);
        await this.saveButton.click();
    }
    async verifySuccessMessage() {
    await expect(this.successMessage).toBeVisible();
}


async openEmployeeList() {
    await this.employeeList.click();
}

async searchEmployee(employeeName) {
    await this.employeeNameInput.fill(employeeName);
    await this.searchButton.click();
}
async verifyEmployeeDisplayed(firstName) {
    await expect(
        this.page.getByText(firstName, { exact: true })
    ).toBeVisible();
}
async editEmployee(firstName) {
    const employeeRow = this.page.getByRole('row').filter({
        hasText: firstName
    });

    await employeeRow.locator('button').first().click();
}


async updateEmployee(lastName) {
    await this.lastNameInput.fill(lastName);
    await this.saveButton.click();

    await expect(
        this.page.locator('.oxd-toast').filter({
            hasText: 'Successfully Updated'
        })
    ).toBeVisible({ timeout: 10000 });
}
async deleteEmployee(firstName) {
    const employeeRow = this.page.getByRole('row').filter({
        hasText: firstName
    });

    await expect(employeeRow).toBeVisible({ timeout: 10000 });

    await employeeRow.locator('i.bi-trash').click();
}
async confirmDelete() {
    await this.page.getByRole('button', {
        name: 'Yes, Delete'
    }).click();
}


}
