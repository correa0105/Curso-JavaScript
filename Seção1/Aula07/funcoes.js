function salutation(name) {                 //FUNÇÃO
    return `Good Morning, ${name}!`;
}
const variable = salutation("Lucas");       //AMAZENA VALOR DA FUNÇÃO NUMA VARIAVEL
console.log(variable);                      //EXIBE VARIAVEL

//////////// 
//////////// 
//////////// 

function sum(x, y){                         //FUNÇÃO
    const result = x + y;
    return result;
}
console.log(sum(5, 5));                     //EXIBE FUNÇÃO

//////////// 
//////////// 
//////////// 

const squareRoot = function(x){             //ARMAZENA FUNÇÃO EM UMA CONSTANTE
    return x ** 0.5
};
console.log(squareRoot(25));                //MOSTRA A VARIAVEL COM A FUNÇÃO ARMAZENADA

