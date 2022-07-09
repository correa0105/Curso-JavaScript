function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function aleatoryOrder(msg, time) {
    return new Promise((resolve, reject) => {
    if (typeof msg !== "string") reject("BAD VALUE");
        setTimeout(() => {
            resolve(msg);
        }, time);
    });
}

aleatoryOrder("CONEXÃO COM O BD", rand(1, 3))
    .then(msg => {
        console.log(msg);
        return aleatoryOrder("BUSCANDO DADOS DA BASE", rand(1, 3))
    .then(msg => {
        console.log(msg);
        return aleatoryOrder(181818, rand(1, 3))
    .then(msg => {
        console.log(msg);
    })
    .then(() => {
        console.log("EXIBINDO DADOS NA TELA")
        })
    })
}).catch(e => {
    console.log("ERRO:", e);
});

console.log("ISSO SERA EXIBIDO ANTES DE QUALQUER COISA!");