interface PessoaProtocolo<T = string, U = number> {
  nome: T;
  sobrenome: T;
  idade: U;
}

const aluno1: PessoaProtocolo<string, number> = {
  nome: 'João',
  sobrenome: 'Victor',
  idade: 21,
};

const aluno2: PessoaProtocolo = {
  nome: 'Maria',
  sobrenome: 'Santos',
  idade: 21,
};

const aluno3: PessoaProtocolo<number, number> = {
  nome: 123321,
  sobrenome: 312213321,
  idade: 21,
};

console.log(aluno1);
console.log(aluno2);
console.log(aluno3);
