const elements = [
    {tag: "h2", text: "Primeiro texto do for inserido com sucesso!"},
    {tag: "h3", text: "Segundo texto do for inserido com sucesso!"},
    {tag: "h4", text: "Terceiro texto do for inserido com sucesso!"},
    {tag: "h5", text: "Quarto texto do for inserido com sucesso!"},
    {tag: "h6", text: "Quinto texto do for inserido com sucesso!"},
]

const container = document.querySelector(".container-for");
const div = document.createElement("div");

for (let i = 0; i< elements.length; i++) {
    let {tag, text} = elements[i];
    
    let createTag = document.createElement(tag);
    let createText = document.createTextNode(text);

    createTag.appendChild(createText);
    div.appendChild(createTag);
}

container.addEventListener("submit", function(event) {
event.preventDefault(); 

container.appendChild(div);

});