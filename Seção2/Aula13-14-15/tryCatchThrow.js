try {
    console.log(notExist);
} catch (error) {
    console.log("notExist não existe.");
}

console.log("############");

function sum(number1, number2) {
    if (typeof number1 !== "number" || typeof number2 !== "number") {
        throw new Error("Number1 e Number2 precisam ser numeros");
    }
    return number1 + number2;
}

try {
    console.log(sum(13, 5));
} catch (error) {
    console.log(error);
}
