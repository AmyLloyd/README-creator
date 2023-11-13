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


export {generateMarkdown};
