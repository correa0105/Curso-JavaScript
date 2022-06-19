//RETORNE A SOMA DO DOBRO DE TODOS OS PARES
// -> FILTRAR PARES
// -> DOBRAR VALORES
// -> REDUZIR (SOMAR TUDO)

const numbers = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 24, 27];

const result = numbers
    .filter(value => value % 2 === 0)
    .map(value => value * 2)
    .reduce((acumulator, value) => acumulator += value);

console.log(result)
