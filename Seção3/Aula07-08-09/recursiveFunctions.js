function recursive(max) {
    if (max >= 100) return;
    max++;
    console.log(max);
    recursive(max);                                     //FUNÇÕES RECURSIVAS EXECUTAM O SEU PRÓPRIO CODIGO E DEPOIS SE CHAMAM NOVAMENTE (EM LOOPING)
}

recursive(0);