const names = ["Eduardo", "Maria", "Lucas", "Michael"];

names [4] = "João";

/* delete names[0]; */

const removeFirst = names.shift();
const removeLast = names.pop();
const addLast = names.push("Rogério");
const addFirst = names.unshift("Vitor");
const cut = names.slice(2, 5);
const cutRemove = names.slice(0, -1);

console.log(`O primeiro item removido foi ${removeFirst} e o ultimo foi ${removeLast} e o array ficou assim: ${names}`);
console.log(cut);
console.log(cutRemove);

const fullName = "Lucas Corrêa Da Silva";
let arrayName = fullName.split(" ");

console.log(arrayName);

arrayName = arrayName.join(" ");

console.log(arrayName);



