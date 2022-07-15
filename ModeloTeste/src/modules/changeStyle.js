const paragraph = document.querySelector(".container-addStyle");                           //BUSCA O ELEMENTO QUE TEM A CLASSE ESPECIFICADA E ARMAZENA EM UMA VARIAVEL
const textP = paragraph.querySelectorAll("p");                                             //BUSCA TODOS ELEMENTOS <P> DA VARIAVEL A CIMA

const styleBackground = getComputedStyle(document.querySelector(".background-orangered")); //ARMAZENA TODO O STYLE DA CLASSE ESPECIFICADA EM UMA VARIAVEL
const backgroundImg = styleBackground.backgroundImage;                                     //DOS ESTILOS COMPUTADOS VAI ARMAZENAR EM UMA VARIAVEL O BACKGROUNDIMAGE

paragraph.addEventListener("submit", function(event) {                                     //ARMAZENA O EVENTO DE ENVIO DE FORMULARIO DA VARIAVEL PARAGRAPH
event.preventDefault();                                                                    //IMPEDE O CARREGAMENTO DA PAGINA

for (let conteud of textP) {                                                               //CRIA A VARIAVEL CONTEUDO PARA CADA ELEMENTO P DO PARAGRAFO
    conteud.style.backgroundImage = backgroundImg;                                         //A VARIAVEL CRIADA RECEBE UMA ALTERAÇÃO NO SEU BACKGROUND IMG
    conteud.style.color = "green";                                                         //A VARIAVEL CRIADA RECEBE UMA ALTERAÇÃO NA SUA COLOR
}

});