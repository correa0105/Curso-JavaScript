const clock = document.querySelector(".clock");
const start = document.querySelector(".start");
const pause = document.querySelector(".pause");
const reset = document.querySelector(".reset");

let seconds = 0;
let timer;

function getTimeFromSeconds(seconds) {
    const date = new Date(seconds * 1000);
    return date.toLocaleTimeString("pt-BR", {hour12: false, timeZone: "GMT"});
}

function startClock() {
    timer = setInterval(function() {
        seconds++;
        clock.innerHTML = getTimeFromSeconds(seconds);
    }, 1000);
}



start.addEventListener("click", function(event) {
    clock.classList.remove("stopped");
    clearInterval(timer);
    startClock()
});

pause.addEventListener("click", function(event) {
    clock.classList.add("stopped");
    clearInterval(timer);
});

reset.addEventListener("click", function(event) {
    clearInterval(timer);
    seconds = 0;
    clock.innerHTML = "00:00:00";
});