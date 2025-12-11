type CoresObj = typeof coresObj;
type CoresChaves = keyof CoresObj;

const coresObj = {
  vermelho: 'red',
  verde: 'green',
  azul: 'blue',
  roxo: 'purple',
};

function traduzirCor(cor: CoresChaves, cores: CoresObj) {
  return cores[cor];
}

console.log(traduzirCor('vermelho', coresObj)); // red
console.log(traduzirCor('verde', coresObj)); // green
console.log(traduzirCor('roxo', coresObj)); // purple

// console.log(traduzirCor('rosa', coresObj)); // Erro: Argument of type '"rosa"' is not assignable to parameter of type '"vermelho" | "verde" | "azul" | "roxo"'
