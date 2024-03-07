// shapes.test.js

const { Circle, Triangle, Square } = require('./shapes');

describe('Circle', () => {
    test('render method should generate SVG for circle with default radius', () => {
        const circle = new Circle();
        circle.setColor('red');
        expect(circle.render()).toEqual('<circle cx="100" cy="100" r="50" fill="red" />');
    });

    test('render method should generate SVG for circle with custom radius', () => {
        const circle = new Circle();
        circle.setColor('blue');
        circle.setRadius(70);
        expect(circle.render()).toEqual('<circle cx="100" cy="100" r="70" fill="blue" />');
    });
});

describe('Triangle', () => {
    test('render method should generate SVG for triangle', () => {
        const triangle = new Triangle();
        triangle.setColor('green');
        expect(triangle.render()).toEqual('<polygon points="100,20 40,180 160,180" fill="green" />');
    });
});

describe('Square', () => {
    test('render method should generate SVG for square', () => {
        const square = new Square();
        square.setColor('yellow');
        expect(square.render()).toEqual('<rect x="40" y="40" width="120" height="120" fill="yellow" />');
    });
});
