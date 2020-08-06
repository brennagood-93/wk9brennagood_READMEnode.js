// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.Title}

  [![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)
  
  ## Description: ${data.Description}
  ## Table of Contents
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [License](#License)
  * [Contributing](#Contributing)
  * [Tests](#Tests)
  * [Questions](#Questions)
  
  ## Installation: ${data.Installation}
  ## Usage: ${data.Usage}
  ## License: ${data.License}
  ## Contributing: ${data.Contributing}
  ## Tests: ${data.Tests}
  ## Questions
  Email: ${data.Email}
  Github: ${data.Github}

`;
}

module.exports = generateMarkdown;
