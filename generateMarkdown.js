// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license){
    case 'MIT License':
      const mit = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
      return mit;

    case 'GNU GPLv3':
      const gnu = `[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](http://www.gnu.org/licenses/gpl-3.0)`;
      return gnu;

    case 'Apache License 2.0':
      const apache = `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
      return apache;

    case 'ISC License':
      const isc = `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`;
      return isc;

    default:
      var empty = "N/A";
      return empty;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  
  switch (license){
    case 'MIT License':
      const mit = `Live link to license: https://opensource.org/licenses/MIT`;
      return mit;

    case 'GNU GPLv3':
      const gnu = `Live link to license: http://www.gnu.org/licenses/gpl-3.0`
      return gnu

    case 'Apache License 2.0':
      const apache = `Live link to license: https://opensource.org/licenses/Apache-2.0`;
      return apache;

    case 'ISC License':
      const isc = `Live link to license: https://opensource.org/licenses/ISC`;
      return isc;

    default:
      var empty = "N/A";
      return empty;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  var empty = "N/A";
  switch (license){
    case 'MIT License':
      const mit = `## MIT License
${renderLicenseBadge(license)}
  
${renderLicenseLink(license)}`;
      return mit;

    case 'GNU GPLv3':
      const gnu = `## GNU GPLv3 License
${renderLicenseBadge(license)}
  
${renderLicenseLink(license)}`;
      return gnu;

    case 'Apache License 2.0':
      const apache = `## Apache License 2.0
${renderLicenseBadge(license)}
  
${renderLicenseLink(license)}`;
      return apache;

    case 'ISC License':
      const isc = `## ISC License
${renderLicenseBadge(license)}
  
${renderLicenseLink(license)}`;
      return isc;

    default:
      return empty;
  }
}

// TODO: Create a function to generate markdown for README
const generateMarkdown = (answers) => {
  const {projectTitle, description, installation, usage, contributing, tests, github, email, license} = answers;
  const readMeMarkUp = `# ${projectTitle}

## Description
${description}
  
## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions?](#questions?)
* [License](#license)
  
## Installation
${installation}
  
## Usage
${usage}
  
## Contributing
${contributing}
  
## Tests
${tests}
  
## Questions?
If you happen to have any further questions regarding the project, feel free to reach out to:

Github: ${github}
Email: ${email}
  
${renderLicenseSection(license)}
`;
  return readMeMarkUp
}

module.exports = generateMarkdown;
