export function generateEmployeeData() {

    const uniqueId = Date.now().toString().slice(-6);

    return {
        firstName: `QA${uniqueId}`,
        lastName: `Test${uniqueId}`
    };
}