// shapes.js

class Shape {
    constructor() {
        this.color = '';
    }

    setColor(color) {
        this.color = color;
    }

    render() {
        throw new Error('Method not implemented');
    }
}

class Circle extends Shape {
    constructor() {
        super();
        this.radius = 50; // default radius
    }

    setRadius(radius) {
        this.radius = radius;
    }

    render() {
        return `<circle cx="100" cy="100" r="${this.radius}" fill="${this.color}" />`;
    }
}

class Triangle extends Shape {
    render() {
        return `<polygon points="100,20 40,180 160,180" fill="${this.color}" />`;
    }
}

class Square extends Shape {
    render() {
        return `<rect x="40" y="40" width="120" height="120" fill="${this.color}" />`;
    }
}

class Hexagon extends Shape {
    render() {
        return `<polygon points="100,10 190,50 190,150 100,190 10,150 10,50" fill="${this.color}" />`;
    }
}

module.exports = { Shape, Circle, Triangle, Square, Hexagon };
