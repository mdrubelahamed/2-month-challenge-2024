/*
Create the Task Class
id: A unique identifier for the task.
name: The name of the task.
complete: A boolean indicating whether the task is completed (default is false).
priority: A string indicating the priority of the task (e.g., "low", "medium", "high").
dueDate: A date object representing when the task is due.
Add Methods to the Class
Setters and Getters: Implement setters and getters for priority, complete, and dueDate to ensure that any related properties are updated automatically.
Method to Display Task Details: Create a method called displayTask that logs the task's details to the console in a user-friendly format.
Method to Mark Task as Complete: Create a method called markComplete that sets the complete property to true.
Create Instances of the Task Class
Create at least three instances of the Task class with different properties.
Use the methods you created to update their statuses and display their details.
Bonus Challenge
Implement a static method in the Task class that generates a unique ID for each new task instance. You can use a simple counter or UUIDs. 
*/
// class Task {
//     constructor(id, name, complete, priority = "high", dueDate = new Date()){
//         this.id = id,
//         this.name = name,
//         this.complete = false,
//         this.priority = priority,
//         this.dueDate = dueDate
//     }

//     displayTask(){
//         console.log(`User ${this.name} with ${this.id} task is ${this.complete ? "complete":"not complete"} in ${this.dueDate} and it's a ${this.priority} task `);

//     }

//     markComplete(){
//         this.complete = true
//     }

// }

/* OOJS 1
In this task we provide you with the start of a definition for a Shape class. It has three properties: name, sides, and sideLength. This class only models shapes for which all sides are the same length, like a square or an equilateral triangle.

Create a new instance of the Shape class called square. Give it a name of square, 4 sides, and a sideLength of 5.
Call your calcPerimeter() method on the instance, to see whether it logs the calculation result to the browser's console as expected.
Create a new instance of Shape called triangle, with a name of triangle, 3 sides and a sideLength of 3.
Call triangle.calcPerimeter() to check that it works OK. */

// Create a shape class
class Shape {
    constructor(name, sides, sideLength) {
        this.name = name
        this.sides = sides
        this.sideLength = sideLength
    }

    calcPerimeter() {
        let perimeter = this.sides * this.sideLength
        console.log(perimeter)
    }
}

// // create instance
// const square = new Shape("Square", 4, 5)
// square.calcPerimeter()

// const triangle = new Shape("Triange", 3, 3)
// triangle.calcPerimeter()

/* Next we'd like you to create a Square class that inherits from Shape, and adds a calcArea() method that calculates the square's area. Also set up the constructor so that the name property of Square object instances is automatically set to square, and the sides property is automatically set to 4. When invoking the constructor, you should therefore just need to provide the sideLength property.

Create an instance of the Square class called square with appropriate property values, and call its calcPerimeter() and calcArea() methods to show that it works OK. */
// create Square class inherit from the 'shape' class
class Square extends Shape {
    constructor(sideLength) {
        super("Square", 4, sideLength)
    }

    calcArea() {
        let squareArea = this.sides * this.sides
        return squareArea
    }

    about() {
        return `name: ${this.name}, sides: ${this.sides}, sideslength: ${this.sideLength}`
    }
}

// const square = new Square(5)
// console.log(square.calcArea());
// console.log(square.about());

// ** learn by building

/*
Create Product Class:

Properties: name, price, quantity, id
Methods: updateQuantity(), getTotalPrice()
Create Cart Class:

Properties: products (an array to store Product instances)
Methods:
addProduct(product)
removeProduct(productId)
calculateTotal()
displayCart()
*/

class Product {
    constructor(name, price, quantity, id) {
        this.name = name
        this.price = price
        this.quantity = quantity
        this.id = id
    }

    updateQuantity(newQuantity) {
        this.quantity = newQuantity
    }
    getTotalPrice() {
        return this.price * this.quantity
    }
}

class Cart {
    constructor() {
        this.products = []
    }

    addProduct(product) {
        this.products.push(product)
    }

    addProduct(product) {
        this.products.push(product)
    }
    removeProduct(productId) {
        this.products = this.products.filter((product) => product.id != productId)
    }
    calculateTotal() {
        let total = this.products.reduce((sum, product) => sum + product.price * product.quantity, 0)
        return total
    }
    displayCart() {
        return this.products
    }
}

/* 
Create User Class:

Properties: name, email, cart (instance of Cart)
Methods:
addToCart(product)
removeFromCart(productId)
viewCart()
*/

class Cart2 {
    constructor() {
        this.items = []
    }
    addItem(item) {
        this.items.push(item)
    }
    removeItem(productId) {
        this.items = this.items.filter((item) => item.id != productId)
    }
    viewItems() {
        return this.items
    }
}

class User {
    constructor(name, email, cart) {
        this.name = name
        this.email = email
        this.cart = cart // Instance of Cart
    }
    addToCart(product) {
        this.cart.addItem(product)
    }
    removeFromCart(productId) {
        this.cart.removeItem(productId)
    }
    viewCart() {
        return this.cart.viewItems()
    }
}

class PremiumUser extends User {
    constructor(discount = 10) {
        super(name, email, cart)
        this.discount = discount
    }

    applyDiscount() {
        return price - (price * this.discount) / 100
    }
}
