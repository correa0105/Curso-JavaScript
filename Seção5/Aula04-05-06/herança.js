function Product(productName, price) {                                      //CONSTRUTOR DE PRODUTO
    this.productName = productName;
    this.price = price;
}

Product.prototype.increase = function (value) {                             //PROTOTYPE DE ACRESCIMO
    this.price += value;
}

Product.prototype.discount = function (value) {                             //PROTOTYPE DE DESCONTO
    this.price -= value;
}

function constructTShirt (productName, price, color) {                      //CONSTRUTOR DE CAMISETA
    Product.call(this, productName, price);
    this.color = color;
}

function constructCup (productName, price, color, storage) {                         //CONSTRUTOR DE CANECA
    Product.call(this, productName, price);
    this.color = color;

    Object.defineProperty(this, "storage", {
        enumerable: true,
        configurable: false,
        get: function (){
            return storage;
        },
        set: function (value){
            if(typeof value !== "number") return;
            storage = value;
        }
    })
}

constructTShirt.prototype = Object.create(Product.prototype);               //APONTAR O PROTOTYPE DE PRODUCT PARA O TSHIRT
constructTShirt.prototype.constructor = constructTShirt;                    //COLOCANDO O NOME DO OBJETO COM O NOME ORIGINAL DO CONSTRUTOR
constructTShirt.prototype.increase = function (percent) {                   //SOBRESCREVENDO O PROTOTYPE INCREASE DO CONSTRUTOR
    this.price = this.price + (this.price * percent/100);
}

constructCup.prototype = Object.create(Product.prototype);                  //APONTAR O PROTOTYPE DE PRODUCT PARA O CUP
constructCup.prototype.constructor = constructCup;                          //COLOCANDO O NOME DO OBJETO COM O NOME ORIGINAL DO CONSTRUTOR

const tShirt = new constructTShirt("Regata", 7.5, "Vermelha");
const cup = new constructCup("Caneca", 4.30, "Branca", 10);

tShirt.increase(100);
cup.discount(0.30);
cup.storage = 27;

console.log(cup.storage);
console.log(tShirt);