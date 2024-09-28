///GIVEN a command-line application that accepts user input
const inquirer = require('inquirer');
const fs = require('fs');
console.log('my js');

function askforInput() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'projectTitle',
            mesage: 'What is the title of your Project?',

        },
        
            {
                type: 'input',
                name: 'description',
                message: 'Please provide a description of your project:',
            },


            {
                type: 'input',
                name: 'Installation',
                message: 'What is the installation?',
            },

            {
                type: 'input',
                name: 'Usage',
                message: 'What is the Usage?',




            },

            {
                type: 'input',
                name: 'License',
                message: 'What is the license?'


            },

            {
                type: 'input',
                name: 'Questions',
                message: 'What questions do you have?'

            },

            {
                type: 'input',
                name: 'title',
                message:'What is the project title?'

            },

            {

                /// Choose the license from the list
                type: 'input',
                name: 'license',
                message: 'Choose a license from the list!'

            }

            


            
            // Add more prompts as needed
        ])
        .then(answers => {
            console.log('Project Title:', answers.projectTitle);
            console.log('Description:', answers.description);
            // You can proceed to generate your README.md or other functionalities here
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }

    

// Read file asynchronously
fs.readFile('index1.js', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
    return;
  }
  console.log('File contents:', data);
});
    
    


    // Start the application
    askforInput();

   



