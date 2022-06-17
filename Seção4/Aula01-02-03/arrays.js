const names = ["Eduardo", "Maria", "Lucas", "Michael"];

names [4] = "João";

delete names[0];

const removeFirst = names.shift();
const removeLast = names.pop();

console.log(names);