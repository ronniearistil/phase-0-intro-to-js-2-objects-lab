// 1. Initialize the employee object globally
const employee = {
    name: "Sam",
    streetAddress: "123 Main St"
  };
  
  // 2. Function to update the employee object non-destructively
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
      ...employee,
      [key]: value
    };
  }
  
  // 3. Function to update the employee object destructively
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }
  
  // 4. Function to delete a key from the employee object non-destructively
  function deleteFromEmployeeByKey(employee, key) {
    let newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
  }
  
  // 5. Function to delete a key from the employee object destructively
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }
  