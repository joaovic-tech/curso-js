/*
Operadores Lógicos
&& -> AND -> E => Todas as expressões precisam ser verdadeiras para retorna true
|| -> OR  -> OU => Só basta uma expressão ser verdadeira para retorna true
!  -> NOT -> NÃO => Nega a afirmação
!! -> => Nega a negação
*/
const expressãoAnd = true && true && true && true;
const expressãoOr = false || true || false || false; 
console.log(`Expressão && => ${expressãoAnd}`);
console.log(`Expressão || => ${expressãoOr}`);
console.log(!!true);