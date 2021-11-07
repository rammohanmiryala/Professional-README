// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const util = require('util');

// const utils = require("utils")
const generateMarkdown = require("../Professional-README/utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [{

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
    type: "input",
    message: "If applicable, describe the steps required to install your project for the Installation section.",
    name: "installation",
  },
  {
    type: "input",
    message: "Provide instructions and examples of your project in use for the Usage section.",
    name: "usage",
  },
  {
    type: "input",
    message: "If applicable, provide guidelines on how other developers can contribute to your project.",
    name: "contributing",
  },
  {
    type: "input",
    message: "If applicable, provide any tests written for your application and provide examples on how to run them.",
    name: "tests",
  },
  {
    type: "list",
    message: "Choose a license for your project.",
    choices: [
      "GNU AGPLv3",
      "GNU GPLv3",
      "GNU LGPLv3",
      "Mozilla Public License 2.0",
      "Apache License 2.0",
      "MIT License",
      "Boost Software License 1.0",
      "The Unlicense",
    ],
    name: "license",
  }

]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      return console.log(err);
    } else {
      console.log("Successfull");
    }
  })
}


// TODO: Create a function to initialize app
function init() {
  const userResponses = inquirer.prompt(questions)
    
  .then((userResponses) => {
      fs.writeFile('readme.md', generateMarkdown(userResponses), (err) =>
        err ? console.log(err) : console.log('Successfully created README.md!')
      );
    });
}

// Function call to initialize app
init();