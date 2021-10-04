// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
const inquirer = require('inquirer');

const promptUser = () => {
    return inquirer
    .prompt([
        {
            type: 'input',
            name: 'Your Project Title',
            message: 'What is the project title?',
        },
        {
            type: 'input',
            name:'description',
            message: 'Please write a description of your project: '
        },
        {
            type: 'confirm',
            name: 'Table of Contents',
            message: 'Please enter a table of contents (optional)'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Please provide installation steps (if any)'
        },
        {
            type: 'input',
            name: 'Usage',
            message: 'What is the project being used for?'
        },
        {
            type: 'input',
            name: 'Credits',
            messagae: "Please list any collaborators or third party assets used: ",
        },
        {
            type: 'list',
            name: 'License',
            message: "Choose the licenses used in this project",
            choices: [ 'MIT License', 'Babel', '.NET Core', 'Rails'

            ]
        }


        }
    ])
}