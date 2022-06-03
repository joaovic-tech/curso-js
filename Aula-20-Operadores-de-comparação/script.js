console.log('             Operadores de comparação');
console.log('**-------------------------------------------------------***');
console.log('>   - maior que');
console.log('>=  - maior que ou igual a');
console.log('<   - menor que');
console.log('<=  - menor que ou igual a');
console.log('==  - igualdade (valor)                  - Não Recomendado');
console.log('=== - igualdade estrita (valor e tipo)   - Recomendado');
console.log('!= - diferente (valor)                   - Não Recomendado');
console.log('!== - diferente estrito (valor e tipo)   - Recomendado\n');

const n1 = 50;
const n2 = 150;

console.log(`${n1} > ${n2} -> ${n1 > n2}`); // false
console.log(`${n1} >= ${n2} -> ${n1 >= n2}`); // false
console.log(`${n1} < ${n2} -> ${n1 < n2}`); // true
console.log(`${n1} <= ${n2} -> ${n1 <= n2}`); // true
console.log(`${n1} == ${n2} -> ${n1 == n2}`); // false
console.log(`${n1} === ${n2} -> ${n1 === n2}`); // false
console.log(`${n1} != ${n2} -> ${n1 != n2}`); // true
console.log(`${n1} !== ${n2} -> ${n1 !== n2}`); // true