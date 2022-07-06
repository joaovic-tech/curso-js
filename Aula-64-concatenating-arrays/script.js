const a1 = [1, 2, 3];
const a2 = [4, 5, 6];
// concatenado com o método concat
const a3Concat = a1.concat(a2, [7, 8, 9], 'João');
console.log(a3Concat);
// concatenado com o ...rest -> ... spread
//           aqui pode deixar o valor vazio no índice
const a3Rest = [...a1, ...a2, , 'João'];
console.log(a3Rest);
