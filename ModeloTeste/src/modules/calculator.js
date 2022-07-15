function createCalculator() {                                                               //OBJETO CALCULADORA
    return {
        display: document.querySelector(".display"),                                        //SELECIONA O INPUT

        start() {                                                                           //UM ATRIBUTO DO OBJETO É A FUNÇÃO INICIAR
            this.btnClick();                                                                //CHAMA A FUNÇÃO CLICK DO BOTAO
            this.enterClick();                                                              //CHAMA A FUNÇÃO ENTER
        },

        result() {                                                                          //UM ATRIBUTO DO OBJETO É A FUNÇÃO RESULADO
            let operation = this.display.value;                                             //CRIA UMA VARIAVEL QUE ARMAZENA A OPERAÇÃO DO DISPLAY

            try {                                                                           //TENTE
                const calculation = eval(operation);                                        //ARMAZENAR UM EVAL DE OPERATION NUMA CONSTANTE CHAMADA CALCULATION

                if(!calculation) {                                                          //SE DER ERRADO EXIBE UM ALERTA
                    alert("Conta Inválida");
                    return;
                }

                this.display.value = String(calculation);                                   //O DISPLAY RECEBE O RESULTADO
            } catch(erro) {                                                                 //O CASO DE ERRO É EXIBIDO UM ALERTA
                alert("Conta Inválida");
                return;
            }
        },

        clearDisplay() {                                                                    //CRIA FUNÇÃO PARA LIMAPR O DISPLAY
            this.display.value = "";                                                        //DISPLAY RECEBE O VALOR VAZIO
        },

        deleteLast() {                                                                      //FUNÇÃO PARA DELETAR O ULTIMO
            this.display.value = this.display.value.slice(0, -1);                           //O DISPLAY RECEBE UM SLICE DE TODOS MENOS 1 OU SEJA PEGA TODOS VALORES E TIRA O ULTIMO
        },

        enterClick() {                                                                      //FUNÇÃO PARA O CLICK NO ENTER
            this.display.addEventListener("keyup", event => {                               //CAPTURA O EVENTO DE CLICK DO DISPLAY
                if(event.keyCode === 13) {                                                  //SE O EVENTO CAPTURADO FOR 13
                    this.result();                                                          //CHAMA A VARIAVEL RESULTADO
                }
            });
        },

        btnToDisplay(value) {                                                               //FUNÇÃO QUE ENVIA O VALOR PARA O DISPLAY
            this.display.value += value;                                                    //DISPLAY RECEBE OS DADOS QUE JA TEM MAIS O VALOR
        },
        
        btnClick() {                                                                        //CAPTURA O EVENTO DE CLICK DO DOCUMENT
            document.addEventListener("click", event => {
                const element = event.target;                                               //ARMAZENA ESSE CLICK EM ELEMENT

                if(element.classList.contains("btn-caracter")) {                            //CASO O ELEMENT TENHA A VARIAVEL BTN-CARACTER
                    this.btnToDisplay(element.innerText);                                   //CHAMA A FUNÇÃO COM O DADO DO ELEMENT
                    this.display.focus();                                                   //DA FOCUS NO DISPLAY
                }

                if(element.classList.contains("btn-clear")) {                               //CASO O ELEMENT TENHA A VARIAVEL BTN-CLEAR
                    this.clearDisplay();                                                    //CHAMA A FUNÇÃO DE LIMPAR O DISPLAY
                    this.display.focus();                                                   //DA FOCUS NO DISPLAY
                }

                if(element.classList.contains("btn-backspace")) {                           //CASO O ELEMENT TENHA A VARIAVEL BTN-BACKSPACE
                    this.deleteLast();                                                      //CHAMA A FUNÇÃO DE DELETAR O ULTIMO
                    this.display.focus();                                                   //DA FOCUS NO DISPLAY
                }

                if(element.classList.contains("btn-equal")) {                               //CASO O ELEMENT TENHA A VARIAVEL BTN-EQUAL
                    this.result();                                                          //CHAMA A FUNÇÃO DE RESULTADO
                    this.display.focus();                                                   //DA FOCUS NO DISPLAY
                }

            });
        },

    };
}

const calculator = createCalculator();                                                      //ARMAZENA A FUNÇÃO EM UMA VARIAVEL
calculator.start();                                                                         //CHAMA O ATRIBUTO START DO OBJETO CALCULATOR QUE POR SUA VEZ É UMA FUNÇÃO