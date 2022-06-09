const paragraph = document.querySelector(".container-addStyle");
const textP = paragraph.querySelectorAll("p");

const styleBackground = getComputedStyle(document.querySelector(".background-orangered"));
const backgroundImg = styleBackground.backgroundImage;

console.log(backgroundImg);

paragraph.addEventListener("submit", function(event) {
event.preventDefault(); 

for (let conteud of textP) {
    conteud.style.backgroundImage = backgroundImg;
    conteud.style.color = "green";
}

});