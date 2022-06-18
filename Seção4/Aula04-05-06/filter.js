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

//CRIA UMA FUNÇÃO QUE RETORNE O NOME COM 5 LETRAS OU MAIS, RETORNE A COM MAIS DE 50 ANOS, RETORNE A PESSOA CUJO NOME TERMINA COM A

const people = [ 
    { name: "Lucas", idade: 62 },
    { name: "Michael", idade: 32 },
    { name: "Guilherme", idade: 20 },
    { name: "Andressa", idade: 17 },
    { name: "Carlos", idade: 19 },
    { name: "Micaela", idade: 37 },
];