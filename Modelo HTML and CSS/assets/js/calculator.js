function createCalculator() {
    return {
        display: document.querySelector(".display"),

        start() {
            this.btnClick();
            this.enterClick();
        },

        result() {
            let operation = this.display.value;

        try {
            calculation = eval(operation);

            if(!calculation) {
                alert("Conta Inválida");
                return;
            }

            this.display.value = String(calculation);
        } catch(erro) {
            alert("Conta Inválida");
            return;
        }

        },

        clearDisplay() {
            this.display.value = "";
        },

        deleteLast() {
            this.display.value = this.display.value.slice(0, -1);
        },

        enterClick() {
            this.display.addEventListener("keyup", event => {
                if(event.keyCode === 13) {
                    this.result();
                }
            });
        },

        btnClick() {
            document.addEventListener("click", event => {
                const element = event.target;

                if(element.classList.contains("btn-caracter")) {
                    this.btnToDisplay(element.innerText);
                }

                if(element.classList.contains("btn-clear")) {
                    this.clearDisplay();
                }

                if(element.classList.contains("btn-backspace")) {
                    this.deleteLast();
                }

                if(element.classList.contains("btn-equal")) {
                    this.result();
                }

            });                                                          //Outra opção seria utilizar a função .bind(this)
        },

        btnToDisplay(value) {
            this.display.value += value;
        }


    };
}

const calculator = createCalculator();
calculator.start();