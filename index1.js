///GIVEN a command-line application that accepts user input



const inquirer = require('inquirer');
{
   
    

    
  



console.log('my js');

console.log('Drakebaugh6@gmail.com')



function askforInput() {
    inquirer.prompt([
  
        
       
        {
            type: 'input',
            name: 'Contribution',
            message: 'What is the contribution guidelines?',

            

            
            

           


        
        

        
        
        

        
        
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
                name: 'greeting',
                message: 'What would you like to say?'

                


            },

            {
                type: 'input',
                name: 'Github',
                message: 'What is my Github username?',
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

                type: 'greeting',
                name: 'what do you want to type?',
                mesage: 'input',

                
                
                name: 'greeting',
                message: 'What would you like to say?',
                type: 'input'

                
                
                

                
               
   

                



            },

            {
                type: 'input',
                name: 'Email',
                message: 'What is the email?'

                
                    
                   

               


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
            // You can proceed to generate your README.md or other functionalities here
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }

    


    
    
    // Start the application
    askforInput();

}