const inquirer = require('inquirer');
const fs = require('fs');
const markdown = require('./utils/generateMarkdown');

// array of questions for user
const questions = [{
    type: "input",
    name: "Title",
    message: "What is your project title?"
},
{
    type: "input",
    name: "Description",
    message: "What is the project description?"
},
{
    type: "input",
    name: "Installation",
    message: "How do you install the application?"
},
{
    type: "input",
    name: "Usage",
    message: "What is the permisable use of the application?"
},
{
    type: "list",
    name: "License",
    choices: ["Public Domain", "MIT", "LGPL"],
    message: "Which type of license?"
},
{
    type: "input",
    name: "Contributing",
    message: "What is the contributing process?"
},
{
    type: "input",
    name: "Tests",
    message: "How do you run the testing?"
},
{
    type: "input",
    name: "Questions",
    message: "Direct questions to brenna.elise.good@gmail.com"
}];


inquirer
    .prompt(
        /* Pass your questions in here */
        questions
    )
    .then(answers => {
        // Use user feedback for... whatever!!
        const data = markdown(answers);
        writeToFile("README.md", data);
        console.log(answers);
    })
    .catch(error => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {
            // Something else when wrong
        }
    });

// function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, "UTF-8", function (error) {
        if (error) {
            console.log(error)
        }
        console.log("success")
    })
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
