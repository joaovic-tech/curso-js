// funções mais importantes para trabalhar com array
// Filter, map, reduce
// filter - -> Sempre retorna um novo array, com a mesma quantidade de elementos ou menor

// Retorne os números maiores que 10
const numeros = [5,  50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const numerosFiltrados = numeros.filter((valor, indice, array) => {
  // console.log(valor, indice, array);
  return valor > 10
});
// console.log(numerosFiltrados);


const numerosFiltradosSimples = numeros.filter(valor => valor > 10);
// console.log(numerosFiltradosSimples);
// se eu não quiser simplificar o código acima podemos adicionar uma function filter(callbackFilter) e escrever o código abaixo
function callbackFilter(valor) { // aqui dentro pode ir o valor, índice e o array completo
  return valor > 10
}

// Retorne as pessoa que tem o nome com 5 letras ou mais
// Retorne as pessoa com mais de 50 anos
// Retorne as pessoa cujo nome terminal com a
const pessoas = [
  { nome: 'João', idade: 18 },
  { nome: 'Maria', idade: 23 },
  { nome: 'Eduardo', idade: 55 },
  { nome: 'Letícia', idade: 19 },
  { nome: 'Rosana', idade: 32 },
  { nome: 'Wallace', idade: 47 },
];
const pessoasComNomeGrande = pessoas.filter(obj => { return obj.nome.length >= 5 });
const pessoasMaisVelhas = pessoas.filter(obj => { return obj.idade >= 50 });
const nomeTerminaComA = pessoas.filter(function({ nome }) {
  return nome.toLocaleLowerCase().endsWith('a');
});
console.log(nomeTerminaComA);
