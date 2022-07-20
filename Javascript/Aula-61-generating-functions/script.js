// são funções onde a execução é adiada até o momento que precisamos de seu retorno.

function* geradora1() {
  // Código qualquer ...
  yield 'Valor 1';
  // Código qualquer ...
  yield 'Valor 2';
  // Código qualquer ...
  yield 'Valor 3';
}

const g1 = geradora1();

function* geradora2() {
  let i = 0;

  while (true) {
    yield i;
    i++;
  }
}

const g2 = geradora2();

function* geradora3() {
  yield 0;
  yield 1;
  yield 2;
}

function* geradora4() {
  yield* geradora3();
  yield 3;
  yield 4;
  yield 5;
}

const g4 = geradora4();

function* geradora5() {
  yield function() {
    console.log('Vim do y1');
  };

  return function() {
    console.log('Vim do return')
  } // com o return o código abaixo não é chamado

  // mais code

  yield function() {
    console.log('Vim do y2');
  };
}

const g5 = geradora5();
const fun1 = g5.next().value;
const fun2 = g5.next().value;

fun1();
fun2();
