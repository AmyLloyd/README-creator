// // TODO: Include packages needed for this application
import fs from 'node:fs';
//Import needed to use new version of inquirer in a native ESM environment
import inquirer from 'inquirer';

//connect the generateMarkdown.js file
import {generateMarkdown} from "./utils/generateMarkdown.js"

//license constructor function
function License(name, badge, link) {    
    this.name = name;
    this.badge = badge;
    this.link = link;
    this.key = "";
    this.value = "";
};

License.prototype.renderLicenseSection = function () {
    return `## License ${this.badge}  
This app is licensed under ${this.name}. 
More information can be found at ${this.link}`;
};

const m = new License(
    "mit license",
    "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
    "https://choosealicense.com/licenses/mit/",
    "m",
    "MIT license",
);

const a = new License(
    "Apache license 2.0", 
    "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
    "https://choosealicense.com/licenses/apache-2.0/",
    "a",
    "Apache license 2.0",
);

const z = new License(
    "Mozilla Public License 2.0",
    "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)",
    "https://choosealicense.com/licenses/mpl-2.0/",
    "z",
    "Mozilla Public License 2.0",
)

const g = new License(
    "GNU General Public License v3.0",
    "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)",
    "https://choosealicense.com/licenses/agpl-3.0/",
    "g",
    "GNU General Public License v3.0",

)

const c = new License(
    "Creative Commons Zero v1.0",
    "[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)",
    "https://choosealicense.com/licenses/cc0-1.0/",
    "c",
    "Creative Commons Zero v1.0",
)

//questions array
const questions = [
    "What is your project title?", 
    "Write a short description explaining the what, why and how of your project.",
    "How do you install your project?",
    "Give some instructions for use.",
    "List your collaborators and sources of code to credit them.",
    "Which license are you using?",
    "List the special features of your project.",
    "Give instructions for how to contribute to your project.",
    "Include any tests you have developed for users.",
    "Write your github username and email address so that people can contact with any questions."
];

//destructure questions array so they can be easily inserted and used
const [qTitle, qDescription,  qSteps, qInstructions,  qCredits, qLicense, qFeatures, qContribute, qTests, qQuestions,] = questions;

const licenseChoices = [
    {key: "a", value: "Apache license 2.0", name: "Apache license"}, 
    {key: "m", value: "MIT license", name: "MIT license"}, 
    {key: "g", value: "GNU General Public License v3.0", name: "GNU General Public License v3.0"},
    {key: "c", value: "Creative Commons Zero v1.0", name: "Creative Commons Zero v1.0"},
    {key: "z", value: "Mozilla Public License 2.0", name: "Mozilla Public License 2.0"},
];

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
        type: "expand",
        message: qLicense,
        name: "license",
        choices: licenseChoices,
        default: licenseChoices[1],
        },
        {
        type: "features",
        message: qFeatures,
        name: "features",
        },
        {
        type: "input",
        message: qContribute,
        name: "contribute",
        },
        {
        type: "input",
        message: qTests,
        name: "tests",
        },
        {
        type: "type",
        message: qQuestions,
        name: "questions",        
        }

    ])
    .then((data) => {
    const readmeContent = generateMarkdown(data);
    fs.writeFile('myREADME.md', readmeContent, (err) => err ? console.log(err) : console.log('Success generating markdown'));

    if (data.license === "MIT license"){
        const licenseSection = m.renderLicenseSection(data);
        fs.appendFile('myREADME.md', licenseSection, (err) => err ? console.log(err) : console.log("Success appending license!")); 
        } else if (data.license === "Apache license 2.0") {
        const licenseSection = a.renderLicenseSection(data);
        fs.appendFile('myREADME.md', licenseSection, (err) => err ? console.log(err) : console.log("Success appending license!")); 
        } else if (data.license === "GNU General Public License v3.0"){
        const licenseSection = g.renderLicenseSection(data);
        fs.appendFile('myREADME.md', licenseSection, (err) => err ? console.log(err) : console.log("Success appending license!")); 
        } else if (data.license === "Mozilla Public License 2.0") {
        const licenseSection = z.renderLicenseSection(data);
        fs.appendFile('myREADME.md', licenseSection, (err) => err ? console.log(err) : console.log("Success appending license!")); 
        } else if (data.license === "Creative Commons Zero v1.0") {
        const licenseSection = c.renderLicenseSection(data);
        fs.appendFile('myREADME.md', licenseSection, (err) => err ? console.log(err) : console.log("Success appending license!"));
        }  
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
};

const init = () => {
    promptUser();
};

init();
