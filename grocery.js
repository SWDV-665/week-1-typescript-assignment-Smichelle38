var Grocery = /** @class */ (function () {
    function Grocery(name, quantity, price) {
        this.name = name;
        this.quantity = quantity;
        this.price = price;
        this.lineItem = name + ", " + quantity + ", " + price;
    }
    return Grocery;
}());
function groceryList(groceries) {
    return "Name: " + groceries.name + " | " + "Quantity: " + groceries.quantity + " | " + "Price: " + groceries.price;
}
var myMilk = new Grocery("Chocolate Milk", "1", "$3.50");
var butterBread = new Grocery("Bread", "3", "$2.99");
var freshEggs = new Grocery("Organic Eggs", "2", "$3.99");
var newFruit = new Grocery("Pineapple", "4", "$2.99");
document.body.textContent = groceryList(myMilk) + groceryList(butterBread) + groceryList(freshEggs) + groceryList(newFruit);
