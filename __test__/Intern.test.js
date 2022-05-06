const Intern = require('../lib/Intern')

test('creates an intern object', () => {
    const intern = new Intern(123, 'Stephanie', 'Stephie@email.com', 'school')
    expect(intern.name).toBe('Stephanie')
    expect(intern.id).toBe(123)
    expect(intern.email).toBe('Stephie@email.com')
    expect(intern.school).toBe('school')
}); 