var pizza = {
    crustType:      ["Thin Crust", "Regular Crust", "Hand Tossed", "Deep Dish"],
    sauceType:      ["White Sauce", "Traditional Red Sauce", "Marinara", "Flaming Hot Sauce"],
    cheeseType:     ["Mozzarella", "Five-Cheese", "Feta", "Ghost Pepper Cheese"],
    toppingTypes:   ["Extra Cheese", "Pepperoni", "Sausage", "Bacon", "Steak", "Ham", "Grilled Chicken", "Assorted Peppers", "Olive Mix", "Mushrooms", "Onions", "Cherry Tomatoes", "Lettuce", "Tortilla Chips", "Anchovies", "Used Motor Oil"]
}

function pizzaOven(crustType, sauceType, cheeseType, toppingTypes) {
    var pizza = {}
    pizza.crustType = crustType
    pizza.sauceType = sauceType
    pizza.cheeseType = cheeseType
    pizza.toppingTypes = toppingTypes
    return pizza
}



// PIZZA MADE TO ORDER //

var pizzaOrder1= pizzaOven(["Deep Dish"], ["Traditional Red Sauce"], ["Mozzarella"], ["Pepperoni", "Sausage"])
console.log(pizzaOrder1)
var pizzaOrder2= pizzaOven(["Thin Crust"], ["White Sauce"], ["Five-Cheese"], ["Grilled Chicken", "Cherry Tomatoes"])
console.log(pizzaOrder2)
var pizzaOrder3= pizzaOven(["Hand Tossed"], ["Marinara"], ["Mozzarella", "Feta"], ["Mushrooms", "Olives","Onions"])
console.log(pizzaOrder3)
var pizzaOrder4= pizzaOven(["Regular Crust"], ["Flaming Hot Sauce"], ["Ghost Pepper Cheese"], ["Bacon", "Sausage", "Assorted Peppers", "Used Motor Oil"])
console.log(pizzaOrder4)



// RANDOM PIZZA GENERATOR //

var crustType = [
    "Thin Crust",
    "Regular Crust",
    "Hand Tossed",
    "Deep Dish"
] 

var sauceType = [
    "White Sauce",
    "Traditional Red Sauce",
    "Marinara",
    "Flaming Hot Sauce"
]

var cheeseType = [
    "Mozzarella",
    "Five-Cheese",
    "Feta",
    "Ghost Pepper Cheese"
]

var toppingTypes = [
    "Extra Cheese",
    "Pepperoni",
    "Sausage",
    "Bacon",
    "Steak",
    "Ham",
    "Grilled Chicken",
    "Assorted Peppers",
    "Olive Mix",
    "Mushrooms",
    "Onions",
    "Cherry Tomatoes",
    "Lettuce",
    "Tortilla Chips",
    "Anchovies",
    "Used Motor Oil"
]

function rangeRandom(max, min) {
    return Math.floor(Math.random() * max - min) + min
}

function pickRandom(arr) {
    var i = Math.floor(arr.length * Math.random())
    return arr[i]
}

function pizzaRandom() {
    var pizza = {}
    pizza.crustType = pickRandom(crustType)
    pizza.sauceType = pickRandom(sauceType)
    pizza.cheeseType = []
    pizza.toppingTypes = []
    for (var i=0; i<rangeRandom(5,1); i++) {
        pizza.cheeseType.push(pickRandom(cheeseType))
    }
    for (var i=0; i<rangeRandom(4,0); i++) {
        pizza.toppingTypes.push(pickRandom(toppingTypes))
    }
    return pizza
}

console.log(pizzaRandom())