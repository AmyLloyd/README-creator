// // TODO: Include packages needed for this application
import fs from 'node:fs';
//Import needed to use new version of inquirer in a native ESM environment
import inquirer from 'inquirer';

//connect the generateMarkdown.js file
import generateMarkdown from './utils/generateMarkdown.js';
console.log(generateMarkdown.js);

//questions array
const questions = [
    "What is your project title?", 
    "Write a short description explaining the what, why and how of your project",
    "What are the steps required to install your project?",
    "Would you like a table of contents?",
    "Add a screenshot file",
    "Give some instructions for use.",
    "List your collaborators and sources of code to credit them.",
    "Which license are you using?",
];
//destructure questions array so they can be easily inserted and used
const [title, description, steps, contents, screenshot, instrustions, credits, license] = questions;

inquirer
    .prompt([
        {
        type: "input", 
        message: title,
        name:"title",
        },
        {
        type: "input",
        message: description,
        name: "description",
        choices: ["title", "description", "instructions", "table of contents"],
        },
        {
            type: "input",
            message: steps,
            name: "steps",
        },
        {type: "input",
        message: contents,
        name:"contents"
        },
        {
        type: "input",
        message: screenshot,
        name: "screenshot",
        },
    ])
    //add promise writing data to the README file
    .then((data) => {
        const htmlPageContent = generateHTML(data);

        fs.writeFile('myREADME.md', htmlPageContent, (err) =>
        err ? console.log(err) 
        : console.log("Success!")
        );
    })
    .catch((error) => {
        console.log("checking for errors");
        if(error.isTtyError) {
            //Prompt couldn't be rendered in the current environment
        } else {
            //Something else went wrong
        } 
     });


// // TODO: Create an array of questions for user input


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