// function to generate markdown for README
function generateMarkdown(data) {
    return `
    
    # ${data.title}

  ## Description

  ${data.description}

  ##Creator

  

  ## Table of Contents

    -[Title](#${data.title})
    -[Description](#description)
    -[Creator](#creator)
    -[Table of Contents](#table-of-contents)
    -[Installation](#installation)
    -[Usage](#usage)
    -[License](#license)
    -[Contributing](#contributing)
    -[Test Instructions](#test-instructions)
    


 

`;
}

module.exports = generateMarkdown;