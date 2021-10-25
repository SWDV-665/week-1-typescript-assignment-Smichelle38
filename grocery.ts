class Grocery {
   lineItem: string;
   constructor(public name: string, public quantity: string, public price: string) {
       this.lineItem = name + ", " + quantity + ", " + price;
   }
}

interface listItem {
    name: string;
    quantity: string;
    price: string;
}

function groceryList(groceries: listItem) {
    return "Name: " + groceries.name + " | " + "Quantity: " + groceries.quantity + " | " + "Price: " + groceries.price;
}

let myFlour = new Grocery ("Flour", "1", "3.99")
let mySugar = new Grocery ("Sugar", "1", "4.99")
let myBread = new Grocery ("Bread", "2", "8.00")

let shop = [
    groceryList(myFlour),
    groceryList(mySugar),
    groceryList(myBread)
];

document.body.textContent = shop.toString();