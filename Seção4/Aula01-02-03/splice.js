console.log("\nREMOVENDO UMA QUANTIDADE DO ARRAY");

const names = ["Jonatas", "Vitor", "Michel", "Guilherme", "Lucas", "Anderson"];

const removed = names.splice(-3, Number.MAX_VALUE);          //REMOVE O 3 ULTIMOS

console.log(`Foi retirado o item ${removed} da lista ${names}`);

console.log("\nADICIONANDO EM UM LUGAR ESPECIFICO DO ARRAY");

const lastNames = ["Correa", "Santos", "Cabral", "Silva", "Carmo", "Fraga"];

const removed1 = lastNames.splice(3, 0, "Ferreira");        //ADICIONA NA POSIÇÃO 3 O ITEM FERREIRA

console.log(`Nova lista: ${lastNames}`);

//TAMBEM POSSO TIRAR UM ITEM E UMA POSIÇÃO E ADICIONAR OUTRO NO LUGAR EXEMPLO: splice(3, 1, "Qualquer"), no indice 3 tira 1 e adiciona "Qualquer"
//REMOVER O ULTIMO: splice(-1, 1)
//REMOVER O PRIMEIRO: splice(0, 1)
//ADD NO FINAL: splice(.lenght, 0, "Valor adicionado no final")
//ADD NO PRIMEIRO: splice(0, 0, "Valor adicionado no inicio")

