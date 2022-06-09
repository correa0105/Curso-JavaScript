const threeHours = 60 * 60 * 3 * 1000;
const oneDay = 60 * 60 * 24 * 1000;

const date1 = new Date();
console.log("Dia", date1.getDate());
console.log("Mês", date1.getMonth() + 1);
console.log("Ano", date1.getFullYear());
console.log("Hora", date1.getHours());
console.log("Min", date1.getMinutes());
console.log("Seg", date1.getSeconds());
console.log("Mili Seg", date1.getMilliseconds());
console.log("Dia da Semana", date1.getDay());

const date2 = new Date(0 + threeHours + oneDay);
console.log(date2.toString());

const date3 = new Date(2000, 4, 1, 9, 25, 45, 500);
console.log(date3.toString());

const date4 = new Date("2000-05-01 17:25:25");
console.log(date4.toString());

function zeroLeft (num) {
    return num >= 10 ? num : `0${num}`;
}

function formatDate(date) {
    const day = zeroLeft(date.getDate());
    const month = zeroLeft(date.getMonth() + 1);
    const year = zeroLeft(date.getFullYear());
    const hour = zeroLeft(date.getHours());
    const minute = zeroLeft(date.getMinutes());

    return `${day}/${month}/${year} ${hour}:${minute}`
}

const date5 = new Date();

console.log(formatDate(date5));