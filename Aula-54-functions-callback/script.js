/*
Funções callback - são funções que são executadas
quando uma ação ocorre (finaliza ou executa)
*/

/* O código abaixo possui 3 funções que tem que ser
executadas em sequencia para simular um atraso vindo de
algum banco de dados ou API.

*/

function timeRandom(min = 1000, max = 3000) {
  const numRandom = Math.floor(Math.random() * (max - min) + min);
  return numRandom
}

function f1(callback) {
  setTimeout(function () {
    console.log('f1');
    if (callback) callback();
  }, timeRandom());
}

function f2(callback) {
  setTimeout(function () {
    console.log('f2');
    if (callback) callback();
  }, timeRandom());
}

function f3(callback) {
  setTimeout(function () {
    console.log('f3');
    if (callback) callback();
  }, timeRandom());
}

// Dessa forma irar está em ordem

// f1(function () {
//   f2(function () {
//     f3(function () {
//       console.log('Hello World!');
//     });
//   });
// });

// ou poderá ser dessa forma para não ficar muito grande igual anteriormente 

f1(f1Callback);

function f1Callback() {
  f2(f2Callback);
}

function f2Callback() {
  f3(f3Callback);
}

function f3Callback() {
  console.log('Hello World!');
}