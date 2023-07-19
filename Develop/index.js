// // TODO: Include packages needed for this application



// // TODO: Create an array of questions for user input
// const questions = [];

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();

const inquirer = require("inquirer")
const fs = require("fs")
const path = require("path")
const generateMarkdown = require("./utils/generateMarkdown")

// Array of questions for user input
const questions = [
  
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Give me a description?'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What do you need to install for this project?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Why are using generator?'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Any contributors?'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Do you have any testing frameworks?'
    },
    {
        type: 'list',
        name: 'license',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
        message: 'Do you have any testing frameworks?'
    },
    {
        type: 'input',
        name: 'GitHub',
        message: 'What is your GitHub user name?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your E-Mail?'
    }
    
  ];
  
  // Function to write README file
  function writeToFile(fileName, data) {
    fs.writeFile(path.join(fileName), data, (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log('README.md file has been generated!');
      }
    });
  }
  
  // Function to initialize app
  function init() {
    inquirer.prompt(questions).then((answers) => {
       
      writeToFile('README.md', generateMarkdown({...answers}) );
    });
  }
  
  // Function call to initialize app
  init();
