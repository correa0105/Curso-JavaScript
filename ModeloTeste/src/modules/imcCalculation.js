const form = document.querySelector(".grid-calculation");               //SELECIONA A DIV

form.addEventListener("submit", function(event) {                       //ADICIONA UM EVENTO AO SUBMIT (BOTAO DO FORMULARIO) 
    event.preventDefault();                                             //CANCELA O ENVIO
    const inputWeight = event.target.querySelector(".weight");          //SELECIONA O PESO
    const inputHeight = event.target.querySelector(".height");          //SELECIONA A ALTURA

    const weight = Number(inputWeight.value);                           //ARMAZENA A ALTURA E TRANSFORMA EM NUMERO
    const height = Number(inputHeight.value);                           //ARMAZENA O PESO E TRANSFORMA EM NUMERO

    if (!weight) {                                                      //CHECA SE O PESO É VALIDO
        setIMC("Peso inválido", false);
        return;
    }

    if (!height) {                                                      //CHECA SE A ALTURA É VALIDA
        setIMC("Altura inválida", false);
        return;
    }

    const imc = getIMC(weight, height);                                 //ARMAZENA O RESULTADO DA FUNÇÃO DO CALCULO NA VARIAVEL
    const nivelIMC = getTableIMC(imc);                                  //ARMAZENA O RESULTADO DA FUNÇÃO DO NIVEL NA VARIAVEL

    const msg = `Seu IMC é ${imc} (${nivelIMC})`;                       //ARMAZENA A MENSAGEM EM UMA VARIAVEL

    setIMC(msg, true);                                                  //SE TUDO DER CERTO EXIBE MENSAGEM E DETERMINA TIPO VERDADEIRO                                                  
});

function createP () {                                                   //FUNÇÃO PARA CRIAR UM PARAGRAFO <p>
    const p = document.createElement("p");
    return p;
}

function getIMC (weight, height) {                                      //FUNÇÃO PARA DETERMINAR O IMC
    const imc = weight / height ** 2;                                   //CALCULO
    return imc.toFixed(2);                                              //RESULTADO COM 2 CASAS DECIMAIS
}

function setIMC (msg, isValid) {                                        //FUNÇÃO PARA SETAR O VALOR DO IMC
    const result = document.querySelector(".result-imc");               //SELECIONA A DIV DO RESULTADO
    result.innerHTML = "";                                              //DEIXA VAZIA

    const p = createP();                                                //ARMAZENA O RESULTADO DA FUNÇÃO PARA CRIAR PARAGRAFO

    if (isValid) {                                                      //DETERMINA A CLASSE DO PARAGRAFO
        p.classList.add("paragraph-result");
    } else {                                                            //DETERMINA A CLASSE DO PARAGRAFO
        p.classList.add("paragraph-result-invalid");                    
    }

    p.innerHTML = msg;                                                  //O PARAGRAFO RECEBE O TEXTO
    result.appendChild(p);                                              //A DIV RECEBE O PARAGRAFO
}

function getTableIMC(imc) {                                             //FUNÇÃO PARA DETERMINAR O GRAU
    const nivel = ["Abaixo do peso normal", "Peso normal", "Sobrepeso"  //ARRAY LIST DO GRAU POSSIVEL
    , "Obesidade grau 1", "Obesidade grau 2", "Obesidade grau 3"];

    if (imc > 39.9) return nivel[5];                                    //CONDICIONAL APRA SABER O NIVEL
    if (imc >= 34.9) return nivel[4];
    if (imc >= 29.9) return nivel[3];
    if (imc >= 24.9) return nivel[2];
    if (imc >= 18.9) return nivel[1];
    if (imc < 18.5) return nivel[0];
}