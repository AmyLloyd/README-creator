// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
//https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba for license badges 
//Credit: https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba 
// function renderLicenseBadge(license) {
//   if (!license) {
//     console.log("license");
//     ![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
//     console.log("No license");
//     return
//   } else {
//     if (license === MIT) {
//       console.log("MIT");

//     }   
//   } else {
//     if (license === mozilla) {
//       [![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)
//     }
//   } else {
//     if (license === "creative commons") {
//       [![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)
//     }
//   }
//   }
// }

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}

## Description

${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [Features](#features)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
- [License](#license)

## Installation

${data.steps}

## Usage

${data.instructions}

## Credits
${data.credits}

## Features
${data.features}

## Contributing
${data.contribute}  

## Tests  
${data.tests}

## Questions
${data.questions}

`
;

};

  //Unfinished table of contents
// function includesTableOfContents (data) {
//   while (data) {
//     const writeContents = () => (value)
//       let contentsTextInput = "[${" + value + "}]" + "(#${" + value + "})  ";
//       let contentsText = [];
//       contentsText.push(contentsTextInput);
      
      
//     data.contentsIncludes.forEach(writeContents);
//     const contentTable = 
//   }
//   return `
// };


export {generateMarkdown};
