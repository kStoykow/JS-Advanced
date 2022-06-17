function solve() {
    class Employee {
        constructor(name, age) {
            this.name = name;
            this.age = age;
            this.salary = 0;
            this.tasks = [];
            this._i = 0;
            this.dividend = 0;
        }

        work() {
            console.log(this.tasks[this._i]);
            this._i++;
            if (this._i >= this.tasks.length) {
                this._i = 0;
            }
        }
        collectSalary() {
            console.log(`${this.name} received ${this.salary + this.dividend} this month.`);
        }
    }

    class Junior extends Employee {
        constructor(name, age) {
            super(name, age);
            this.tasks = [`${this.name} is working on a simple task.`];
        }
    }
    class Senior extends Employee {
        constructor(name, age) {
            super(name, age);
            this.tasks = [`${this.name} is working on a complicated task.`,
            `${this.name} is taking time off work.`,
            `${this.name} is supervising junior workers.`];

        }
    }
    class Manager extends Employee {
        constructor(name, age) {
            super(name, age);
            this.dividend = 0;
            this.tasks = [`${this.name} scheduled a meeting.`,
            `${this.name} is preparing a quarterly report.`];
        }
    }
    return { Employee, Junior, Senior, Manager }
}
const classes = solve();
const junior = new classes.Junior('Ivan', 25);
let asd = new classes.Manager('pesho', 12);
asd.salary = 4000;
asd.dividend = 500;
asd.collectSalary();
junior.salary = 5811;
junior.collectSalary();
junior.work();
junior.work();


const sinior = new classes.Senior('Alex', 31);

sinior.work();
sinior.work();
sinior.work();
sinior.work();

sinior.salary = 12050;
sinior.collectSalary();

const manager = new classes.Manager('Tom', 55);

manager.salary = 15000;
manager.collectSalary();
manager.dividend = 2500;
manager.collectSalary();