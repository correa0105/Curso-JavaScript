const numbers = [30, 6, 2, 3, 26, 32, 9, 8, 15, 28];

//CRIA UMA FUNÇÃO QUE RETORNE OS NUMEROS MAIORES QUE 10 DO ARRAY A CIMA

const numbersGreater10 = [];

for (let i = 0; i <= numbers.length; i++) {
    if (numbers[i] > 10) {
        numbersGreater10.push(numbers[i]);
    }
}

console.log(numbersGreater10);

//OU

const numbersFilters = numbers.filter((value, index, array) => {console.log(`Valor retornado: ${value}, No indice: ${index}, Do Array: ${array}`); return value > 10});

console.log(numbersFilters);

//CRIA UMA FUNÇÃO QUE RETORNE O NOME COM 5 LETRAS OU MAIS OU PESSOA COM MAIS DE 50 ANOS, RETORNE A PESSOA CUJO NOME TERMINA COM A

const people = [ 
    { name: "Lucas", idade: 62 },
    { name: "Carla", idade: 32 },
    { name: "Guilherme", idade: 20 },
    { name: "Andressa", idade: 17 },
    { name: "Joao", idade: 19 },
    { name: "Micaela", idade: 37 },
];

const objectConditions = [];

for (let i = 0 ; i < people.length; i++) {
    if (people[i].name.length >= 6 || people[i].idade >= 50 || people[i].name.toLowerCase().endsWith("a")) {
        objectConditions.push(people[i]);
    }
}

console.log(objectConditions);

//OU

const objectFilter = people.filter(value => value.name.length >= 6 || value.idade >= 50 || value.name.toLowerCase().endsWith("a"));

console.log(objectFilter);

//FUNÇÃO QUE RETORNE OS NUMEROS PARES DO ARRAY

const evenNumbers = numbers.filter(value => value % 2 == 0);
console.log(evenNumbers);