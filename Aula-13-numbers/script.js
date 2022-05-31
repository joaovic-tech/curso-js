// IEEE 754-2008 padrão do js sobre os números 
let num1 = 0.8; // Number
let num2 = 0.1; // Number
let temp = num1 * 'Olá';

console.log(num1.toString()); // transforma o número em uma string
console.log(num1.toString(2)); // ver a representação binária
console.log(num1.toFixed(2)); // arredonda o numero
console.log(Number.isInteger(num1)); // verifica se o numero é inteiro
console.log(Number.isNaN(temp)); // verifica se a conta for invalida NaN

// Calculo mais simples
num1 += num2; // 0.9
num1 += num2; // 1.0
num1 += num2; // 1.1
num1 += num2; // 1.2
num1 += num2; // 1.3
num1 += num2; // 1.4
// Calculo mais complexo com o mesmo resultado
num1 = ((num1 * 100) + (num2 * 100)) / 100; // 1.5
num1 = ((num1 * 100) + (num2 * 100)) / 100; // 1.6
num1 = ((num1 * 100) + (num2 * 100)) / 100; // 1.7
num1 = ((num1 * 100) + (num2 * 100)) / 100; // 1.8
num1 = ((num1 * 100) + (num2 * 100)) / 100; // 1.9
num1 = ((num1 * 100) + (num2 * 100)) / 100; // 2.0

num1 = Number(num1.toFixed(2));

console.log(`\nO número ${num1} é inteiro?\n${Number.isInteger(num1)}`);