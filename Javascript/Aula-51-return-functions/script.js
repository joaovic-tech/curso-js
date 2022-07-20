// Return -> Retorna um valor e Finalizar a function
function falaFrase(inicio) {
  function falaResto(fim) {
    return inicio + ' ' + fim
  }
  return falaResto;
}

const falar = falaFrase('Olá');
const fraseCompleta = falar('mundo!');

console.log(falar);
console.log(fraseCompleta);


function criaMultiplicador(multiplicador) {
  return function(n) {
    return n * multiplicador
  }
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadruplica = criaMultiplicador(4);

console.log(duplica(4));
console.log(triplica(3));
console.log(quadruplica(8));
