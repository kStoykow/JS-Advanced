class Company {
    constructor() {
        this.departments = {};
    }

    addEmployee(name, salary, position, department) {
        if (name == '' || name == undefined || name == null || salary == '' || salary == undefined || salary == null || salary < 0 || position == '' || position == undefined || position == null || department == '' || department == undefined || department == null) {
            throw new Error('Invalid input!');
        }
        if (this.departments.hasOwnProperty(department) == false) {
            this.departments[department] = [];
        }

        this.departments[department].push({ name, salary, position });
        return `New employee is hired. Name: ${name}. Position: ${position}`;
    }

    bestDepartment() {
        const sortDepartmentByAvgSalary = (a, b) => b[1].reduce((a, b, i, arr) => a + b.salary / arr.length, 0) - a[1].reduce((a, b, i, arr) => a + b.salary / arr.length, 0);
        const sortBySalaryOrName = (a, b) => b.salary - a.salary || a.name.localeCompare(b.name);
        const parseOutput = (e) => `${e.name} ${e.salary} ${e.position}`;

        let bestDepartment = Object.entries(this.departments).sort(sortDepartmentByAvgSalary)[0];
        let avgSalary = bestDepartment[1].reduce((a, b, i, arr) => a + b.salary / arr.length, 0);
        let employees = bestDepartment[1].sort(sortBySalaryOrName).map(parseOutput);

        return `Best Department is: ${bestDepartment[0]}\nAverage salary: ${avgSalary.toFixed(2)}\n${employees.join('\n')}`;
    }
}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
