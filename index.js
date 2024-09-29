///GIVEN a command-line application that accepts user input



const inquirer = require('inquirer');
const fs = require("fs");


    

    
  



// console.log('my js');

// console.log('Drakebaugh6@gmail.com')



function askforInput() {
    inquirer.prompt([
 
        {
        
            type: 'input',
            name: 'projectTitle',
            mesage: 'What is the title of your Project?',
       },
        {
            type: 'input',
            name: 'Contribution',
            message: 'What is the contribution guidelines?',

        },
        
            {
                type: 'input',
                name: 'description',
                message: 'Please provide a description of your project:',
            },

            {
                type: 'input',
                name: 'Installation',
                message: 'How would you  install the project?'
            }, 
            {
                type: 'input',
                name: 'Github',
                message: 'What is my Github username?',
            },
            {
                type: 'input',
                name: 'Testing',
                message: 'Testing Instructions',
            },

            {
                type: 'input',
                name: 'Usage',
                message: 'What is the Usage?',
            },
      
         
            {
                type: 'input',
                name: 'Email',
                message: 'What is the email?'
           },

         

            {

                /// Choose the license from the list
                type: 'list',
                name: 'license',
                message: 'Choose a license from the list!',
                choices:["MIT","ISC","APACHE 2.0","GPL"]

            }
          
            // Add more prompts as needed
        ])
        .then(answers => {
            console.log('Project Title:', answers.projectTitle);
            console.log('Description:', answers.description);

            const markDown = `
## Table Of Contents
-  [Title](#title)

- [Description](#Description)

- [Installation](#install)

- [Github](#github)

- [Testing](#testing)

- [Usage](#usage)

- [Email](#email)





## Title: ${answers.projectTitle}


## Description:
${answers.description}

## Installation:

${answers.Installation}

## Github:

${answers.Github}

## Testing

${answers.Testing}

## Usage

${answers.Usage}

## Email

${answers.Email}
            
## License
![GitHub license](https://img.shields.io/badge/license-${answers.license.replace(
      ' ',
      '_'
    )}-blue.svg)
    [license information](https://choosealicense.com/licenses/)            
     
`
console.log(answers,markDown)
fs.writeFileSync('README.md', markDown, function(error){
    if(error)
        console.log(error)
})
            // You can proceed to generate your README.md or other functionalities here
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }

    


    
    
    // Start the application
    askforInput();

