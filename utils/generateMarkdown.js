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
// export module wasn't working so exporting individual functions this way
function generateMarkdown(data) {
  return `# ${data.title}`;
}




export {renderLicenseBadge, renderLicenseLink, renderLicenseSection, generateMarkdown};
//module.exports = generateMarkdown;