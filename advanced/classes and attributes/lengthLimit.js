class Stringer {
    #initialString;
    constructor(string, length) {
        this.string = string;
        this.#initialString = string;
        this.length = length;
    }

    decrease(value) {
        if (this.length - value <= 0){
            this.length = 0;
        } else {
            this.length -= value;
        }
        let str = '';
        for (let i = 0; i < this.length; i++) {
            str += this.string[i];
        }
        this.string = str;
    }

    increase(value) {
        const initLen = this.length;
        this.length += value;
        if (this.length >= this.#initialString.length){
            this.string = this.#initialString;
        } else {
            for (let i = initLen; i < this.length; i++) {
                this.string += this.#initialString[i];
            }
        }
    }

    toString() {
        if (this.string === this.#initialString){
            return this.string;
        }
        return this.string + '...';
    }
}

let test = new Stringer("Test", 5);
console.log(test.toString()); // Test
test.decrease(3);
console.log(test.toString()); // Te...
test.decrease(5);
console.log(test.toString()); // ...
test.increase(4);
console.log(test.toString()); // Test