function ValidationCPF(cpf) {                                       //CRIA A FUNÇÃO VALIDADORA DE CPF
    Object.defineProperty(this, "formatCpf", {                      //CRIA UMA PROPRIEDADE COM O NOME DE FORMATCPF
        get: function() {                                           //CRIA UM GET PARA RETORNAR UM CPF REPLACE FORMATADO
            return cpf.replace(/\D+/g, "");
        }
    });
};

ValidationCPF.prototype.validation = function() {                   //CRIA UM PROTOTYPE CHAMADO VALIDATION COM UMA FUNÇÃO
    if(typeof this.formatCpf === "undefined") return false;         //SE O CPF FORMATADO POR UNDEFINED RETORNA FALSO
    if(this.formatCpf.length !== 11) return false;                  //SE O CPF FORMATADO FOR DIFERENTE DE 11 DIGITOS RETORNA FALSO
    if(this.isSequence() === true) return false;                    //SE O CPF FOR UMA SEQUENCIA RETORNA FALSO

    const parseCpf = this.formatCpf.slice(0, -2);                   //CPF PARCIAL COLETA OS PRIMEIROS 9 DIGITOS

    const firstDigit = this.createDigit(parseCpf);                  //ARMAZENA A FUNÇÃO DE CRIAR DIGITO USANDO O CPF PARCIAL A UMA VARIAVEL        
    const secondDigit = this.createDigit(parseCpf + firstDigit);    //ARMAZENA A FUNÇÃO DE CRIAR DIGITO USANDO O CPF PARCIAL + O PRIEMIRO DIGITO A UMA VARIAVEL

    const newCpf = parseCpf + firstDigit + secondDigit              //CONCATENA CPF COM 9 DIGITOS + PRIMEIRO DIGITO + SEGUNDO DIGITO

    return newCpf === this.formatCpf;                               //SE A CONCATEÇÃO FOR IGUAL AO CPF INSERINDO RETORNA TRUE (DIZENDO QUE O CPF É VERDADEIRO)        
};

ValidationCPF.prototype.createDigit = function(parseCpf) {          //CRIA UM PROTOTYPE PARA GERAR O NUMERO DE VALIDAÇÃO
    const cpfArray = Array.from(parseCpf);                          //ARMAZENA O VALOR RECEBIDO DENTRO DE UM ARRAY

    let regressiveCount = cpfArray.length + 1;                      //O TAMANHO DO ARRAY + 1 = 10
    const total = cpfArray.reduce((acumulator, value) => {          //CRIA UMA FUNÇÃO REDUCE QUE IRA ITERAR SOBRE UM VALOR COM UM ACUMULADOR
        acumulator += (regressiveCount * Number(value));            //ACUMULADOR = ACUMULADOR + (CONTADOR REGRESSIVO * NUMERO DO ARRAY);
        regressiveCount--;                                          //DEPOIS DIMINUI 1 DO REGRESSIVE COUNT
        return acumulator                                           //RETORNA O VALOR DO ACUMULADOR
    }, 0);                                                          //GARANTE QUE O ACUMULADOR IRA COMEÇAR EM 0

    const digit = 11 - (total % 11);                //DIGIT = QUANTIDADE DE DIGITO NO CPF - O RESTO DA DIVISÃO DO TOTAL DA MULTIPLICAÇÃO ANTERIOR POR 11
    return digit > 9 ? "0" : String(digit);         //SE O DIGITO FOR MAIOR QUE 9 RETORNA 0 SE NÃO RETORNA O DIGITO
};

ValidationCPF.prototype.isSequence = function() {                           //CRIA UM PROTOTYPE PARA VERIFICAR SE O NUMERO É SEQUENCIA
    const sequence = this.formatCpf[0].repeat(this.formatCpf.length);       //ARMAZENA O PRIMEIRO NUMERO REPETIDO 11 VEZES
    return sequence === this.formatCpf;                                     //SE ELE REPETIDO 11 VEZES POR IGUAL A O NUMERO DO CPF É SEQUENCIA
}

const cpf = new ValidationCPF("035.316.740-13");

if(cpf.validation() === true) {
    console.log("CPF VÁLIDO!");
} else {
    console.log("CPF INVÁLIDO!");
}