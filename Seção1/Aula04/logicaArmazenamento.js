let varA = "A"; //B
let varB = "B"; //C
let varC = "C"; //A

saveA = varA
varA = varB;
varB = varC;
varC = saveA;

console.log(varA, varB, varC);