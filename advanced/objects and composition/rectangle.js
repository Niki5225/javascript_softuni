function rectangle(width, height, color){
    const rectangle = {
        width,
        height,
        'color': color.charAt(0).toUpperCase() + color.slice(1),
        calcArea(){
            return this.width * this.height;
        }
    }

    return rectangle;
}

let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());
