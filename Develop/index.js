
console.log('Hello World')
// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    //fs.writeFile

}





// TODO: Create an array of questions for user input
const promptUser = () => {
    return inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the project title?',
        },
        {
            type: 'input',
            name:'description',
            message: 'Please write a description of your project: '
        },
        {
            type: 'confirm',
            name: 'table',
            message: 'Please enter a table of contents (optional)'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Please provide installation steps (if any)'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'What is the project being used for?'
        },
        {
            type: 'input',
            name: 'credits',
            messagae: "Please list any collaborators or third party assets used: ",
        },
        {
            type: 'list',
            name: 'license',
            message: "Choose the licenses used in this project",
            choices: [ 'MIT License', 'Babel', '.NET Core', 'Rails'

            ]
        }


        
    ])
}


// TODO: Create a function to initialize app
function init() {
    promptUser();
    }

// Function call to initialize app
init();