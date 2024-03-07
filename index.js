// index.js

const fs = require('fs');
const getUserInput = require('./userInput');
const generateSVG = require('./generateSVG'); // Import the generateSVG function

async function main() {
    try {
        // Get user input
        const userInput = await getUserInput();

        // Generate SVG content
        const svgContent = generateSVG(userInput.text, userInput.textColor, userInput.shape, userInput.shapeColor);

        // Write SVG content to a file named 'logo.svg'
        fs.writeFileSync('logo.svg', svgContent);

        console.log('Generated logo.svg');
    } catch (error) {
        console.error('An error occurred:', error);
    }
}

// Invoke the main function
main();
