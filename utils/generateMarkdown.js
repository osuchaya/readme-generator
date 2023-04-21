// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {


  let licenseBadge = '';
  if (license !== 'None') {
    licenseBadge = `![License:](https://img.shields.io/badge/License-${license}-yellow.svg)`
  }
  return licenseBadge;

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
//['MIT', 'APACHE_2.0', 'GPL_3.0', 'BSD_3', 'BSD_2', 'None']
function renderLicenseLink(license) {
  let licenseLink = '';
  if (license !== 'None') {
    licenseLink =  `\n* [License](#license)\n`;
  }
return  licenseLink;

 }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { 
  
  if (license !== 'None'){
  licenseSection = ""
  }
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.Title}
${renderLicenseBadge(data.License)}

## Description

${data.Description}

## Table of Contents

* [Installation](#installation)

* [Usage](#usage)
${renderLicenseLink(data.License)}

* [Contribution](#contribution)

* [Tests](#test)

* [Questions](#questions) 

## Installation

${data.Installation}

## Usage

${data.Usage}

## Contribution

${data.Contribution}

## Test

${data.Test}

## Questions

  If there are any questions, please contact me via ${data.Email}
`
}

module.exports = generateMarkdown;
