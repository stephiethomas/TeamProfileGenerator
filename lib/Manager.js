const Employee = require('./Employee');

class Manager extends Employee{
    constructor(id, name, email, offNumber) {
        super(id,name,email)
        this.offNumber = offNumber;
    }

    getNumber() {
        return this.offNumber
    }

    getRole() {
        return 'Manager'
    }
}

module.exports = Manager;