const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let number of numbers) {
    
    if (number === 2 || number === 5) {
        continue;                               //PULA PARA A PROXIMO INTERAÇÃO DO LAÇO, SEM EXECUTAR O RESTANTE
    }

    console.log(number);

    if (number === 7) {
        break;                                  //TERMINA A INTERAÇÃO
    }
}