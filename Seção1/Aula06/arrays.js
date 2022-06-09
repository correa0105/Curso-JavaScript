const fruits = ["Apple", "Banana", "Strawberry", "Melon", "Kiwi"];

fruits.push("Grape");                   //PUSH ADICIONA ITEM AO FIM DA FILA
fruits.unshift("Watermelon");           //UNSHIFT ADICIONA ITEM AO INICIO DA FILA
fruits.pop();                           //POP REMOVE ITEM DO FIM DA FILA
fruits.shift();                         //SHIFT REMOVE ITEM DO INICIO DA FILA

delete fruits[2];                       //DELETE ITEM NA POSIÇÃO SELECIONADA

console.log(fruits.slice(0, 1));        //SLICE CORTA O ARRAY EM PARTES



