const people = {
    name: "Lucas",
    lasName: "Corrêa"
};

const fullName = "name";

console.log(people.name);               //ACESSANDO COM PONTO
console.log(people[fullName]);          //ACESSANDO COM COLCHETE

const people1 = new Object();

people1.name = "Vitor";
people1.lastName = "Andrade";
people1.age = 22;
people1.sayName = function() { return (`Meu nome é ${this.name}`) };    //USAR O THIS PARA SE REFERIR AO ATRIBUTO "DESTE" OBJETO
people1.getBirthDate = function() {
    const currentDate = new Date();
    return currentDate.getFullYear() - this.age;
}

console.log(people1);
console.log(people1.name);
console.log(people1.sayName());
console.log(people1.getBirthDate());

for (let key in people1) {
    console.log("\n" + key);
    console.log(people1[key]);
}

/* delete people1.name;                    //APAGAR ATRIBUTO DO OBJETO
console.log(people1);
 */


