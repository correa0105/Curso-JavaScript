function random(min = 1000, max = 3000) {
    const numero = Math.random() * (max - min) + min;
    return Math.floor(numero);
}

function f1(callback) {
    setTimeout(function() {
        console.log("f1");
        if (callback) callback();
    }, random());
}

function f2(callback) {
    setTimeout(function() {
    console.log("f2");
    if (callback) callback();
    }, random());
}

function f3(callback) {
    setTimeout(function() {
    console.log("f3");
    if (callback) callback();
    }, random());
}

f1(function() {                         //COM A FUNÇÃO CALLBACK NO FINAL DA FUNÇÃO, ELA IRA EXECUTAR NA ORDEM DETERMINADA INDEPENDENTE DO CALLBACK
    f2(function() {
        f3(function () {
            console.log("Olá mundo!");
        });
    });
});

