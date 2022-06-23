/*
CONTINUE
A instrução continue sem rótulo ignora/pula a iteração atual de um loop
for, do-while ou while e continua o loop.

BREAK - Para a execução do loop
*/

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let number of numbers) {
  if (number === 2) {
    console.log('Pulei o número 2, continuando a execução');
    continue;
  }
  
  if(number === 7){
    console.log('7 encontrado, fim da execução');
    break;
  }
  console.log(number);
}

// outra forma
console.log('\n----outra forma----\n');
let i = 0;
while(i < numbers.length) {
  let number = numbers[i];

  if (number === 2) {
    console.log('Pulei o número 2, continuando a execução');
    i++;
    continue;
  }
  console.log(number);
  if(number === 7){
    console.log('7 encontrado, fim da execução');
    i++;
    break;
  }
  i++;
}