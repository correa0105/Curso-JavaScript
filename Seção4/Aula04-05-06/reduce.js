//SOME TODOS OS NUMEROS (IDEAL PARA REDUCE)
//RETORNE UM ARRAY COM OS PARES (IDEAL PARA FILTER)
//RETORNE UM ARRAY COM O DOBRO DOS VALORES (IDEAL PARA MAP)

const numbers = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const total = numbers.reduce((acumulator, value, index, array) => {         
    return acumulator += value;
}, 0);

console.log(total);

const evenNumbers = numbers.reduce((acumulator, value, index, array) => {         
    if (value%2 === 0) acumulator.push(value);
    return acumulator;
}, []);

console.log(evenNumbers);

const doubleNumbers = numbers.reduce((acumulator, value) => {
    acumulator.push(value*2);
    return acumulator;
}, []);

console.log(doubleNumbers);

//RETORNE A PESSOA DE MAIOR IDADE

const people = [ 
    { name: "Lucas", year: 62 },
    { name: "Carla", year: 32 },
    { name: "Guilherme", year: 20 },
    { name: "Andressa", year: 78 },
    { name: "Joao", year: 19 },
    { name: "Micaela", year: 37 },
];

const olderPerson = people.reduce((acumulator, value) => {
    if (acumulator.year > value.year) return acumulator; return value;
});

console.log(olderPerson);