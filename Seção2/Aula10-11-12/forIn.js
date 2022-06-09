const fruits = ["Maça", "Pera", "Laranja", "Morango"];

const peoples = {
    name: "Lucas",
    lastName: "Corrêa",
    age: 22
}

/* FOR IN */

for (let index in fruits) {
    console.log(index, fruits[index]);
}

for (let key in peoples) {
    console.log(key,"-", peoples[key]);
}

/* FOR OF */

for (let value of fruits){
    console.log(value);
}

/* ForEach */

fruits.forEach(function(value, index) {
    console.log(index, value);
})


