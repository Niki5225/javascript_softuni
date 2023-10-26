class Rectangle {
    constructor(width, height, colour) {
        this.width = width;
        this.height = height;
        this.colour = colour;
    }

    calcArea() {
        return this.height * this.width;
    }
}

let rect = new Rectangle(4, 5, 'Red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.colour);
console.log(rect.calcArea());