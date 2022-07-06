// Reduce- usada mais para reduzir o array a um único elemento

// Some todos os números (reduce)
// Retorne um array com os pares (filter)
// Retorne um array com o dobro dos valores (Map)
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const soma = numeros.reduce(function(acumulador, valor, indice, array) {
  acumulador += valor;
  return acumulador;
}, 0); // aqui vai o valor que será iniciado o acumulador

const pares = numeros.reduce(function (acumulador, valor, indice, array) {
  if(valor % 2 === 0) acumulador.push(valor);
  return acumulador;
}, []);

const dobro = numeros.reduce(function (acumulador, valor, indice, array) {
  acumulador.push(valor * 2);
  return acumulador;
}, []);

// Retorne a pessoa mais velha
const pessoas = [
  { nome: 'João', idade: 18 },
  { nome: 'Maria', idade: 23 },
  { nome: 'Eduardo', idade: 55 },
  { nome: 'Letícia', idade: 19 },
  { nome: 'Rosana', idade: 64 },
  { nome: 'Wallace', idade: 63 }
];
const maisVelha = pessoas.reduce(function(acumulador, valor) {
  if (acumulador.idade > valor.idade) return acumulador; 
  return valor
});
console.log(maisVelha);
