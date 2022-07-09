function createPeople(name, lastname, height, weight){
    return {
        name,
        lastname,
        weight,
        height,

        get fullName() {
            return `${this.name} ${this.lastname}`;},

        set fullName(fullName) {
            fullName = fullName.split(" "); 
            this.name = fullName.shift();
            this.lastname = fullName.join(" ");                                                                                                                                                                                                                                                                                   
        },
        
        get imc() {
        const imc = this.weight / (this.height ** 2);
        return imc.toFixed(2);}

    }
}

const p1 = createPeople("\nLucas", "Corrêa", 1.64, 64);
p1.fullName = "Justin Bieber"

console.log(`o novo nome é ${p1.name} e o seu sobrenome é ${p1.lastname}, com as informações de cadastro determino seu IMC: ${p1.imc}`);