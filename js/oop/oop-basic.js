// GOAL => LEARN OOP in 3 hrs

// Inheritance
// Define Person class, here as a super class
class Person {
    constructor(name) {
        this.name = name
    }
    introduceSelf() {
        return `Hello everyone, I'm ${this.name}`
    }
}

// defining Professor class as a subclass of Person Super class
class Professor extends Person {
    constructor(name, teaches) {
        super(name) // Call the parent class constructor to initialize `name`
        this.teaches = teaches
    }
    grade() {
        const grade = Math.floor(Math.random() * (5 - 1) + 1)
        return grade
    }
    introduceSelf() {
        return `I'm ${this.name}, I teach ${this.teaches} in college.`
    }
}

// defining student class as a subclass of Person Super class
class Student extends Person {
    #year

    constructor(name, year) {
        super(name)
        this.#year = year
    }

    get year() {
        return `NOTE: Knowing year is not allowerd for public.`
    }
    introduceSelf() {
        return `I'm ${this.name} and my year is ${this.#year}.`
    }
}

// create student instance
const sam = new Student("Sam", "2")
console.log(sam.name)
console.log(sam.year) // getter doesn't require parentheses  '()'
console.log(sam.introduceSelf())
