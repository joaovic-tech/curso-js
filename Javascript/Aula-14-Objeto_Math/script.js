let num1 = 9.50;
let num2Down = Math.floor(num1); // Arredonda o número para baixo
let num2Up = Math.ceil(num1); // Arredonda o número para cima
let num2Round = Math.round(num1); // Arredonda o número para o mais próximo

console.log(num2Down);
console.log(num2Up);
console.log(num2Round);
console.log(Math.max(1,2,3,4,5,-10,-50,1500,9,8,7,6)); // Mostra o maior número
console.log(Math.min(1,2,3,4,5,-10,-50,1500,9,8,7,6)); // Mostra o menor número

// Math.random() Mostra um número aleatório
const aleatório = Math.round(Math.random() * (10 - 5) + 5); 

console.log(Math.PI); // PI exato 3,14...
console.log(Math.pow(2, 10)); // 2 elevado a 10 mesma coisa que 2 ** 10

// pegar a raiz quadrada
let n1 = 9;
console.log(n1 ** (1/2));
// ou
console.log(n1 ** 0.5);