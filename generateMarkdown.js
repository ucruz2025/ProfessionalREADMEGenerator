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
      const mit = `Copyright <YEAR> <COPYRIGHT HOLDER>

  Permission is hereby granted, free of charge, to any person obtaining a copy 
  of this software and associated documentation files (the "Software"), to deal 
  in the Software without restriction, including without limitation the rights 
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell 
  copies of the Software, and to permit persons to whom the Software is furnished 
  to do so, subject to the following conditions:
      
  The above copyright notice and this permission notice shall be included in 
  all copies or substantial portions of the Software.
      
  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, 
  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, 
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE 
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, 
  WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN 
  CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
      
  Live link to license: https://opensource.org/licenses/MIT`;
      return mit;

    case 'GNU GPLv3':
      const gnu = `Copyright (C) <year>  <name of author>

  This program is free software: you can redistribute it and/or modify
  it under the terms of the GNU General Public License as published by
  the Free Software Foundation, either version 3 of the License, or
  (at your option) any later version.
  
  This program is distributed in the hope that it will be useful,
  but WITHOUT ANY WARRANTY; without even the implied warranty of
  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
  GNU General Public License for more details.
  
  You should have received a copy of the GNU General Public License
  along with this program.  If not, see <https://www.gnu.org/licenses/>.`
      return gnu

    case 'Apache License 2.0':
      const apache = `Copyright [yyyy] [name of copyright owner]

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at
      
      http://www.apache.org/licenses/LICENSE-2.0
      
  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.`;
      return apache;

    case 'ISC License':
      const isc = `Copyright <YEAR> <OWNER>

  Permission to use, copy, modify, and/or distribute this software for any 
  purpose with or without fee is hereby granted, provided that the above 
  copyright notice and this permission notice appear in all copies.
      
  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES 
  WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY 
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, 
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM 
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER 
  TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF 
  THIS SOFTWARE.
      
  Live link to license: https://www.isc.org/licenses/`;
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
      const mit = `
${renderLicenseBadge(license)}
  
${renderLicenseLink(license)}`;
      return mit;

    case 'GNU GPLv3':
      const gnu = `
${renderLicenseBadge(license)}
  
${renderLicenseLink(license)}`;
      return gnu;

    case 'Apache License 2.0':
      const apache = `
${renderLicenseBadge(license)}
  
${renderLicenseLink(license)}`;
      return apache;

    case 'ISC License':
      const isc = `
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

## License
${renderLicenseSection(license)}
`;
  return readMeMarkUp
}

module.exports = generateMarkdown;
