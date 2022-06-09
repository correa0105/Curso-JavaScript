function returnHour(date) {
    if (date && !(date instanceof Date)) {
        throw new TypeError("Esperando instancia de Date.");
    }

    if (!date) {
        date = new Date();
    }

    return date.toLocaleTimeString("pt-BR", {hour12: false});
}

try {
const date = new Date ("01-01-1970 04:27:15");
const hour = returnHour(date);
console.log(hour);
} catch (error) {
    //Tratar error
} finally {
    console.log("Vou ser executado de qualquer maneira, sou o Finally");
}