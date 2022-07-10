function rand() {
    const min = 1000;
    const max = 3000;
    return Math.floor(Math.random() * (max - min) + min);
}

function aleatoryOrder(msg, time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof msg !== "string") {
                reject("BAD VALUE");
                return
            }
            resolve(msg, "- Passei na Promise");
        }, time);
    });
}

/* aleatoryOrder("Fase 1", rand())
    .then(value => {
        console.log(value)
        return aleatoryOrder("Fase 2", rand());
    })
    .then(value => {
        console.log(value)
        return aleatoryOrder("Fase 3", rand());
    })
    .then(value => {
        console.log(value);
    })
    .catch(e => {
        console.log(e)
    }); */

async function execute() {
    try {
        const fase1 = aleatoryOrder("Fase 1", rand());
        console.log(fase1);

        setTimeout(() => {
        console.log("Essa Promise estava pendente: ",fase1)
        }, 3000);

        const fase2 = await aleatoryOrder("Fase 2", rand());
        console.log(fase2);
        const fase3 = await aleatoryOrder("Fase 3", rand());
        console.log(fase3);
    } catch(e) {
        console.log(e);
    }
}

execute();