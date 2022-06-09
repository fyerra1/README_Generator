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
    name: 'install',
    message: 'Please provide instructions for necessary installations to run project',
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
  {
    type: 'list',
    name: 'license',
    message: 'Please select a license for your project.',
    choices: ['Apache', 'Boost', 'MIT', 'Mozilla', 'Unlicense']
  },
  {
    type: 'input',
    name: 'username',
    message: 'Please provide your github username.',
  },
  {
    type: 'input',
    name: 'gitlink',
    message: 'Please provide the link to your github page.',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Please provide your email.',
  },

];

// TODO: Create a function to write README file
function writeToFile(content) {
  fs
    .writeFile('README.md', content, (error) => {
      if (error) {
        throw error;
      } else {
        console.log('File created!');
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





