//Object.values ------- Retorna os valores do objeto
//Object.entries ------- Retorna as chaves e os valores do objeto
//Object.assign(des, any) ------- Clona o objeto
//Object.getOwnPropertyDescriptor(Objeto, "propriedade") ------ Retornas a descrição das propriedades do objeto
//...(Spread) ------- Para utilizar dentro de objetos, adiciona objetos dentro de objetos
//Object.keys ------- Retorna as chaves
//Object.freeze ------- Congela o objeto não permitindo manipulação do dado
//Object.defineProperties ------- Define varias propriedades
//Object.defineProperty ------- Define umas propriedade

//ASSIGN

const product = { name: "Mug", price: 7.40 };
const productBackup = Object.assign({}, product, {material: "Porcelain"});

productBackup.name = "Cup";
productBackup.price = 4.80;

console.log("Objeto original: ", product);
console.log("O objeto alterado após o backup ficou assim: ", productBackup);

//KEYS

console.log("As chaves do objeto: ", Object.keys(product));

//GETOWNPROPERTYDESCRIPTOR

console.log("Descrição das propriedades do objeto: ",Object.getOwnPropertyDescriptor(product, "name"));

//VALUES

console.log("Os valores do objeto: ", Object.values(product));

//ENTRIES

console.log("A chave e o valor do objeto: ", Object.entries(product));

//ITERANDO SOBRE VALORES UTILIZANDO ENTRIES
for (let [key, value] of Object.entries(product)) {
    console.log(key, value);
}