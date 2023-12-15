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
}

const programmer1 = new Programmer ('Vasia', 18, 2500, 'js')
const programmer2 = new Programmer ('Kolia', 25, 1500, 'java, PHP')
const programmer3 = new Programmer ('Petia', 28, 500, 'html')
console.log(Programmer1, Programmer2, Programmer3 )