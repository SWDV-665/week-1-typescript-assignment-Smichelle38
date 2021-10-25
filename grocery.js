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
var myFlour = new Grocery("Flour", "1", "3.99");
var mySugar = new Grocery("Sugar", "1", "4.99");
var myBread = new Grocery("Bread", "2", "8.00");
var shop = [
    groceryList(myFlour),
    groceryList(mySugar),
    groceryList(myBread)
];
document.body.textContent = shop.toString();
