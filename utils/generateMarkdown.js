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
    return `https://choosealicense.com/licenses/apache-2.0/`;
  } else if (license === 'Boost') {
    return `https://choosealicense.com/licenses/bsl-1.0/`;
  } else if (license === 'MIT') {
    return `https://choosealicense.com/licenses/mit/`;
  } else if (license === 'Mozilla') {
    return `https://choosealicense.com/licenses/mpl-2.0/`;
  } else if (license === 'None') {
    return `https://choosealicense.com/licenses/unlicense/`;
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


  ## Installation

  ${data.install}

  ## Usage

  ${data.usage}

  ## Contribution

  ${data.contribution}

  ## License

  ${renderLicenseSection(data.license)}

`;
}

module.exports = generateMarkdown;

// list inquirer 
// list of badges