
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
            message: 'Please write a description of your project (Required)',
            validate: titleInput => {
                if(titleInput) {
                    return true;
                } else {
                    console.log('Please enter description of your project');
                    return false;
                }}
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Please provide installation steps',
            validate: titleInput => {
                if(titleInput) {
                    return true;
                } else {
                    console.log('Please enter installation steps!');
                    return false;
                }}
        },
        {
            type: 'input',
            name: 'usage',
            message: 'What is the project being used for?',
            validate: titleInput => {
                if(titleInput) {
                    return true;
                } else {
                    console.log('Please enter project use');
                    return false;
                }}
        },
        {
            type: 'input',
            name: 'credits',
            message: "Please list any contributors or third party assets used: ",
            validate: titleInput => {
                if(titleInput) {
                    return true;
                } else {
                    console.log('Please enter contributors!');
                    return false;
                }}
        },
        {
            type: 'checkbox',
            name: 'license',
            message: "Choose the licenses used in this project",
            choices: [ 'MIT', 'GNU_GPLv3', 'ISC', 'Apache', 'No license']
        },
        {
            type: 'input',
            name: 'questions',
            message: ["Please enter your Gihub username"],
            validate: titleInput => {
                if(titleInput) {
                    return true;
                } else {
                    console.log('Please enter username!');
                    return false;
                }}
            
        },
        {
            type: 'input',
            name: 'questions2',
            message: "Please enter your email address",
            validate: titleInput => {
                if(titleInput) {
                    return true;
                } else {
                    console.log('Please enter email address!');
                    return false;
                }}
            
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