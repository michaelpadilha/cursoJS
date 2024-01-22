let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

const valorA = varA;

varA = varB;
varB = varC;
varC = valorA;

console.log(varA, varB, varC);