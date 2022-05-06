const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer')
const Intern = require('../lib/Intern')


function addCards(employees) {
  let cards = []
  for(let i = 0; i < employees.length; i++) {
    const employeeArray = employees[i];
    switch(employeeArray.getRole()) {
      case 'Manager':
        const manager = new Manager(employeeArray.id, employeeArray.name, employeeArray.email, employeeArray.offNumber);
        cards.push(addManagerCard(manager));
        break;
      case 'Engineer':
        const engineer = new Engineer(employeeArray.id, employeeArray.name, employeeArray.email, employeeArray.githubuser);
        cards.push(addEngineerCard(engineer));
        break;
      case 'Intern':
        const intern = new Intern(employeeArray.id, employeeArray.name, employeeArray.email, employeeArray.school);
        cards.push(addInternCard(intern));
        break;
    }
  }
  return cards.join(``)
}

let addManagerCard = (Manager) => {
  console.log(Manager.getName())
  return `
  <div class="card m-2 shadow" style="width: 20rem">
    <div class='card-header'>
      <h3 class="card-title">${Manager.getId()}</h3>
      <h6 class="card-text"><i class="fas fa-award"></i> ${Manager.getRole()}</h6>
    </div>
    <div class="card-body">
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${Manager.getEmail()}</li>
        <li class="list-group-item">Email: ${Manager.getName()}</li>
        <li class="list-group-item">Office Number: ${Manager.getOffNumber()}</li>
      </ul>
    </div>
  </div>
  `
}

let addEngineerCard = (Engineer) => {
  return `
  <div class="card m-2 shadow" style="width: 20rem">
    <div class='card-header'>
      <h3 class="card-title">${Engineer.getName()}</h3>
      <h6 class="card-text"><i class="fa fa-user-cog"></i> ${Engineer.getRole()}</h6>
    </div>
    <div class="card-body">
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${Engineer.getId()}</li>
        <li class="list-group-item">Email: ${Engineer.getEmail()}</li>
        <li class="list-group-item">GitHub: ${Engineer.getGithubUser()}</li>
      </ul>
    </div>
  </div>
  `
};

let addInternCard = (Intern) => {
  return `
  <div class="card m-2 shadow" style="width: 20rem">
    <div class='card-header'>
      <h3 class="card-title">${Intern.getName()}</h3>
      <h6 class="card-text"><i class="fa fa-chalkboard-teacher"></i> ${Intern.getRole()}</h6>
    </div>
    <div class="card-body">
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${Intern.getId()}</li>
        <li class="list-group-item">Email: ${Intern.getEmail()}</li>
        <li class="list-group-item">School: ${Intern.getSchool()}</li>
      </ul>
    </div>
  </div>
  `
}

function addEmployees(employees) {
  console.log(employees)
return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://kit.fontawesome.com/9fb727ea26.js" crossorigin="anonymous"></script>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
  <title>My Team</title>
</head>
<body>
<div class="jumbotron jumbotron-fluid bg-success bg-gradient">
  <div class="container">
    <h1 class="display-6 text-center">My Team</h1>
  </div>
</div>
<div class="d-flex flex-row flex-wrap justify-content-center">
${addCards(employees)}
</div>
</body>
</html>
    `
}


module.exports = addEmployees;