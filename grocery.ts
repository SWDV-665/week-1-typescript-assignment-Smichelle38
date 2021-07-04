class Grocery{
    lineItem: string;
    constructor(public name: string, public quantity: string, public price: string) {
        this.lineItem = name + ", " + quantity + ", " + price;
    }
}

interface listItem{
    name: string;
    quantity: string;
    price: string;
}

function groceryList(groceries: listItem) {
    return "Name: " + groceries.name + " | " + "Quantity: " + groceries.quantity + " | " + "Price: " + groceries.price;
}

let myMilk = new Grocery ("Chocolate Milk", "1", "$3.50")
let butterBread = new Grocery ("Bread", "3", "$2.99")
let freshEggs = new Grocery ("Organic Eggs", "2", "$3.99")
let newFruit = new Grocery ("Pineapple", "4", "$2.99")

document.body.textContent = groceryList(myMilk) + groceryList(butterBread) + groceryList(freshEggs) + groceryList(newFruit)
