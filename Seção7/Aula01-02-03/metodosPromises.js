function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function aleatoryOrder(msg, time) {
    return new Promise((resolve, reject) => {

        if (typeof msg !== "string") {
            reject("BAD VALUE");
            return
        }

        setTimeout(() => {
            resolve(msg);
        }, time);
    });
}

const promises = [
    "PRIMEIRO VALOR",
    aleatoryOrder("PROMISE 1", rand(1, 3)),
    aleatoryOrder("PROMISE 2", rand(1, 3)),
    aleatoryOrder("PROMISE 3", rand(1, 3)),
    aleatoryOrder("PROMISE 4", rand(1, 3)),
    "OUTRO VALOR"
]

Promise.all(promises)               //EXIBE TODAS PROMISES, SE NENHUMA FALHAR, NA ORDEM DO ARRAY
    .then((value) => {
        console.log(value);
    })
    .catch((error) => {
        console.log(error);
    })

Promise.race(promises)              //FAZ UMA CORRIDA E EXIBE A QUE EXECUTOU PRIMEIRO
    .then((value) => {
        console.log("ESSE EXECUTOU PRIMEIRO:", value);
    }).catch((error) => {
        console.log(error);
    })

function downPage() {
    const hasCache = true;

    if (hasCache) {
        return Promise.resolve("Pagina em Cache")
    } else {
        return aleatoryOrder("Baixei a Pagina", rand(1, 3));
    }
}

downPage()
    .then(dataPage => {
        console.log(dataPage);
    })
    .catch(e => {
        console.log(e);
    })