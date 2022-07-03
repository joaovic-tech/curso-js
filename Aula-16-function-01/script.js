// 1º forma de criar functions
function soma(x = 0, y = 0) {
  const resultado = x + y;
  return resultado;
}

const resultado = soma();
console.log(resultado);


// 2º forma de criar functions
const raiz = function (n) {
  return n ** 0.5;
};

const n1 = 9;
const n2 = 16;
const n3 = 25;
console.log(`Raiz de ${n1} é: ${raiz(n1)}`);
console.log(`Raiz de ${n2} é: ${raiz(n2)}`);
console.log(`Raiz de ${n3} é: ${raiz(n3)}`);

// 3º forma de criar functions
const mul = n => n * 2;

console.log(mul(12.5));
console.log(mul(25));
console.log(mul(50));