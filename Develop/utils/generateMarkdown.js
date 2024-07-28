// Here is the link for the license badges

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // Declare let badge variable because this will change on condition
  let badge = "";
  switch (license) {
    case "MIT":
      badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      break;
    case "GPLv2":
      badge = "[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)";
      break;
    case "Apache 2.0":
      badge = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
      break;
    case "GPLv3":
      badge = "[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)";
      break;
    case "BSD 3-clause":
      badge = "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
    default:
      badge = "";
      break;
  }
  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let link = "";
  switch (license) {
    case "MIT":
      link = "\nFor more information about the MIT License visit [here](https://opensource.org/licenses/MIT).";
      break;
    case "GPLv2":
      link = "\nFor more information about the GPLv2 License visit [here](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)";
      break;
    case "Apache 2.0":
      link = "\nFor more information about the Apache 2.0 License visit [here](https://opensource.org/licenses/Apache-2.0)";
      break;
    case "GPLv3":
      link = "\nFor more information about the GPLv3 License visit [here](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)";
      break;
    case "BSD 3-clause":
      link = "\nFor more information about the BSD 3-Clause License visit [here](https://opensource.org/licenses/BSD-3-Clause)";
    default:
      link = "";
      break;
  }
  return link;

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const lisenceSection = `${renderLicenseBadge(license)}\n${renderLicenseLink(license)}`;
  return lisenceSection;
}

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
[Questions](#questions)\n

## Installation

${data.installation}

## Usage

${data.usage}

## License

${renderLicenseSection(data.license)}

## Contributing

${data.contributing}

## Tests

${data.tests}

## Questions

GitHub: [${data.github}](https://github.com/${data.github})\n

`;
}

module.exports = generateMarkdown;
