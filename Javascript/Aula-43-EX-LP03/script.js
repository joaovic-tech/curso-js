/*
  Escreva uma função que recebe um número e
  retorne o seguinte:
  Número é divisível por 3 = Fizz
  Número é divisível por 5 = Buzz
  Número é divisível por 3 e 5 = FizzBuzz
  Número NÃO é divisível por 3 e 5 = Retorna o próprio números
  Checar se o número é realmente um número = Retorna o próprio números
  Use a função com números de 0 a 100
*/

function fizzBuzz(n) {
  if (typeof n !== 'number') return `NaN: ${n}`;
  if (n % 3 === 0 && n % 5 === 0) return `FizzBuzz`;
  if (n % 3 === 0) return `Fizz`;
  if (n % 5 === 0) return `Buzz`;
  return n;
}

for (let i = 0; i <= 100; i++) {
  console.log(i, fizzBuzz(i));
}