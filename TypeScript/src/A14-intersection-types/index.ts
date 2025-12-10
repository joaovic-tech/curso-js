type TemNome = { nome: string };
type TemSobrenome = { sobrenome: string };
type TemIdade = { idade: number };
type PessoaA = TemNome & TemSobrenome & TemIdade; // AND

type AB = 'A' | 'B';
type AC = 'C' | 'A';
type AD = 'A' | 'D';
type Intersecao = AB & AC & AD;

const pessoaA: PessoaA = {
  nome: 'João',
  sobrenome: 'Victor',
  idade: 21,
};

console.log(pessoaA);
