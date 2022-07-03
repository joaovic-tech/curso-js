/*
Primitivos (imutáveis) - string, number, boolean, undefined, 
null (bigInt, symbol) - Valores copiados
*/
let nome = 'João';
let Nome = nome;
nome[0] = 'L';
console.log(nome[0], Nome,'\n');

// Referência (mutável) - arrays, object, function - Passados por referência
const a = {
  nome: 'João',
  sobrenome: 'Victor'
};

const b = {...a};

a.nome = 'Luiz'
console.log(a);
console.log(b);