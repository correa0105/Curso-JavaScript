import ValidationCPF from "./CPFValidator";
const button = document.querySelector(".cpfButton")

class CPFGenerator {
    rand(min = 100000000, max = 999999999) {
       return String(Math.floor(Math.random() * (max - min) + min)) ;
    }

    formatCPF(cpf) {
        return cpf.slice(0, 3) + "." + cpf.slice(3, 6) + "." + cpf.slice(6, 9) + "-" + cpf.slice(9, 11); 
    }

    newCPF() {
        const cpfNoDigits = this.rand();
        const digitOne = ValidationCPF.digitGenerator(cpfNoDigits);
        const digitTwo = ValidationCPF.digitGenerator(cpfNoDigits + digitOne);
        const newCPF = cpfNoDigits + digitOne + digitTwo;
        return this.formatCPF(newCPF);
    }
}

button.addEventListener("click", loadCPF);

function loadCPF() {
    const newCPF = new CPFGenerator();
    const cpfGenerated = document.querySelector(".containerCPF");
    cpfGenerated.innerHTML = newCPF.newCPF();
};

