const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer")


employees = [];

const addManager = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Name of Manager:'
        },
        {
            type: 'input',
            name: 'id',
            message: 'Managers ID:'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Managers email:'
        },
        {
            type: 'input',
            name: 'offNumber',
            message: 'Managers Office Number:'
        },
        {
            type: 'list',
            name: 'addTeammate',
            message: 'Want to add another team member?',
            choices: ['Manager', 'Engineer', 'Intern', 'No']
        }
    ])
    .then((managerResponse) => {
        const manager = new Manager(managerResponse.name, managerResponse.email, managerResponse.id, managerResponse.offNumber)
        employees.push(manager)
        switch(managerResponse.addTeammate) {
            case 'Engineer':
                addEngineer();
                break;
            case 'Intern':
                addIntern();
                break;
            default:
                writeToFile('dist/index.html', addEmployees(employees))
        }
    
    })
    
    }
    
    // engineer  questions
    const addEngineer = () => {
        inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: 'Name of Engineer:'
            },
            {
                type: 'input',
                name: 'id',
                message: 'Engineers ID:'
            },
            {
                type: 'input',
                name: 'email',
                message: 'Engineers email:'
            },
            {
                type: 'input',
                name: 'githubuser',
                message: 'Engineers GitHub:'
            },
            {
                type: 'list',
                name: 'addTeammate',
                message: 'Want to add another team member?',
                choices: ['Manager', 'Engineer', 'Intern', 'No']
            }
        ])
        .then((engineerResponse) => {
            const engineer = new Engineer(engineerResponse.id, engineerResponse.name, engineerResponse.email, engineerResponse.githubuser)
            employees.push(engineer)
            switch(engineerResponse.addTeammate) {
                case 'Engineer':
                    addEngineer();
                    break;
                case 'Intern':
                    addIntern();
                    break;
                default:
                    writeToFile('dist/index.html', addEmployees(employees))
            }
        })
    }
    
    
    // intern questions
    const addIntern = () => {
        inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: 'Name of Intern:'
            },
            {
                type: 'input',
                name: 'id',
                message: 'Interns ID:'
            },
            {
                type: 'input',
                name: 'email',
                message: 'Interns email:'
            },
            {
                type: 'input',
                name: 'school',
                message: 'Interns School:'
            },
            {
                type: 'list',
                name: 'addTeammate',
                message: 'Want to add another team member?',
                choices: ['Manager', 'Engineer', 'Intern', 'No']
            }
        ])
        .then((internResponse) => {
            const intern = new Intern(internResponse.id, internResponse.name, internResponse.email, internResponse.school)
            employees.push(intern)
            switch(internResponse.addTeammate) {
                case 'Engineer':
                    addEngineer();
                    break;
                case 'Intern':
                    addIntern();
                    break;
                default:
                    writeToFile('dist/index.html', addEmployees(employees))
            }
        })
    }
    
    addManager();
    
    function writeToFile(filename,data) {
        fs.writeFile(filename, data, (err) => {
            if(err) throw err;
            console.log('File successfully saved!')
        })
    }
   
    
