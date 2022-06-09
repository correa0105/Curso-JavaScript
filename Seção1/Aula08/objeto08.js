/* const people = {            //OBJETO PESSOA
    name: "Lucas",
    lastname: "Corrêa",
    age: 25
};

console.log(people.name); */

function createPeople (name, lastname, age) {           //FUNÇÃO CRIA OBJETO PESSOA
    return {
        name: name,
        lastname: lastname,
        age: age
    }
}

const peopleOne = createPeople("Lucas", "Corrêa", 22);    //ARMAZENA OBJETO NA VARIAVEL

console.log(peopleOne.name);
