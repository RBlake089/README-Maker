// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

// // TODO: Create a function to generate markdown for README
// function generateMarkdown(data) {
//   return `# ${data.title}

// `;
// }

// module.exports = generateMarkdown;


// Function to generate the license badge
function renderLicenseBadge(license) {
  if (license) {
    // Replace 'license' with the appropriate license value
    return `![License](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return '';
}

// Function to generate the license link
function renderLicenseLink(license) {
  if (license) {
    // Replace 'license' with the appropriate license value
    return `\n- [License](#license)\n`;
  }
  return '';
}

// Function to generate the license section of the README
function renderLicenseSection(license) {
  if (license) {
    return `## License

This project is licensed under the ${license} license. Click ${renderLicenseLink(license)} for more information.`;
  }
  return '';
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
${renderLicenseLink(data.license)}
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

${renderLicenseSection(data.license)}

## Contributing

${data.contributing}

## Tests

${data.tests}

## Questions

If you have any questions, please feel free to contact me:

- GitHub: [${data.GitHub}](https://github.com/${data.GitHub})
- Email: ${data.email}
`;
}
module.exports = generateMarkdown;