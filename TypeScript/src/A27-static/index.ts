export class Pessoa {
  static IDADEPADRAO = 0;
  static CPFPADRAO = '000.000.000-00';

  constructor(public nome: string, public sobrenome: string, public idade: number, public cpf: string) {}

  static criaPessoa(nome: string, sobrenome: string): Pessoa {
    return new Pessoa(nome, sobrenome, Pessoa.IDADEPADRAO, Pessoa.CPFPADRAO);
  }

  viewPessoa(): void {
    console.log(this);
  }
}

const pessoa1 = new Pessoa('João', 'Victor', 21, '123.456.789-00');
const pessoa2 = Pessoa.criaPessoa('Maria', 'Elisabete'); // Criando uma pessoa usando um método estático

pessoa1.viewPessoa();
pessoa2.viewPessoa();
