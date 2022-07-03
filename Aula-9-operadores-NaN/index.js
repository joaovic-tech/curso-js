/**
 * Aritméticos
 * Adição/Concatenação (+)
 * Subtração (-)
 * Multiplicação (*)
 * Divisão (/)
 * Potenciação (**)
 * Resto da divisão (%)
 * 
 * Ordem de precedência
 * ()
 * **
 * * / %
 * + -
 */ 

console.log('Exemplos de operadores aritméticos');
const a = 5;
const b = 10;
console.log(`A soma de ${a} + ${b} é: ${a + b}\n`);


console.log('Exemplos de operadores de atribuição Ex: += -= **=')
let contador = 2;
contador **= 10; 
console.log(`contador = contador ** 10 isso é a mesma coisa que`);
console.log(`contador **= 10;\nResultado = ${contador}\n`);

console.log('NaN - Not a number');
/*
  parseInt() faz a conversão de string para inteiro
  parseFloat() faz a conversão de string para decimais 
  Number() faz a conversão tanto números para inteiro tanto para decimal
*/
const num1 = parseInt('10');
const num2 = parseFloat('5.5');
const num3 = Number('150');
const numberString = Number('15L');
console.log(`${num1} + ${numberString} = ${num1 * numberString}`)

const resultado = (num1 + num2) * num3;
console.log(`${num1} + ${num2} * ${num3} é igual a: ${resultado}`); 