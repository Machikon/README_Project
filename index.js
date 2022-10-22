const inquirer = require('inquirer');
const fs = require('fs');
const { fileURLToPath } = require('url');
const genReadme = require('./utils/generateReadme.js')

// create a function that generates README answers from the inquirer prompt.


// add README template here

inquirer
.prompt([
    {
        type:'input',
        name: 'project',
        message:'What is the name of your project?',
    },
    {
        type:'input',
        name: 'description',
        message:'What is the description of the project?',
    },
    {
        type:'input',
        name: 'table',
        message:'What do you want to show Table of Contents?',
    },
    {
        type:'input',
        name: 'installtion',
        message:'Does the program require installation?'
        
    },
    {
        type:'input',
        name: 'usage',
        message:'What are the installation instructions to use this program?',
    },
    {
        type:'checkbox',
        name: 'license',
        message:'Which license do you want to use?',
        choices: ['[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]','[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]']
    },
    {
        type:'input',
        name: 'contributing',
        message:'If you created an application or package, do you want other developers to contribute it?',
    },
    {
        type:'input',
        name: 'tests',
        message:'Are there any tests that can be performed?',
        
    },
    {
        type:'input',
        name: 'github',
        message:'What is your GitHub user name?',
        
    },
    {
        type:'input',
        name: 'linkGithub',
        message:'Please add a link to your GitHub profile.',
        
    },
    {
        type:'input',
        name: 'email',
        message:'What is your email address?',
    },
    {
        type:'input',
        name: 'contact',
        message:'What is the best way to contact?',
    },
])
.then((answers)=>{
    console.log(answers);
    const mdWrite = genReadme(answers)
    fs.writeFile(`${answers.name}.md`, mdWrite, (err)=>{
        err ? console.log(err) : console.log("check the file")
    })
})
