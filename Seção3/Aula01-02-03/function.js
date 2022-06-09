function functionSumArguments() {
    let total = 0;
    for (let argumentFunction of arguments) {
        total += argumentFunction;
    }
    console.log(total);
}

functionSumArguments(1,2,3,4,5);

const calculation = function (operator, acumulator, ...numbers) {
    for (let number of numbers) {                                       //IN RETORNA OS INDICES, OF RETORNA OS VALORES
        if (operator === "+") acumulator += number;
        if (operator === "-") acumulator -= number;
        if (operator === "*") acumulator *= number;
        if (operator === "/") acumulator /= number;
    }
    console.log(acumulator);
};

calculation("*", 1, 20, 30, 40 ,50);                                    //UTILIZANDO A FUNÇÃO

//////////////
//////////////
//////////////

function functionSum(a, b = 2, c) {
    console.log(a + b + c);
}

functionSum(2, undefined, 3);

//////////////
//////////////
//////////////

function objectPessoa({name, lastname, age}) {
    console.log(name, lastname, age);
}

objectPessoa({name: "Lucas", lastname: "Corrêa", age: 22});