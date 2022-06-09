function showDate() {
    let date = new Date();

    return date.toLocaleTimeString("pt-BR", {hour12: false});
}

const timer = setInterval(function () {console.log(showDate());}, 1000);  //SET INTERVAL DETERMINA EM MILISEGUNDOS O TEMPO QUE SERA EXECUTADO

setTimeout(function () {                                                  //SET TIMEOUT DETERMINA O TEMPO QUE VAI ENCERRAR O SET INTERVAL
    clearInterval(timer);
}, 5000);

setTimeout(function () {
    console.log("O tempo acabou!");
}, 10000);