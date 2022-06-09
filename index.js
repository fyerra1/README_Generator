// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')
console.log(generateMarkdown);

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'Please enter name of project',
  },
  {
    type: 'input',
    name: 'desc',
    message: 'Please describe your project.',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Please provide instructions to install project',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Please provide instructions for use.',
  },
  {
    type: 'input',
    name: 'contribution',
    message: 'Please list your collaborators (if any).',
  },

];

// TODO: Create a function to write README file
function writeToFile(content) {
  fs
    .writeFile('README.md', content, (error) => {
      if (error) {
        throw error;
      } else {
        console.log('File successfully created!');
      }
    })
}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then(data => {
      console.log(data);
      const readmeTemplate = generateMarkdown(data);
      console.log(readmeTemplate);
      writeToFile(readmeTemplate);
    })
  
}

// Function call to initialize app
init();





