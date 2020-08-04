// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.Title}
  Description: ${data.Description}

`;
}

module.exports = generateMarkdown;
