for (let i = 300; i >= 0; i-=50){
    console.log("Linha", i);
}


for (let i = 0; i <= 10; i++){ //VERIFICAR PAR OU IMPAR
    if(i % 2 === 0){
        console.log(`O numero ${i} é par`);
    } else {
        console.log(`O numero ${i} é impar`);
    }
}

const fruitList = ["Apple", "Banana", "Strowberry", "Watermellon", "Orange", "Lemon"];

for (let i = 0; i < fruitList.length; i++){
    console.log("Fruta:", fruitList[i]);
}