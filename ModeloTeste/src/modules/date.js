const dateArticle = document.querySelector(".date h1");
const date = new Date();

function getWeekDayText(weekDay) {
    let weekDayText;

    switch (weekDay) {
        case 0: weekDayText = "Domingo";
            return weekDayText;

        case 1: weekDayText = "Segunda-Feira";
            return weekDayText;

        case 2: weekDayText = "Terça-Feira";
            return weekDayText;

        case 3: weekDayText = "Quarta-Feira";
            return weekDayText;

        case 4: weekDayText = "Quinta-Feira";
            return weekDayText;

        case 5: weekDayText = "Sexta-Feira";
            return weekDayText;

        case 6: weekDayText = "Sabado";
            return weekDayText;
    }
}

function getMonth(numMonth) {
    let monthText;

    switch (numMonth) {
        case 0: monthText = "Janeiro";
            return monthText;

        case 1: monthText = "Fevereiro";
            return monthText;

        case 2: monthText = "Março";
            return monthText;
            
        case 3: monthText = "Abril";
            return monthText;

        case 4: monthText = "Maio";
            return monthText;

        case 5: monthText = "Junho";
            return monthText;

        case 6: monthText = "Julho";
            return monthText;

        case 7: monthText = "Agosto";
            return monthText;

        case 8: monthText = "Setembro";
            return monthText;

        case 9: monthText = "Outubro";
            return monthText;

        case 10: monthText = "Novembro";
            return monthText;

        case 11: monthText = "Dezembro";
            return monthText;
    }
}

function createDate (date) {
    const weekDay = date.getDay();
    const numMonth = date.getMonth();

    const weekDayText = getWeekDayText(weekDay);
    const monthText = getMonth(numMonth);

    return `${weekDayText}, ${date.getDate()} de ${monthText}, de ${date.getFullYear()} ${zeroLeft(date.getHours())}:${zeroLeft(date.getMinutes())}:${zeroLeft(date.getSeconds())}`;
}

function zeroLeft (num) {
    return num >= 10 ? num : `0${num}`;
}

dateArticle.innerHTML = createDate (date);