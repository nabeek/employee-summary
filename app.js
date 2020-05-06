const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const q = require("./lib/Questions");
let employees = [];

async function init() {
  console.log("Welcome to the Team Generator");
  console.log("Please build your team.");
  console.log("-----");

  let addMore = true;

  while (addMore == true) {
    try {
      const { role } = await inquirer.prompt(q.addEmployee);
      console.log(role);

      switch (role) {
        case "Manager":
          answers = await inquirer.prompt(q.managerQuestions);
          const newManager = new Manager(
            answers.name,
            answers.id,
            answers.email,
            answers.officeNumber
          );
          console.log(`${answers.name} has been added to the team.`);
          employees.push(newManager);
          break;
        case "Engineer":
          answers = await inquirer.prompt(q.engineerQuestions);
          const newEngineer = new Engineer(
            answers.name,
            answers.id,
            answers.email,
            answers.github
          );
          console.log(`${answers.name} has been added to the team.`);
          employees.push(newEngineer);
          break;
        case "Intern":
          answers = await inquirer.prompt(q.internQuestions);
          const newIntern = new Intern(
            answers.name,
            answers.id,
            answers.email,
            answers.school
          );
          console.log(`${answers.name} has been added to the team.`);
          employees.push(newIntern);
          break;
        case "I don't want to add any more team members":
          addMore = false;
          break;
      }
      console.log("-----");
    } catch (error) {
      console.error(error);
    }
  }

  buildTeam();
}

function buildTeam() {
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR);
  }
  fs.writeFileSync(outputPath, render(employees), "utf-8");
  console.log(`Your team's page was successfully rendered to ${outputPath}.`);
}

init();
