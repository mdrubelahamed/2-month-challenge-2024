function Person(name, age) {
    this.name = name,
    this.age = age
}

function Car(name, model) {
    this.name = name,
    this.model = model
}

let car1 = new Car("Rolce Royce", "x-71")
let car2 = new Car("Tata", "sidan")

// console.log(car1);
// console.log(car2);

function Tea(type) {
    this.type = type,
    this.describe = function() {
        return `Cup of a ${type} tea`
    }
}

let tea = new Tea("Lemon");
console.log(tea.describe());