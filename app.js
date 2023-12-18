class Employee  {
    constructor (name, age, salary){
        this.name = name,
        this.age = age,
        this.salary = salary
    }
    setName (name) {
        this.name = name
    }
    getName () {
        return this.name
    }
    setAge (age) {
        this.age = age
    }
    getAge () {
        return this.age
    }
    setSalary (salary) {
        this.salary = salary
    }
    getSalary () {
        return this.salary
    }
}

class Programmer extends Employee{
    constructor (name, age, salary, lang) {
        super(name, age, salary)
        this.lang = lang
    }
    getSalary (){
        return this.salary * 3
    }
    getAnnualSalary(){
        return this.salary * 3 * 12
    }
}
const programmers = []

programmers.push(new Programmer ('Vasia', 18, 2500, 'js')) 
programmers.push(new Programmer ('Kolia', 25, 1500, 'java, PHP'))
programmers.push(new Programmer ('Petia', 28, 500, 'html')) 
programmers.forEach((programmer) => {
    console.log(programmer.getName(),programmer.getAge(),programmer.getSalary())
})
