// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const util = require('util');

// const utils = require("utils")
const generateMarkdown = require("../Professional-README/utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [{

    type: "input",
    name: "username",
    message: "What is the  github username?",
  },
  {

    type: "input",
    name: "email",
    message: "What is the  email address?",
  },
  {

    type: "input",
    name: "title",
    message: "What is the  project title?",
  },
  {
    type: "input",
    name: "description",
    message: "write project description ",
  },
  {
    type: "list",
    message: "Choose a license for your projec.",
    choices: [
      "Apache_2.0",
      "MIT",
      "GPLv3",
      "Boost_1.0",
      "none"
    ],
    name: "license",
  },

  {
    type: "input",
    message: "what type of commond is used to install dependencies.",
    name: "installation",
  },
  {
    type: "input",
    message: "what does user need to know to run the application?.",
    name: "usage",
  },
  {
    type: "input",
    message: "what type of commond is used to run tests.",
    name: "tests",
  },
  
  {
    type: "input",
    message: "What can you  contribute.",
    name: "Contribution",
  }

]


// TODO: Create a function to initialize app
function init() {
  const userResponses = inquirer.prompt(questions)
    .then((userResponses) => {
      // const userInfo = api.getUser(userResponses);
      const markdown = generateMarkdown(userResponses);
      fs.writeFile('./readme/Readme.md', markdown,
      (err) =>
        err ? console.log(err) : console.log('Successfully created README.md!')
      );
    });
}

// Function call to initialize app
init();