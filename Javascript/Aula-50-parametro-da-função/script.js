// em uma function tem um parâmetro especial chamado arguments
// que sustenta todos os argumentos enviados
// e não precisa pegar esses arguments como parâmetro exemplo =>
// function funcao(a, b, c)
function somarArguments() {
  let total = 0;
  for(let argument of arguments) {
    total += argument;
  }
  console.log(`A soma de todos os arguments é: ${total}`);
}
// somarArguments(5, 50, 45);

function funcao(a = 0, b = 0, c = 4) { // definindo valor padrão
  console.log(a + b + c);
}
// funcao(2, undefined, 20);

// Atribuição via desestruturação
function pegarPessoaObject({ nome, sobrenome, idade }) {
  console.log(nome, sobrenome, idade)
}
let pessoa = { nome: 'João Victor', sobrenome: 'Alves', idade: 18 }
// pegarPessoaObject(pessoa);

function pegarPessoaArray([valor1, valor2, valor3]) {
  console.log(valor1, valor2, valor3);
}
// pegarPessoaArray(['João Victor', 'Alves', 18]);

const conta = function(operador, acumulador, ...numeros) {
  for(let numero of numeros) {
    if (operador === '+') acumulador += numero;
    if (operador === '-') acumulador -= numero;
    if (operador === '/') acumulador /= numero;
    if (operador === '*') acumulador *= numero;
  }
  console.log(acumulador);
};
// conta('+', 1, 20, 30, 40, 50);

// restOperator
const numbers = (...args) => {
  console.log(args);
};
numbers('+', 1, 50, 40, 12, 66);
