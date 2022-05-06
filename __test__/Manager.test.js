const Manager = require('../lib/Manager')

test('creates an manager object', () => {
    const manager = new Manager(123, 'Stephanie', 'stephie@email.com', 'offNumber')
    expect(manager.name).toBe('Stephanie')
    expect(manager.id).toBe(123)
    expect(manager.email).toBe('stephie@email.com')
    expect(manager.offNumber).toBe('offNumber')
}); 

test('gets managers name', () => {
    const manager = new Manager(123, 'Stephanie', 'stephie@email.com', 'offNumber')
    expect(manager.getName()).toEqual(manager.name)
})