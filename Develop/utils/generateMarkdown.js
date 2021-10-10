// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const findBadge = `![badge](https://img.shields.io/badge/License-${license}-brightgreen)`;
  if (license == 'No license') {
    return "No License";
  } else {
    return findBadge;
  }
}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {


// }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {
//   let element = '';
//   var i = 0;
//   while(i < license.length) {
//     element = license[i];
//     i++;
//     console.log(element)
//     return element;
//   }
  
//}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents
  1. [Installation](##installation)
  2. [Usage](#usage)
  3. [Credits](#credits)
  4. [License](#license)
  5. [Questions](#questions)
  
  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Credits
  ${data.credits}

  ## License
  ${data.license.map(value => {
    let link = `(https://choosealicense.com/licenses/${value.toLowerCase()}/)`;
    
    return `[${value}]${link}`
  }).join('<br />')}

  ## Questions

  If you have any questions, please feel free to reach me at my Github account or email:
  <br />
  <br />
  Github: [${data.questions}](https://github.com/${data.questions})
  <br />
  <br />
  Email: ${data.questions2}
`;
}

module.exports = generateMarkdown;
