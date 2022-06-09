const people = {
    name: "Lucas",
    lastName: "Corrêa",
    age: "22",
    adress: {
        street: "Safira",
        number: "74"
    }
};

const {adress, adress: {street, number}, name} = people;
console.log(name, adress, number);