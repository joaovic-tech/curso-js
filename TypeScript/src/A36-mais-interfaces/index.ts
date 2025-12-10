// Declaration merging
interface Pessoa {
  nome: string;
}

interface Pessoa {
  readonly sobrenome: string;
  readonly enderecos: readonly string[];
  idade?: number;
}

const pessoa: Pessoa = {
  nome: 'João',
  sobrenome: 'Victor',
  enderecos: ['Imbituba City'],
  idade: 21,
};

pessoa.idade = 22;
console.log(pessoa);
