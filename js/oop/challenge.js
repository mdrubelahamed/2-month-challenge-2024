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
class Task {
    constructor(id, name, complete, priority = "high", dueDate = new Date()){
        this.id = id,
        this.name = name,
        this.complete = false,
        this.priority = priority,
        this.dueDate = dueDate
    }

    displayTask(){
        console.log(`User ${this.name} with ${this.id} task is ${this.complete ? "complete":"not complete"} in ${this.dueDate} and it's a ${this.priority} task `);
        
    }

    markComplete(){
        this.complete = true
    }

}