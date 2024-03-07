// userInput.js

const inquirer = require('inquirer');

async function getUserInput() {
    const userInput = await inquirer.prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Enter up to three characters for the text:',
            validate: function(value) {
                const valid = value.length <= 3;
                return valid || 'Please enter up to three characters.';
            }
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Enter the text color:',
            default: 'black' // Default color
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Choose a shape:',
            choices: ['Circle', 'Triangle', 'Square', 'Hexagon']
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Enter the shape color:',
            default: 'white' // Default color
        }
    ]);

    return userInput;
}

module.exports = getUserInput;
