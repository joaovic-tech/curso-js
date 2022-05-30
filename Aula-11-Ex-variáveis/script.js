// Exercícios
/*
  varA tem que ter o valor de varB
  varB tem que ter o valor de varC
  varC tem que ter o valor de varA
*/
let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

[varA, varB, varC] = [varB, varC, varA]

console.log(varA, varB, varC);