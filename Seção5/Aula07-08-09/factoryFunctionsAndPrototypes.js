function createPeople(firstName, lastName) {
    const peoplePrototype = {
        say() {
            console.log(`${this.firstName} Está falando...`);
        },

        eat() {
            console.log(`${this.firstName} Está comendo...`);
        },

        drinking() {
            console.log(`${this.firstName} Está bebendo...`);
        }
    };

    return Object.create(peoplePrototype, {
        firstName: { value: firstName },
        lastName: { value: lastName },
    });
}

const people1 = createPeople("Lucas", "Corrêa");
const people2 = createPeople("Rogério", "Senni");

people1.say();