class Company {
    constructor() {
        this.departments = new Map();
    }


    addEmployee(name, salary, position, department) {
        const NON_VALID_INPUT = [undefined, null, ''];
        if (NON_VALID_INPUT.includes(name) || NON_VALID_INPUT.includes(salary)
            || NON_VALID_INPUT.includes(position) || NON_VALID_INPUT.includes(department)) {
            throw new Error("Invalid input!");
        }

        if (salary < 0){
            throw new Error("Invalid input!");
        }

        let employee = {name, salary, position, department};

        if (this.departments.has(department)){
            this.departments.get(department).push(employee);
        } else {
            this.departments.set(department, [employee]);
        }
        return `New employee is hired. Name: ${name}. Position: ${position}`

    }

    bestDepartment() {
        let totalSalary = (department) => {
            let totalSalary = department[1].reduce((acc, b) => { return acc += b.salary }, 0);
            let averageSalary = (totalSalary / department[1].length).toFixed(2);
            department.push(averageSalary);
            return averageSalary;
        };
        let bestDepartment = [...this.departments].sort((a, b) => totalSalary(b) - totalSalary(a))[0];
        let sortBySalaryAndName = bestDepartment[1].sort((a, b) => b.salary - a.salary || a.name.localeCompare(b.name));

        let result = `Best Department is: ${bestDepartment.shift()}\n`;
        result += `Average salary: ${bestDepartment.pop()}\n`;
        sortBySalaryAndName.forEach(e => result += `${e.name} ${e.salary} ${e.position}\n`);

        return result.trim();
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
