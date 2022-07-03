/* 
Uma variável constante não pode ser alterado
Errado:
  const nome;
  nome = 'João';
--------------------------------------------------------------------------------
Certo:
  const nome = 'João';
*/

let primeiroNumero = '5'; // String
const segundoNumero = 10; // Number

// Transformando essa String em Number
primeiroNumero = Number(primeiroNumero);

const resultado = primeiroNumero + segundoNumero;
const resultadoDuplicado = resultado * 2;
let resultadoTriplicado = resultado * 3;

resultadoTriplicado = resultadoTriplicado + 5;

/* 
Para saber o tipo da variável 
basta colocar um typeof + nomeVariável
*/
console.log(`Primeiro Número: ${primeiroNumero} e seu tipo é ${typeof primeiroNumero}`);
console.log(`Segundo Número: ${segundoNumero} e seu tipo é ${typeof segundoNumero}\n`);
console.log(`Multiplicação\n${primeiroNumero} x ${segundoNumero} = ${resultado}`);
console.log(`${resultado} duplicado é igual á ${resultadoDuplicado}`);
console.log(`${resultado} triplicado é igual á ${resultadoTriplicado}`);
