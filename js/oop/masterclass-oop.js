// // OOP => masterclass of object oriented programming

// /*
// 1. encapsulation
// 2. inheritance
// 3. poymorphism
// 4. abstraction

// **  Prototype, prototypalchain
// */

// /*
// Task: Create a Car Class
// Create a Class named Car with the following properties and methods:

// Properties:
// make - the manufacturer of the car (e.g., 'Toyota', 'Ford')
// model - the car's model (e.g., 'Camry', 'Mustang')
// year - the year the car was made
// mileage - the car's mileage (start at 0)

// Methods:
// drive(miles) - adds the specified number of miles to the car’s mileage
// getDetails() - returns a string with details in the format: "Year Make Model with Mileage miles"

// */

// class Car {
//     constructor(make, model, year) {
//         this.make = make,
//         this.model = model,
//         this.year = year,
//         this.mileage = 0
//     }

//     dirve(miles) {
//         if (miles > 0) {
//             this.mileage += miles
//         } else {
//             console.log(`Miles must be postive.`);

//         }
//     }

//     getDetails() {
//         return `${this.year} ${this.make} ${this.model} with ${this.mileage} miles`
//     }
// }

// /*
// Tasks:
// Create multiple Car instances with different makes, models, and years.
// Call the drive method on one instance and update its mileage.
// Use getDetails() on each instance to print the car's information.
// */

// const car1 = new Car("Tata", "x-71", "2026")
// const car2 = new Car("Ferari", "flying-31", "2028")
// const car3 = new Car("Ferari", "super-sonic-27", "2022")

// car3.dirve(139)

// console.log(car3.getDetails());

// ****************** 4 pillars of oop ********************************************

// 1. Encapsulation

class BankAccount {
    #balance = 0

    deposit(amount) {
        this.#balance += amount
        return
    }

    getBalance() {
        return `Current balance is: $ ${this.#balance}`
    }
}

// let xAccount = new BankAccount()
// console.log(xAccount.getBalance());

// 2. Abstraction

class CoffeeMachine {
    start() {
        return `Start the machine.`
    }

    makeCoffee(callback) {
        setTimeout(() => {
            callback(`Your coffee is ready`)
        }, 1000)
    }

    pressStartButton() {
        let msg1 = this.start()
        console.log(msg1)

        this.makeCoffee(function (msg2) {
            console.log(msg2)
        })
    }
}

// let myCoffeeMachine = new CoffeeMachine()

// Polymorphisim

// static method

class Calculator {
    static add(a, b) {
        return a + b
    }
}

let miniCalculator = new Calculator()
