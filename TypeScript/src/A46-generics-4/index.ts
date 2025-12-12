type GetKeyFn = <O, K extends keyof O>(object: O, key: K) => O[K];

const getKey: GetKeyFn = (obj, key) => obj[key];

const animal = {
  cor: 'Rosa',
  vacinas: ['Vacina 1 ', 'Vacina 2'],
  filhote: true,
};

const vacinas = getKey(animal, 'vacinas');
const cor = getKey(animal, 'cor');
const filhote = getKey(animal, 'filhote');

console.log(vacinas);
console.log(cor);
console.log(filhote);
