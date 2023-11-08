// // TODO: Include packages needed for this application
// // const fs = require('fs');
import fs from 'node:fs';
import inquirer from 'inquirer';

inquirer
    .prompt([
        {
        type: "input", 
        message: "What is your name?",
        name:"title",
        },
        {
        type: "checkbox",
        message: "What sections would you like in the README file?",
        name: "sections",
        choices: ["title", "description", "instructions", "table of contents"],
        },
    ])
    .then((data) => 
        console.log(data, 'data'))

    .catch((error) => {
        console.log("checking for errors");
        if(error.isTtyError) {
            //Prompt couldn't be rendered in the current environment
        } else {
            //Something else went wrong
        } 
});

// // TODO: Create an array of questions for user input
// const questions = [
//     "What is your project title?", 
//     "Write a short description explaining the what, why and how of your project",
//     "What are the steps required to install your project?",
//     "What are your strengths as a developer?",
//     "Would you like a table of contents?",
//     "Add a screenshot file",
//     "Give some instructions for use.",
//     "List your collaborators and sources of code.",
// ];

// // for (const question of questions) {
// //     console.log(question);
// // }

// //Code tutorial from https://au.video.search.yahoo.com/search/video?ei=UTF-8&p=example+of+inquirer+javascript&type=E210US0G0#id=1&vid=b0bf788b697d81db8526ede260db27a4&action=view
// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {
//     data = data.JSON.stringify(data, null, "\t"), (err) =>
//     err ? console.log(err) : console.log("Success!")
//     fileName = "README.md";

// };
// //refer to documentation https://www.npmjs.com/package/inquirer#inquirercreatepromptmodule---prompt-function
// // TODO: Create a function to initialize app
// function init() {
   
// };




// // Function call to initialize app
// init();

// inquirer.prompt();