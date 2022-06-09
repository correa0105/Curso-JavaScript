// Função que recebe 2 números e retorne o maior deles

function maxModelOne(number1, number2) {
    if (number1 > number2) {
        return number1;
    } else {
        return number2;
    }
}

function maxModelTwo(number1, number2) {
    if (number1 > number2) number1; return number2;
}

function maxModelThree(number1, number2) {
    return number1 > number2 ? number1 : number2;
}

const maxModelFour = (number1, number2) => number1 > number2 ? number1 : number2;


console.log(maxModelOne(17,24));
console.log(maxModelTwo(19,28));
console.log(maxModelThree(44,31));
console.log(maxModelFour(24,17));

console.log("##################");
// Função que recebe largura e altura, de uma imagem. Retorne true se a imagem estiver em modo paisagem

const isLandscape = (width, height) => width > height;

console.log(isLandscape(1920, 1080));

console.log("##################");
// Função que receba um numero e retorne o seguinte: "Numero divisivel por 3 = Fizz", "Numero divisivel por 5 = Buzz", "Numero divisivel por 3 e 5 = FizzBuzz"
// Se o numero não for divisivel nem por 3 e nem por 5, retorna o proprio numero, Checar se o numero é realmente um numero, use a função com numeros de 0 a 100

function fizzBuzz(number) {
    if (typeof number !== "number") return number;
    if (number % 3 === 0 && number % 5 === 0) return "FizzBuzz";
    if (number % 3 === 0) return "Fizz";
    if (number % 5 === 0) return "Buzz";
    return number;
}

for (let i = 0; i <= 100; i++) {
    console.log(i, fizzBuzz(i));
}