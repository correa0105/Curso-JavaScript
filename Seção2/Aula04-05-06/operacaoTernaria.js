//(CONDIÇÃO) ? "VALOR VERDADEIRO" : "VALOR FALSO";

const scoreUser = 500;
const lvlUser = scoreUser >= 1000 ? "User Vip" : "User Normal";

const colorUser = null;
const colorDefault = colorUser || "Black";
console.log(lvlUser, colorDefault);