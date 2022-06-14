(function(idade, peso, altura) {

    const sobrenome = "Corrêa";

    function criaNome(nome) {
        return "Nome: " + nome + " " + sobrenome;
    }

    function falaNome() {
        console.log(criaNome("Lucas"))
    }

    falaNome();
    console.log(`Idade: ${idade}`);
    console.log(`Peso: ${peso}`);
    console.log(`Altura: ${altura}`);

})(22, 64, 1.65);
