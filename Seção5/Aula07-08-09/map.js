const peoples = [
    {id: 7, firstName: "Lucas"},
    {id: 3, firstName: "Vitor"},
    {id: 1, firstName: "Lucia"},
];

/* const newPeoples = {};

for (const people of peoples) {
    const {id} = people;
    newPeoples[id] = {...people};
} */

const newPeoples = new Map();

for (const people of peoples) {
    const {id} = people;
    newPeoples.set(id, {...people});
}

for (const pessoa of newPeoples) {
    console.log(pessoa);
}

console.log(newPeoples);