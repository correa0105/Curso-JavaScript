const numbers = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 24, 27];
let total = 0;

numbers.forEach((value, index, array) => {
    total += value;
})

console.log(total);