// TODO: Include packages needed for this application
const fs = require('fs');
import inquirer from 'inquirer';

// TODO: Create an array of questions for user input
const questions = [
    "What is your name?", 
    "What is your gitHub username?",
    "Which languages are you proficient in?",
    "What are your strengths as a developer?",
    "What are your strengths as a team member?",
    "What do you want to achieve in your work?"
];

inquirer.prompt([
])
.then((answers) => {

})

.catch((errror) => {
    if(error.isTtyError) {
        //Prompt couldn't be rendered int he current environment
    } else {
        //Something else went wrong
    } 
});

for (const question of questions) {
    console.log(question);
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    data = data.JSON.stringify(data, null, "\t"), (err) =>
    err ? console.log(err) : console.log("Success!")
    fileName = "README.md";

};
//refer to documentation https://www.npmjs.com/package/inquirer#inquirercreatepromptmodule---prompt-function
// TODO: Create a function to initialize app
function init() {
   
};




// Function call to initialize app
init();
