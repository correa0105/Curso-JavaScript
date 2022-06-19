//DOBRE OS NUMEROS DO ARRAY

const numbers = [30, 6, 2, 3, 26, 32, 9, 8, 15, 28];
const doubleNumbers = numbers.map(value => value*2);

console.log(doubleNumbers);

//RETORNE UMA STRING COM O NOME DA PESSOA, REMOVA A CHAVE NAME DO OBJETO ADICIONA UMA CHAVE ID EM CADA OBJETO;

const people = [ 
    { name: "Lucas", year: 62 },
    { name: "Carla", year: 32 },
    { name: "Guilherme", year: 20 },
    { name: "Andressa", year: 17 },
    { name: "Joao", year: 19 },
    { name: "Micaela", year: 37 },
];

const arrayNames = people.map(value => value.name);

console.log(arrayNames);
 
const objectNoKey = people.map(object => ({year: object.year}));

console.log(objectNoKey);

const addIdToObject = people.map((object, index) => {
    const newObj = {... object};                                                    //SE NÃO FOSSE CRIADO UM NOVO OBJETO SERIA ALTERADO O OBJETO ORIGINAL
    newObj.Id = (index + 1) * 1000; return newObj});

console.log(addIdToObject);

console.log(people);