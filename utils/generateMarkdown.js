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
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.Title}
${renderLicenseBadge(data.License)}

## Description

${data.Description}

## Table of Contents

* [Installation](#installation)

* [Usage](#usage)

* [Contribution] (#contribution)

* [Tests] (#test)

* [Questions] (#questions)

`
}

module.exports = generateMarkdown;
