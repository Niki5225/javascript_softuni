class List {
    constructor() {
        this.lst = [];
    }

    add(element) {
        this.lst.push(element);
    }

    remove(index) {
        this.lst.splice(index, 1);
    }

    get(index) {
        return this.lst[index];
    }

    size() {
        return this.lst.length;
    }
}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
console.log(list.size());