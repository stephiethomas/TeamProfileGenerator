const Engineer = require('../lib/Engineer')

test('creates an engineer object', () => {
    const engineer = new Engineer(123, 'Stephanie', 'stephie@email.com', 'StephieThomasHub')
    expect(engineer.name).toBe('Stephanie')
    expect(engineer.id).toBe(123)
    expect(engineer.email).toBe('stephie@email.com')
    expect(engineer.githubuser).toBe('StephieThomasHub')
}); 