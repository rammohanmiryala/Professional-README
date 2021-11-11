 //  TODO: Create a function that returns a license badge based on which license is passed in
 //  If there is no license, return an empty string

 function renderLicenseBadge(license) {
   console.log(license);
   let yourLicense = ''
   let licenseType = license;
   if (licenseType === 'MIT') {
    yourLicense =`![![Generic badge](https://img.shields.io/badge/License-MIT-yellow.svg)](https://shields.io/)`
   } else if (licenseType === 'GPLv3') {
    yourLicense =`![![Generic badge](https://img.shields.io/badge/License-GPLv3-yellow.svg)](https://shields.io/)`
   } else if (licenseType === 'GPL') {
    yourLicense =`![![Generic badge](https://img.shields.io/badge/License-GPL-yellow.svg)](https://shields.io/)`
   } else if (licenseType === 'Boost_1.0') {
    yourLicense =`![![Generic badge](https://img.shields.io/badge/License-Boost_1.0-yellow.svg)](https://shields.io/)`
   } else {}
   return yourLicense
 };

//  // TODO: Create a function that returns the license link
//  // If there is no license, return an empty string
//  function renderLicenseLink(license) {

//    console.log(licenseType);

//  }

//  // TODO: Create a function that returns the license section of README
//  // If there is no license, return an empty string
//  function renderLicenseSection(license) {

//  }



 // TODO: Create a function to generate markdown for README

 function generateMarkdown(userResponses) {




   // Generate Table of Contents conditionally based on userResponses
   let draftToC = `## Table of Contents`;

   if (userResponses.installation !== '') {
     draftToC += `
  * [Installation](#installation)`
   };

   if (userResponses.tests !== '') {
     draftToC += `
  * [tests](#tests)`
   };
   if (userResponses.repo !== '') {
     draftToC += `
  * [repo](#repo)`
   };
   if (userResponses.contributing !== '') {
     draftToC += `
  * [Contributing](#contributing)`
   };

   // Generate markdown for the top required portions of the README

   let draftMarkdown =
     `# ${userResponses.title}

  ## Description 
  ${userResponses.description}

  `
   // Add Table of Contents to markdown
   draftMarkdown += draftToC;

   // Add License section since License is required to Table of Contents
   draftMarkdown += `
  * [License](#license)`;

   // Optional Installation section
   if (userResponses.installation !== '') {
     draftMarkdown +=
       `
  ## Installation
  
  *Steps required to install project and how to get the development environment running:*
  
  ${userResponses.installation}`
   };


   // Optional Usage section
   if (userResponses.tests !== '') {

     draftMarkdown +=

       `
  
  ## tests 
  
  ## About this Repo: 
  
  ${userResponses.repo}`
   };


   // Optional Contributing section
   if (userResponses.contributing !== '') {

     draftMarkdown +=

       `
  
  ## Contributing
  
  *If you would like to contribute it, you can follow these guidelines for how to do so.*
  
  ${userResponses.contributing}`
   };


   // Optional Tests section
   if (userResponses.tests !== '') {

     draftMarkdown +=
       `
  
  ## Tests
  
  *Tests for application and how to run them:*
  
  ${userResponses.tests}`
   };


   // License section is required


   draftMarkdown +=
     `
  ## License
  ${userResponses.license}
  
  `
  `${renderLicenseBadge(userResponses.license)}`

   ;
   // Questions / About Developer section
   let draftDev =
     `
  ---
  

  ## Questions?

  For any questions, please contact me with the information below:
 
  GitHub: [@${userResponses.username}](https://github.com/${userResponses.username})
  `;

   // If GitHub email is not null, add to Developer section
   if (userResponses.email !== null) {

     draftDev +=
       `

  Email: ${userResponses.email}

  `
   };

   // Add developer section to markdown
   draftMarkdown += draftDev;

   // Return markdown
   return draftMarkdown;

 }

 module.exports = generateMarkdown;



 // GIVEN a command-line application that accepts user input
 // WHEN I am prompted for information about my application repository
 // THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
 // WHEN I enter my project title
 // THEN this is displayed as the title of the README
 // WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
 // THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
 // WHEN I choose a license for my application from a list of options
 // THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
 // WHEN I enter my GitHub username
 // THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
 // WHEN I enter my email address
 // THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
 // WHEN I click on the links in the Table of Contents
 // THEN I am taken to the corresponding section of the README