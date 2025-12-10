export class Pessoa {
  constructor(private nome: string, private sobrenome: string, private idade: number, private _cpf: string) {}

  set cpf(cpf: string) {
    console.log('SETTER Chamado!!!');
    this._cpf = cpf;
  }

  get cpf(): string {
    console.log('GETTER CHAMADO:');
    return this._cpf.replace(/\D/g, '');
  }
}

const pessoa = new Pessoa('João', 'Victor', 21, '123.456.789-00');

pessoa.cpf = '987.654.321-00';
console.log(pessoa.cpf);
