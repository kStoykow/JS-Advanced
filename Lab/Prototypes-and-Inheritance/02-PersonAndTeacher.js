function personAndTeacher() {
    function Person(name, email) {
        this.name = name;
        this.email = email;
    }

    function Teacher(name, email, subject) {
        this.name = name;
        this.email = email;
        this.subject = subject;
    }

    Teacher.prototype = Object.create(Person.prototype);
    return {
        Person,
        Teacher
    }
}

let classes = personAndTeacher();
let Teacher = classes.Teacher;
let Person = classes.Person;

let t = new Teacher('pesho', 'pesho@gmail.com', 'Mathematics');
console.log(t.name, t.email, t.subject);