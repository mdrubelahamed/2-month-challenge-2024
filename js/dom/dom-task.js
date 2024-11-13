// example 1
document.getElementById("changeTextButton").addEventListener("click", function () {
    document.getElementById("myParagraph").textContent = "I am changed!"
})

// example 2
document.getElementById("highlightFirstCity").addEventListener("click", function () {
    // const firstCity = document.querySelector("#citiesList li:first-child")
    const firstCity = document.querySelector("#citiesList").firstElementChild // both will give first child
    firstCity.classList.toggle("highlight")
})

// example 3
document.getElementById("changeOrder").addEventListener("click", function () {
    const coffeeType = document.getElementById("coffeeType")

    coffeeType.textContent = "Espresso"
    coffeeType.style.backgroundColor = "brown"
    coffeeType.style.padding = "5px"
})

// example 4
document.getElementById("addNewItem").addEventListener("click", function () {
    const shoppingList = document.getElementById("shoppingList")
    const shoppingItem = ["Eggs", "Apple", "Nuts", "Watermelon", "Blueberries", "Carrots", "Sweet Potatoes"]

    let li = document.createElement("li")
    // li.appendChild(document.createTextNode("Eggs"))
    li.appendChild(document.createTextNode(shoppingItem[Math.floor(Math.random() * 5)]))
    shoppingList.appendChild(li)
})

// example 5
document.getElementById("removeLastTask").addEventListener("click", function() {
    // let lastTask = document.getElementById("taskList").lastElementChild
    // lastTask.remove()

    let lastTask = document.querySelector("#taskList li:last-child")
    lastTask.remove() // both way the code will work the same
})