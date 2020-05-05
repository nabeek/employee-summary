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
    validate: function (value) {
      return value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
        ? true
        : "Please enter a valud email format, e.g. test@test.io";
    },
  },
  {
    name: "officeNumber",
    message: "What is your manager's office number?",
    validate: function (value) {
      return value.match(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/)
        ? true
        : "Please enter a valid phone number format, e.g. xxx-xxx-xxxx";
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
    validate: function (value) {
      return value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
        ? true
        : "Please enter a valud email format, e.g. test@test.io";
    },
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
    validate: function (value) {
      return value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
        ? true
        : "Please enter a valud email format, e.g. test@test.io";
    },
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
