class Person {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    toString() {
        return `Person (name: ${this.name}, email: ${this.email})`;
    }
}

class Teacher extends Person {
    constructor(name, email, subject) {
        super(name, email);
        this.subject = subject;
    }

    toString() {
        return `Teacher (name: ${this.name}, email: ${this.email}, subject: ${this.subject})`;
    }

}

class Student extends Person {
    constructor(name, email, course) {
        super(name, email);
        this.course = course;
    }

    toString() {
        return `Student (name: ${this.name}, email: ${this.email}, course: ${this.course})`;
    }
}

let person = new Person('Pesho', 'mail');
let teacher = new Teacher('Pesho', 'mail', 'Math');
let student = new Student('Pesho', 'mail', '11');
console.log(person.toString());
console.log(student.toString());
console.log(teacher.toString());