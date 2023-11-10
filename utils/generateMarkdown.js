// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
//Credit: https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba 
function renderLicenseBadge(license) {
  if (!license) {
    console.log("license");
    return "";
  } else {
    if (license === MIT) {
      console.log("MIT");
      
    }
     

  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title} 

    ## Description

    ${data.description}

    ## Table of Contents

    ${data.contents}

    - [Installation](#installation)
    - [Usage](#usage)
    - [Credits](#credits)
    - [License](#license)

    ## Installation

    ${data.steps}

    ## Usage

    Provide instructions and examples for use. Include screenshots as needed.
    ${data.screenshot}

    ## Credits


    ## License

    ---


    ## Features

    ## How to Contribute

    ## Tests`;
  };




export {renderLicenseBadge, renderLicenseLink, renderLicenseSection, generateMarkdown};
