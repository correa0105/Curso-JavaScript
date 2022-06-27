function People(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
    /* this.fullName = () => "Original Construtor: " + this.firstname + " " + this.lastname; */
}

People.prototype.fullName = function() {return this.firstname + " " + this.lastname};

const people1 = new People("Lucas", "Corrêa");

console.log(people1.fullName());

/////////////////////////////////////////////////////

const objA = {
    keyA: "A",
}

const objB = {
    keyB: "B",
}

const objC = new Object();
objC.keyC = "C";

Object.setPrototypeOf(objB, objA);
Object.setPrototypeOf(objC, objB);

console.log(objC.keyB);

/////////////////////////////////////////////////////

function Product(nameproduct, price) {
    this.nameproduct = nameproduct;
    this.price = price;
}

Product.prototype.discount = function(percent) {
    this.price = this.price - (this.price * (percent / 100));
}

Product.prototype.increases = function(percent) {
    this.price = this.price + (this.price * (percent / 100));
}

const product1 = new Product("T-Shirt", 50);

const product2 = {
    nameproduct: "Caneca",
    price: 15
};

Object.setPrototypeOf(product2, Product.prototype);

product2.discount(20);
product1.discount(20);

console.log(product1);
console.log(product2);
