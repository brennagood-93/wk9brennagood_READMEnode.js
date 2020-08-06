const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

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
    name: "Email",
    message: "What is your email address?"
},
{
    type: "input",
    name: "Github",
    message: "What is your Github username?"
}];


// function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, "UTF-8", function (error) {
        if (error) {
            console.log(error);
        }
        else {
        console.log("success");}
    })
}

// function to initialize program
function init() {
  inquirer
  .prompt(questions)  
  .then((answers) => {
     console.log(answers);
     const readMeText = generateMarkdown(answers);
     writeToFile("README.md", readMeText);
  })
  .catch((error) => {
      console.log(error)
  })

}

// function call to initialize program
init();
