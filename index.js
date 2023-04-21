

// DONE: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const createMD = require('./utils/generateMarkdown');


// DONE: Create an array of questions for user input
const questions = [

    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'Title',
    },
    {
        type: 'input',
        message: 'Please write a description of your project.',
        name: 'Description',
    },
    {
        type: 'input',
        message: 'Please include installation instructions.',
        name: 'Installation',
    },
    {
        type: 'input',
        message: 'What is the usage information?',
        name: 'Usage',
    },
    {
        type: 'input',
        message: 'Please include contribution guideline.',
        name: 'Contribution',
    },
    {
        type: 'input',
        message: 'Please include any test instructions.',
        name: 'Test',
    },
    {
        type: 'list',
        message: 'Please choose a license from below:',
        name: 'License',
        choices: ['MIT', 'APACHE_2.0', 'GPL_3.0', 'BSD_3', 'BSD_2', 'None']
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'GitHub',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'Email',
    },
];



// DONE: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// DONE: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions).then((response) => {
            console.log("response = ", response);
            writeToFile("Generated_README.md", createMD(response));
        })
}

// Function call to initialize app
init();
