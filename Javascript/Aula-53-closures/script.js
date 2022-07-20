/*
Closures - è a habilidade que a função
tem em acessar seu escopo léxico
*/

function returnFunction(nome) {
  return function () {
    return nome;
  };
}

const func = returnFunction('João');
const func2 = returnFunction('Luiz');
console.dir(func);
console.dir(func2);

console.log(func(), func2());
