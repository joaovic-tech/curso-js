// && -> false && true -> false "o valor mesmo"
// || -> true || false -> vai retorna "o valor verdadeiro"
/* 
VALORES FALSY = false
0
'', "", `` - Uma String Vazia
null / undefined
NaN 
*/
// Operação && (AND)
// Retorna o primeiro valor false
console.log('João' && null && 'Maria' && 0); // Retorna null porque é um valor falsy
console.log('João' && undefined && 'Maria'); // Retorna undefined

function falaOi() {
  return 'oi';
}

let vaiExecutar = 'Joãozinho';

console.log(vaiExecutar && falaOi());

// Operação || (OR)
// Retorna o primeiro valor verdadeiro
console.log(0 || false || null || 'João Victor' || true); // Retorna João Victor 

const corUser = null;
const corDefinida = corUser || 'preto';
// Irar retorna (preto) se a corUser for null ou outro valor falsy
console.log(corDefinida);

const a = 0;
const b = null;
const c = 'false';
const d = false;
const e = NaN;

console.log(a || b || c || d || e); // Retorna o valor c
