// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require("./generateMarkdown");
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Title'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Description'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Installation'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Usage'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Contributing'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Tests'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your application',
        choices: ['None', 'Apache', 'GNU', 'MIT', 'BSD 2-Clause', 'BSD 3-Clause'],
    },
    {
        type: 'input',
        name: 'githubUsername',
        message: 'Provide your Github Username'

    },
    {
        type: 'input',
        name: 'emailAddress',
        message: 'Provide your email address'

    }
]



// TODO: Create a function to write README file (fs code to save file)
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log(`README file "${fileName}" created successfully!`);
      });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(function(answers) {
        const markdownText = generateMarkdown(answers);
        writeToFile('README1.md', markdownText);
    });
}

// Function call to initialize app
init();
