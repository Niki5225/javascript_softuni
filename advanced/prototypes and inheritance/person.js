function createPerson(firstName, lastName) {
    let personObj = {
        firstName,
        lastName,
    };

    Object.defineProperty(personObj, 'fullName', {
        get() {
            return `${this.firstName} ${this.lastName}`;
        }
    });

    return personObj;
}


let person = createPerson("Albert", "Simpson");
console.log(person.fullName); //Albert Simpson
person.firstName = "Simon";
console.log(person.fullName); //Simon Simpson
person.fullName = "Peter";
console.log(person.firstName); // Simon
console.log(person.lastName); // Simpson
