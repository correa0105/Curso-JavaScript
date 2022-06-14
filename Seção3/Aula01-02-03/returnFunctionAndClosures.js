function createPeople(name, lastname) {
    return {name, lastname};
}

const p1 = createPeople ("Lucas", "Corrêa");

console.log(p1);

//////////////
//////////////
//////////////

function showStart(start) {
    function showRest(rest) {
        return start + " " + rest;
    }
    return showRest;
}

const start = showStart("Inicio");

console.log(start("Restante"));

//////////////
//////////////                                          //CLOSURES
//////////////

function createMultiplicator(multiplier) {              //CRIA FUNÇÃO QUE AMARZENA UM NUMERO MULTIPLICADOR
    function multiply(number) {                         //CRIA FUNÇÃO QUE ARMAZENA O NUMERO A SER MULTIPLICADO
        return multiplier * number;                     //RETORNA A MULTIPLICAÇÃO
    }
    return multiply;                                    //RETORNA A FUNÇÃO DE MULTIPLICAÇÃO
}

const double = createMultiplicator(2);                  //ARMAZENA A FUNÇÃO DE ESCOPO MAIOR COM O VALOR DO MULTIPLICADOR
const triple = createMultiplicator(3);                  //ARMAZENA A FUNÇÃO DE ESCOPO MAIOR COM O VALOR DO MULTIPLICADOR
const quadruple = createMultiplicator(4);               //ARMAZENA A FUNÇÃO DE ESCOPO MAIOR COM O VALOR DO MULTIPLICADOR

console.log(triple(3));                                 //A FUNÇÃO SE TORNOU UMA CLOSURE E CONSEGUE SE LEMBRAR AONDE FOI CRIADA