interface person {
    name:string; 
    age: number;
    getPerson :(name:string, age:number) => string;
}             

class Employee implements person {
    name: string;
    age: number;
    salary:number;
    constructor(salary:number) {
        this.salary = salary;
    }
    getPerson = (name: string, age: number) : string => {
        this.name = name;
        this.age = age;
        return "Employee Name is: " + name + ', age is: ' + age + ' and salary is: ' + this.salary; 
    }

}

let emp1: person = new Employee(50000);
console.log(emp1.getPerson('Achal', 21)); 

let emp2: person= new Employee(100000);
console.log(emp2.getPerson('Darshan', 24));