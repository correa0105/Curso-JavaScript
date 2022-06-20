function Product(name, price, storage) {
    this.name = name;
    this.price = price;

    Object.defineProperty(this, "storage", {
        enumerable: true,
        configurable: true,
        get: function() {
            return storage
        },
        set: function(value) {
            console.log(value);
        },
    });
}

const p1 = new Product("T-Shirt", 20, 3);

console.log(p1);
p1.storage = "Qualquer coisa!";
console.log(p1.storage);