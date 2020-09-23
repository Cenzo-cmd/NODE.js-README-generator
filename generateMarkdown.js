// function to generate markdown for README
function generateMarkdown(data) {
    return `

  ![License](https://img.shields.io/badge/License-${(data.license).split(" ").join("_")}-red)
    
  # ${data.title}

  ## Description

  ${data.description}

  ## Creator

  ${data.creator} <br>
  <a href='https://github.com/${data.github}' target='_blank'> Github Page</a><br>
  <a href="${data.email}">You can email me here</a>

  
  ## Table of Contents

    -[Title](#${data.title})
    -[Description](#description)
    -[Creator](#creator)
    -[Table of Contents](#table-of-contents)
    -[Installation](#installation)
    -[Usage](#usage)
    -[Contributing](#contributing-guidelines)
    -[Test Instructions](#test-instructions)
    -[License](#license)

  ## Installation Instructions

  ${data.install}

  ## Usage

  ${data.usage}

  ## Contributing Guidelines

  ${data.contributing}

  ## Test instructions

  ${data.test}

  ## License
   
  ${data.license}

  ![License](https://img.shields.io/badge/License-${(data.license).split(" ").join("_")}-red)
`;
}

module.exports = generateMarkdown;