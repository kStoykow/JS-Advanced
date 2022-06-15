function toStringExtension() {
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
    return {
        Person,
        Teacher,
        Student
    }
}

let classes = toStringExtension();
let Person = classes.Person;
let Teacher = classes.Teacher;
let Student = classes.Student;

let t = new Teacher("Ivan", 'ivan@ivan.com', "Graphics");
console.log(t.toString());