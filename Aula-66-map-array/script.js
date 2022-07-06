// Map - Altera os valores de um array

// Dobre os números
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosEmDobro = numeros.map(valor => valor * 2);
// console.log(numerosEmDobro);

// Para cada elemento:
// Retorne apenas uma string com o nome da pessoa
// Remova apenas a chave "nome" do objeto
// Adicione uma chave id cada objeto
const pessoas = [
  { nome: 'João', idade: 18 },
  { nome: 'Maria', idade: 23 },
  { nome: 'Eduardo', idade: 55 },
  { nome: 'Letícia', idade: 19 },
  { nome: 'Rosana', idade: 32 },
  { nome: 'Wallace', idade: 47 }
];

// o código abaixo altera os valores do array pessoas
const nomes = pessoas.map(obj => { obj.nome });
const idades = pessoas.map((obj) => ({ idade: obj.idade }));
const comIDs = pessoas.map(function (obj, indice) {
  obj.id = (indice + 1) * 1000;
  return obj
});

// para não ser alterado podemos usar o rast operato
const addIDs = pessoas.map(function (obj, indice) {
  const newObj = { ...obj };
  newObj.id = indice;
  return newObj;
});
console.log(pessoas);
