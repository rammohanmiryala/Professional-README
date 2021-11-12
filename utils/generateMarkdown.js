 // TODO: Create a function to generate markdown for README

function generateMarkdown(userResponses) {
return `
  # ${userResponses.title}

  ![License](https://img.shields.io/badge/Licence-${userResponses.license}-red)

  ${userResponses.description}
  
## Table of Contents 
- [Installation](#Installation)
- [Usage](#Usage)
- [Contributions](#Contributions)
- [Test](#Test)
- [Questions](#Questions)
- [License](#License)
- [Author](#Author)

    
## Installation
*To make the code run install this code  *

${userResponses.installation} 

    
## Usage 
*Run this code to run the application*

${userResponses.usage}


## Contributions
*developers can contribute to project by following*
${userResponses.contributing}

## Test
*Tests for application and how to run them*

${userResponses.tests}

## License 
Licensed under the ${userResponses.license} License . 

## Questions 
     
## Author 

![avatar](https://avatars.githubusercontent.com/${userResponses.username})


github: (https://github.com/${userResponses.username})
email: ${userResponses.email}
  `;

 }

module.exports = generateMarkdown;



 //    // Generate Table of Contents conditionally based on userResponses
//    let draftToC = `## Table of Contents`;

//    if (userResponses.installation !== '') {
//      draftToC += `
//   * [Installation](#installation)`
//    };

//    if (userResponses.tests !== '') {
//      draftToC += `
//   * [tests](#tests)`
//    };
//    if (userResponses.useage !== '') {
//      draftToC += `
//   * [repo](#repo)`
//    };
//    if (userResponses.contributing !== '') {
//      draftToC += `
//   * [Contributing](#contributing)`
//    };

//    // Generate markdown for the top required portions of the README

//    let draftMarkdown =
//   `# ${userResponses.title}
     
//    ## Description 
//   ${userResponses.description}
//   `
//    // Add Table of Contents to markdown
//    draftMarkdown += draftToC;

//    // Add License section since License is required to Table of Contents
//    draftMarkdown += `
//     * [License](#license)`;

//    // Optional Installation section
//    if (userResponses.installation !== '') {
//      draftMarkdown +=

//        `
//   Run this code to installation
//   \`\`\`
//   ${userResponses.installation}
//   \`\`\`
  
//   `
//    };
//    // Optional Usage section
//    if (userResponses.tests !== '') {
//      draftMarkdown +=
//        `
//   ## tests 
//   Run this code to TEST
//   \`\`\`
//   ${userResponses.tests}
//   \`\`\`

//   ## Useage
//   \`\`\`
//   ${userResponses.useage}
  
//   \`\`\`
//   `

//    };
//    // Optional Contributing section
//    if (userResponses.contributing !== '') {

//      draftMarkdown +=

//        `
  
//   ## Contributing
    
//   ${userResponses.contributing}`
//    };




//    // Optional Tests section
//    if (userResponses.tests !== '') {

//      draftMarkdown +=
//        `
  
//   ## Tests
//   \`\`\`
//   ${userResponses.tests}
//   \`\`\`
//   `
//    };

//    // License section is required


//    draftMarkdown +=
//      `
//   ## The following appearance of the site:

//   ![my DEMO](./assets/demo.gif)


//   ## License

//   \`\`\`
//   Licensed under the ${userResponses.license} license
//   \`\`\`

//   `;
//    // Questions / About Developer section
//    let draftDev =
//      `
  

//   ## Questions?

//   For any questions, please contact me with the information below:
 
//   GitHub: [@${userResponses.username}](https://github.com/${userResponses.username})
//   `;

//    // If GitHub email is not null, add to Developer section
//    if (userResponses.email !== null) {

//      draftDev +=
//        `

//   Email: ${userResponses.email}

//   `
//    };

//    // Add developer section to markdown
//    draftMarkdown += draftDev;

//    // Return markdown
//    return draftMarkdown;