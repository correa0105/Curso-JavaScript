function getWeekDayText(weekDay) {
    let weekDayText;

    switch (weekDay) {
        case 0: weekDayText = "Domingo";
            return weekDayText;

        case 1: weekDayText = "Segunda";
            return weekDayText;

        case 2: weekDayText = "Terça";
            return weekDayText;

        case 3: weekDayText = "Quarta";
            return weekDayText;

        case 4: weekDayText = "Quinta";
            return weekDayText;

        case 5: weekDayText = "Sexta";
            return weekDayText;

        case 6: weekDayText = "Sabado";
            return weekDayText;

    }
}


const weekDay = new Date("2000-05-02 00:00:00").getDay();
const weekDayText = getWeekDayText(weekDay);

console.log(weekDay, weekDayText);