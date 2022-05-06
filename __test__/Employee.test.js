const Employee = require('../lib/Employee')

test('creates an employee object', () => {
    const employee = new Employee(123, 'Stephanie', 'stephie@email.com')
    expect(employee.id).toBe(123)
    expect(employee.name).toBe('Stephie')
    expect(employee.email).toBe('Stephie@email.com')
});