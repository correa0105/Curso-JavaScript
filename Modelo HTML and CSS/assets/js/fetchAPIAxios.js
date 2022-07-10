/* fetch("./assets/js/peoples.json")
    .then(response => response.json())
    .then(json => loadElementToPage(json));
 */

axios("./assets/js/peoples.json")
    .then(response => loadElementToPage(response.data));

function loadElementToPage(json) {
    const table = document.createElement("table");

    for(let people of json) {
        let tr = document.createElement("tr");
        let td = document.createElement("td");

        td = document.createElement("td");
        td.innerHTML = people.nome;
        tr.appendChild(td);

        td = document.createElement("td");
        td.innerHTML = people.idade;
        tr.appendChild(td);

        td = document.createElement("td");
        td.innerHTML = people.salario
        tr.appendChild(td);

        table.appendChild(tr);
    }
    const resultAxios = document.querySelector(".resultAxios");
    resultAxios.appendChild(table);
}