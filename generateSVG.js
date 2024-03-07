// generateSVG.js
const { Circle, Triangle, Square, Hexagon } = require('./lib/shapes');

function generateTextSVG(text, textColor) {
    // Center text within SVG canvas
    const textX = 150 - (text.length * 5); // Adjust the coefficient as needed
    const textY = 100; // Adjust as needed

    return `<text x="${textX}" y="${textY}" fill="${textColor}" font-family="monospace" font-size="20">${text}</text>`;
}

generateShapeSVG = function (shape, shapeColor) {
    let shapeSVG = '';
    switch (shape) {
        case 'Circle':
            const circle = new Circle();
            circle.setColor(shapeColor);
            shapeSVG = circle.render();
            break;
        case 'Triangle':
            const triangle = new Triangle();
            triangle.setColor(shapeColor);
            shapeSVG = triangle.render();
            break;
        case 'Square':
            const square = new Square();
            square.setColor(shapeColor);
            shapeSVG = square.render();
            break;
        case 'Hexagon':
            const hexagon = new Hexagon();
            hexagon.setColor(shapeColor);
            shapeSVG = hexagon.render();
            break;
        default:
            shapeSVG = '';
    }
    // Center the shape within SVG canvas and include the shape SVG content
    return `<g transform="translate(50,-10)">${shapeSVG}</g>`;
};

generateSVG = function (text, textColor, shape, shapeColor) {
    const textSVG = generateTextSVG(text, textColor);
    const shapeSVG = generateShapeSVG(shape, shapeColor);

    return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">${shapeSVG}${textSVG}</svg>`;
};

module.exports = generateSVG;
