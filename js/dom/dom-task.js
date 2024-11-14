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
document.getElementById("removeLastTask").addEventListener("click", function () {
    // let lastTask = document.getElementById("taskList").lastElementChild
    // lastTask.remove()

    let lastTask = document.querySelector("#taskList li:last-child")
    lastTask.remove() // both way the code will work the same
})

// example 6
document.getElementById("clickMeButton").addEventListener("click", function () {
    alert("I got clicked!")
})

// example 7
document.getElementById("teaList").addEventListener("click", (event) => {
    // if (event.target && event.target.classList.contains("teaItem")) {
    //     alert(`You selected: ${event.target.textContent}`)
    // }

    if ((event.target.li = "teaItem")) {
        alert(`You selected: ${event.target.textContent}`)
    }
})

// example 8
document.getElementById("feedbackForm").addEventListener("submit", function (event) {
    event.preventDefault()

    let feedbackDisplay = document.querySelector("#feedbackDisplay")
    feedbackDisplay.textContent = "" // textcontent make it empty
    let feedback = document.querySelector("#feedbackInput").value // grab the feedback
    let lableContent = document.querySelector("label[for='feedbackInput']").textContent // grab the label textcontent
    feedbackDisplay.textContent = `${lableContent} ${feedback}` // added the feedback

    // add css
    feedbackDisplay.classList.add("highlight")
    feedbackDisplay.style.fontSize = "1.5rem"
})

// exmaple 9
document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("#domStatus").textContent = "dom fully loaded"
})

// example 10
document.querySelector("#toggleHighlight").addEventListener("click", function(){
    document.querySelector("#colorChnagingText").classList.toggle("highlight")
})