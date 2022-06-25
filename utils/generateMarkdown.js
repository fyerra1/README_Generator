// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'Apache') {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  } else if (license === 'Boost') {
    return `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`;
  } else if (license === 'MIT') {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  } else if (license === 'Mozilla') {
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
  } else if (license === 'None') {
    return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`;
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'Apache') {
    return '[Apache](https://choosealicense.com/licenses/apache-2.0/) Licensed';
  } else if (license === 'Boost') {
    return '[Boost](https://choosealicense.com/licenses/bsl-1.0/0) Licensed';
  } else if (license === 'MIT') {
    return '[MIT](https://choosealicense.com/licenses/mit/) Licensed';
  } else if (license === 'Mozilla') {
    return '[Mozilla](https://choosealicense.com/licenses/mpl-2.0/) Licensed';
  } else if (license === 'None') {
    return '[Unlicensed](https://choosealicense.com/licenses/unlicense/)';
  } else {
    return "";
  }
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
return `${renderLicenseBadge(license)} ${renderLicenseLink(license)}`
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  ## Description

  ${data.desc}

  ## Table of Contents
  #### [Installation](#installation)
  #### [Usage](#usage)
  #### [Contribution](#contribution)
  #### [License](#license)
  #### [Contact](#questions)

  ## Installation

  ${data.install}

  ## Usage

  ${data.usage}

  ## Contribution

  ${data.contribution}

  ## License

  ${renderLicenseSection(data.license)}

  ## Questions?

  [${data.git}](https://github.com/${data.git})
  E-mail: ${data.email}

`;
}

module.exports = generateMarkdown;