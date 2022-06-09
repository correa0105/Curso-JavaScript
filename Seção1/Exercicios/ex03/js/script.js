function myScope() {
    const form = document.querySelector(`.grid`);               //SELECIONA A O FORMULARIO
    const result = document.querySelector(`.result`);           //SELECIONA A DIV QUE APARECERÁ O RESULTADO

    const peoples = [];                                         //CRIA A ARRAY LIST DE PESSOAS

    function receptEventForm(event) {                           //FUNÇÃO COM PARAMETRO EVENTO
        event.preventDefault();                                 //EXECUTA O PARAMETRO EVENTO

        const name = form.querySelector(`.name`);               //SALVA OS DADOS DO INPUT NA VARIAVEL
        const lastname = form.querySelector(`.lastname`);       //SALVA OS DADOS DO INPUT NA VARIAVEL
        const phone = form.querySelector(`.phone`);             //SALVA OS DADOS DO INPUT NA VARIAVEL
        const age = form.querySelector(`.age`);                 //SALVA OS DADOS DO INPUT NA VARIAVEL

        peoples.push({                                          //FUNÇÃO PARA INSERIR DADOS NO FINAL DO ARRAY
            name: name.value,                                   //ARMAZENA O VALOR DA VARIAVEL NAME NO PARAMETRO NAME DO ARRAY
            lastname: lastname.value,                           //""
            phone: phone.value,                                 //""
            age: age.value                                      //""
        });

        result.innerHTML += `<p>${name.value} 
        ${lastname.value} ${phone.value} ${age.value}</p>`;     //IMPLEMENTA NA DIV RESULT O VALOR DOS ITENS DO ARRAY TODA VEZ QUE CLICA NO SUBMIT
    }
    
    form.addEventListener(`submit`, receptEventForm);
}

myScope();