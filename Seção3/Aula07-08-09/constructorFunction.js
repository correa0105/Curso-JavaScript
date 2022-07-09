function People(name, lastname) {
    this.name = name;
    this.lastname = lastname;

    Object.freeze(this);                 //ESSA FUNÇÃO IMPEDE QUE O VALOR DO ATRIBUTO DE UM OBJETO SEJA ALTERADO
}

const p1 = new People("Lucas", "Corrêa");
const p2 = new People("Marcio", "Miranda");

p1.name = "Lucas Dev"                    //ELA É CONSTANTE POREM ESTOU ALTERANDO O VALOR E NÃO O ENDEREÇO DA MEMÓRIA, ENTÃO É PERMITIDO

console.log(p1);
console.log(p2);