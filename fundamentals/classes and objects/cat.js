function catProblem(arr) {

    let cats = [];

    class Cat {
        constructor(catName, age) {
            this.catName = catName;
            this.age = age;
        }

        meow() {
            console.log(`${this.catName}, age ${this.age} says Meow`)
        }
    }

    for (let i = 0; i <= arr.length - 1; i++) {
        let catData = arr[i].split(' ');
        let name, age;
        [name, age] = [catData[0], catData[1]];

        cats.push(new Cat(name, age));
    }

    for (let cat of cats) {
        cat.meow();
    }
}



catProblem(['Mellow 2', 'Tom 5']);