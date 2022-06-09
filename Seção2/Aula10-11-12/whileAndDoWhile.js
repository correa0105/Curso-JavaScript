function random(min, max){
    const random = Math.random() * (max - min) + min;
    return Math.floor(random);
}

const min = 1;
const max = 30;

let rand = random(min, max);

while (rand != 15 && rand != 30) {
    rand = random(min, max);
    console.log(rand);
}

console.log("##############");

rand = 15;

do {
    rand = random(min, max);
    console.log(rand);
} while (rand != 15 && rand != 30);