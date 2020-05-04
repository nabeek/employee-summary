const managerQuestions = [
  {
    name: "name",
    message: "What is your manager's name?",
  },
  {
    name: "id",
    message: "What is your manager's id?",
    validate: function (value) {
      return value > 0
        ? true
        : "Please enter a positive number greater than zero.";
    },
  },
  {
    name: "email",
    message: "What is your manager's email?",
  },
  {
    name: "officeNumber",
    message: "What is your manager's office number?",
    validate: function (value) {
      return value > 0
        ? true
        : "Please enter a positive number greater than zero.";
    },
  },
];

const engineerQuestions = [
  {
    name: "name",
    message: "What is your engineer's name?",
  },
  {
    name: "id",
    message: "What is your engineer's id?",
    validate: function (value) {
      return value > 0
        ? true
        : "Please enter a positive number greater than zero.";
    },
  },
  {
    name: "email",
    message: "What is your engineer's email?",
  },
  {
    name: "github",
    message: "What is your engineer's GitHub profile?",
  },
];

const internQuestions = [
  {
    name: "name",
    message: "What is your intern's name?",
  },
  {
    name: "id",
    message: "What is your intern's id?",
    validate: function (value) {
      return value > 0
        ? true
        : "Please enter a positive number greater than zero.";
    },
  },
  {
    name: "email",
    message: "What is your intern's email?",
  },
  {
    name: "school",
    message: "What is your intern's school?",
  },
];

const addEmployee = [
  {
    name: "role",
    type: "list",
    message: "Which type of team member would you like to add?",
    choices: [
      "Manager",
      "Engineer",
      "Intern",
      "I don't want to add any more team members",
    ],
  },
];

module.exports = {
  managerQuestions,
  engineerQuestions,
  internQuestions,
  addEmployee,
};
