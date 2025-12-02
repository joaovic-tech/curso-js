// Como é uma funcão que nunca terá que retornar nada, podemos usar o tipo never

export function criaErro(): never {
  throw new Error('Erro qualquer');
}

criaErro();
