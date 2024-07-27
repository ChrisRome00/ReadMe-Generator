// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = "";
  //if license = mit
  //    badge = mit license badge
  //else if license = GPLv2
  //    badge = GPLv2 badge
  // else if license = apache
  //    badge = apache badge
  // else if license = GPLv3
  //    badge = GPLv3
  //else if licese = BSD 3-clause
  //    badge = BSD 3-clause
  //else
  //    badge = ""

  return badge;
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
  
[Installation](#installation)\n
[Usage](#usage)\n
[License](#license)\n
  [Contributing](#contributing)\n
  [Tests](#tests)\n
    [Contact](#tests)\n

  ## Installation

    ${data.installation}

  ## Usage

    ${data.usage}

  ## License

    Enter license here

  ## Contributing

    ${data.contributing}

  ## Tests

    ${data.tests}

  ## Questions

    GitHub: ${data.github}\n

`;
}

module.exports = generateMarkdown;
