let umaString = "Um texto";

console.log('Forma de trabalhar com String\n');

console.log(umaString.charAt(6)); // Retorna a posição do índice
console.log(umaString.indexOf('texto')); // Procurar o índice da palavra texto
console.log(umaString.indexOf('o', 3)); // Retorna a posição do 'o' depois do índice 3
console.log(umaString.lastIndexOf('U', 7)); // começa de trás pra frente

/* Uma expressão regular que mostrar todas as letras minusculas
[a-z] pega as letras minusculas de a até z
flag g serve para mostra todas as strings pedidas se tirar mostrar só a primeira
*/
console.log(umaString.match(/[a-z]/g)); 
console.log(umaString.search(/x/)); // Similar ao indexOf porem ele aceita expressões regulares
console.log(umaString.replace(/Um/, 'Outro')); // Substitui uma palavra por outra


const frase = 'O rato roue a roupa do rei de Roma.';

console.log(`o tamanho da frase acima ${frase.length}`);
// pega uma palavra que começa de um posição a outra
console.log(frase.slice(32));
console.log(frase.slice(2, 6));
console.log(frase.slice(-5, frase.length - 1));

console.log(frase.substring(frase.length - 5, frase.length - 1));

console.log(frase.split(' ', 3)); // divide a string

console.log(frase.toUpperCase()); // Deixa tudo maiúscula
console.log(frase.toLowerCase()); // Deixa tudo minusculo