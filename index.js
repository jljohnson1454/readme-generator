
// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./Develop/utils/generateMarkdown');


// TODO: Create an array of questions for user input
const promptUser = () => {
    return inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the project title? (Required)',
            validate: titleInput => {
                if(titleInput) {
                    return true;
                } else {
                    console.log('Please enter project title!');
                    return false;
                }
            }

        },
        {
            type: 'input',
            name:'description',
            message: 'Please write a description of your project (Required)'
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
            type: 'checkbox',
            name: 'license',
            message: "Choose the licenses used in this project",
            choices: [ 'MIT', 'GNU_GPLv3', 'ISC', 'Apache', 'No license']
        }
    ])
    .then(data => {
        writeToFile('README.md', generateMarkdown(data));
    console.log(data)}
    )

}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(fileName, data)

}


// TODO: Create a function to initialize app
function init() {
    promptUser();
    }

// Function call to initialize app
init();