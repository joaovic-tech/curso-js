// Union Types -> é um tipo que pode ser um ou outro
type NSB = number | string | boolean;

function sumOrConcat(a: NSB, b: NSB): NSB {
  if (typeof a === 'number' && typeof b === 'number') return a + b;
  return `${a}${b}`;
}

console.log(sumOrConcat(10, 20)); // sum = 30
console.log(sumOrConcat('20', '25')); // concat = 2025
console.log(sumOrConcat(true, false)); // concat = truefalse
