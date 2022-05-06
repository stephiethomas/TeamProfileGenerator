const Employee = require('./Employee');


class Engineer extends Employee{
    constructor(id, name, email, githubuser) {
        super(id,name,email)
        this.githubuser = githubuser;
    }

    getGithubUser() {
        return this.githubuser
    }

    getRole() {
        return 'Engineer'
    }
}

module.exports = Engineer;