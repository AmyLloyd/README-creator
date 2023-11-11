// // TODO: Include packages needed for this application
import fs from 'node:fs';
//Import needed to use new version of inquirer in a native ESM environment
import inquirer from 'inquirer';

//connect the generateMarkdown.js file
import {renderLicenseBadge, renderLicenseLink, renderLicenseSection, generateMarkdown} from "./utils/generateMarkdown.js"

// console.log(generateMarkdown);
// generateMarkdown();



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
const [qTitle, qDescription, qSteps, qContents, qScreenshot, qInstructions, qCredits, qLicense] = questions;

const licenseChoices = ["Apache License 2.0", "MIT license", "GNU General Public License v3.0", "Creative Commons Zero v1.0", "Mozilla Public License 2.0"];

let promptUser = () => {
  inquirer
    .prompt([
        {
        type: "input", 
        message: qTitle,
        name:"title",
        },
        {
        type: "input",
        message: qDescription,
        name: "description",
        },
        {
        type: "input",
        message: qSteps,
        name: "steps",
        },
        {
        type: "confirm",
        message: qContents,
        name:"contents",
        default: true,
        },
//Trying to customise table fo contents through looping through the array
        // {
        // type: "checkbox",
        // message: "Which sections would you like to include in the Table of Contents?",
        // choices: ["Installation", "Usage", "Credits", "License"],
        // name: "contentsIncludes",
        // when: (data) => data.contents === true
        // },
        {
        type: "input",
        message: qScreenshot,
        name: "screenshot",
        },
        {
        type: "input",
        message: qInstructions,
        name: "instructions",
        },
        {
        type: "input",
        message:qCredits,
        name: "credits",
        },
        {
        type: "list",
        message: qLicense,
        name: "license",
        choices: licenseChoices,
        default: licenseChoices[1],
        },
    ])
    //add promise writing data to the README file
    .then((data) => {
        const readmeContent = generateMarkdown(data);
        fs.writeFile('myREADME.md', readmeContent, (err) =>
        err ? console.log(err) 
        : console.log("Success!")
        );
    })
    .catch((error) => {
        console.log("checking for errors");
        if(error.isTtyError) {
            //Prompt couldn't be rendered in the current environment
        } else {
            console.log("something else went wrong");
            //Something else went wrong
        } 
     });
}



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

const init = () => {
    promptUser();

};

init();