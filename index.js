// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs');
const util = require('util');
const generateMarkdown = require('./generateMarkdown');

const writeOnFile = util.promisify(fs.writeFile);

// TODO: Create an array of questions for user input
const questions = [
    {
        type:"input",
        name:"projectTitle",
        message:"What is the title of your project?"
    },
    {
        type:"input",
        name:"description",
        message:"Enter a brief description of your project."
    },
    {
        type:"input",
        name:"installation",
        message:"What are the steps required to install your project?"
    },
    {
        type:"input",
        name:"usage",
        message:"Provide instructions and examples for how to navigate through your project."
    },
    {
        type:"input",
        name:"contributing",
        message:"Are there any guidelines for users to contribute to this project? If so, please enter instructions."
    },
    {
        type:"input",
        name:"tests",
        message:"Enter any tests for your application."
    },
    {
        type:"input",
        name:"github",
        message:"What is your GitHub username? (If users have any further question, will reach out to this username)"
    },{
        type:"input",
        name:"email",
        message:"What is your email address? (If users have any further question, will reach out to this email address)"
    },
    {
        type:"list",
        name:"license",
        message: "What type of Liscense would you like to add to your README file? (Make sure to fill in the blanks within the [] or <> once generated)",
        choices: ['MIT License', 'GNU GPLv3', 'Apache License 2.0', 'ISC License']
    }
];

// TODO: Create a function to write README file
const init = () => {
    inquirer.prompt(questions)
    .then(answers => {
        console.log(answers)
        const myREADME = generateMarkdown(answers);
        writeOnFile("README.md", myREADME, (err) => {
            err ? console.log(err) : console.log("Success!")
        });
    })
};

// Function call to initialize app
init();
