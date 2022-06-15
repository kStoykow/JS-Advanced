function Person(name, email) {
    this.name = name;
    this.email = email;
    this.toString = function () {
        return `Person (name: ${this.name}, email: ${this.email})`;
    }
}

function Teacher(name, email, subject) {
    this.name = name;
    this.email = email;
    this.subject = subject;
    this.toString = function () {
        return `Teacher (name: ${this.name}, email: ${this.email}, subject: ${this.subject})`;
    }
}

function Student(name, email, course) {
    this.name = name;
    this.email = email;
    this.course = course;
    this.toString = function () {

        return `Student (name: ${this.name}, email: ${this.email}, course: ${this.course})`;
    }
}

Teacher.prototype = Object.create(Person.prototype);
Student.prototype = Object.create(Person.prototype);


function extendPrototype(myClass) {
    myClass.prototype.species = 'Human';
    myClass.prototype.toSpeciesString = function () {
        return `I am a ${this.species}. ${this.toString()}`;
    }
}
extendPrototype(Person);
let t = new Person("Posho", "imail@hit.bg");
console.log(t.toString());
console.log(t.species);
console.log(t.toSpeciesString());