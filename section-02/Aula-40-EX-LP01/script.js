// Escreva uma função que recebe 2 números e retorne o maior deles
// Maneira simples
function numMax(num1, num2) {
   return num1 > num2 ? num1 : num2;
}
// Maneira mais simples
const numMax2 = (num1, num2) => num1 > num2 ? num1 : num2;

console.log(numMax2(12, 25));
