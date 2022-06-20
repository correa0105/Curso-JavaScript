function Product(name, price, storage) {
   Object.defineProperties(this, {
        name: {
            enumerable: true,
            value: name,
            writable: true,
            configurable: true, 
        }, 
        price: {
            enumerable: true,
            value: price,
            writable: true,
            configurable: true, 
        }
   });

    Object.defineProperty(this, "storage", {
        enumerable: true,                                   //MOSTRA A CHAVE
        value: storage,                                     //QUAL O VALOR ELE RECEBE?
        writable: true,                                     //PODE SER SOBRESCRITO?
        configurable: true,                                 //É CONFIGURAVEL?
    });
}

const p1 = new Product("T-Shirt", 20, 3);

console.log(Object.keys(p1));
console.log(p1);