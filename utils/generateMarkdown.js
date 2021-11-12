 // TODO: Create a function to generate markdown for README

function generateMarkdown(userResponses) {
return `
  # ${userResponses.title}

  ![License](https://img.shields.io/badge/Licence-${userResponses.license}-red)

  ${userResponses.description}
  
## Table of Contents 
- [Installation](#Installation)
- [Usage](#Usage)
- [Contributions](#Contribution)
- [Test](#Test)
- [Questions](#Questions)
- [License](#License)
- [Author](#Author)

    
## Installation

*To make the code run install this code*

${userResponses.installation} 

    
## Usage 
*Run this code to run the application*

${userResponses.usage}


## Contribution
*developers can contribute to project by following*

${userResponses.Contribution}

## Test
*Tests for application and how to run them*

${userResponses.tests}

## License 

Licensed under the ${userResponses.license} License. 

## Questions 
     
# Author 

![avatar](https://avatars.githubusercontent.com/${userResponses.username})

---
- github: https://github.com/${userResponses.username}

- Email: ${userResponses.email}
  `;

 }

module.exports = generateMarkdown;

