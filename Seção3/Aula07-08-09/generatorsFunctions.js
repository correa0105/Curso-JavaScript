console.log("\n\nFUNÇÃO GERADOR 1\n");

function* generatorOne() {
    //Qualquer código...
    yield "Valor 1";

    //Qualquer código...
    yield "Valor 2";

    //Qualquer código...
    yield "Valor 3";
}

const generator1 = generatorOne();
/*console.log(generator1.next().value);                       //AS FUNÇÕES GERADORAS RETORNAM UM VALOR DIFERENTE PARA CADA VEZ QUE É EXECUTADA
console.log(generator1.next().value);
console.log(generator1.next().value);*/

for (let value of generator1) {
    console.log(value);
}

console.log("\n\nFUNÇÃO GERADOR 2\n");

function* generatorTwo() {                                    //ESSA FUNÇÃO GERADORA RETORNA VALOR INFINITAS VEZES DE ACORDO COMO É CHAMADA
    let i = 1;
    while (true) {
        yield i;
        i++;
    }
}

const generator2 = generatorTwo();                              

console.log(generator2.next().value);
console.log(generator2.next().value);
console.log(generator2.next().value);
console.log(generator2.next().value);
console.log(generator2.next().value);
console.log(generator2.next().value);
console.log(generator2.next().value);
console.log(generator2.next().value);
console.log(generator2.next().value);
console.log(generator2.next().value);

console.log("\n\nFUNÇÃO GERADOR 3\n");

function* generatorThree() {
    yield 0;
    yield 1;
    yield 2;
}

function* generatorFour() {                                    //ESSA FUNÇÃO RETORNA VALORES COM BASE EM OUTRA FUNÇÃO
    yield* generatorThree();
    yield 3;
    yield 4;
    yield 5;
}

const generator4 = generatorFour();

for (let value of generator4) {
    console.log(value);
}

console.log("\n\nFUNÇÃO GERADOR 4\n");

function* generatorFive() {
    yield function () {
        console.log("Vim do Yield 1");
    };

    return function () {
        console.log("Vim do Return");
    }

    //Código qualquer

    yield function () {
        console.log("Vim do Yield 2");
    }
}

const generator5 = generatorFive();
generator5.next().value();
generator5.next().value();




