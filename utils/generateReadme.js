const genReadme = ({project, description, installation, usage, license, contributing, tests, github, linkGithub, email, contact}) => {
    return `
    # Machiko's ${project}
    
    ## Description
    Summary of what, why, and what.
    ${description}
    
    ## Table of Contents 
     - [Installation](#installation)
     - [Useage](#usage)
     - [License](#License)
    
    ## Installation
    ${installation}
     
    ## Usage
    ${usage}
    
    ## License/Badge
    MIT License
    ${license}
      
    ## Contributing
    Please refer to each project's style and contribution guidelines for submitting patches and additions. 
    ${contributing}
    
    ## Tests
    ${tests}
    
    ## Questions
    ${contact}
    
    GitHub Username: ${github}
   
    GitHub: ${linkGithub}
    
    Email:  ${email}
   
    
    `
}
module.exports = genReadme;