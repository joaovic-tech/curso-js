export class Pessoa {
  constructor(public nome: string, public sobrenome: string, private idade: number, protected cpf: string) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
    this.cpf = cpf;
  }

  getIdade(): number {
    return this.idade;
  }

  getCpf(): string {
    return this.cpf;
  }

  getNomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }
}

export class Aluno extends Pessoa {
  getNomeCompleto(): string {
    return 'Aluno: ' + this.nome + ' ' + this.sobrenome;
  }
}

export class Cliente extends Pessoa {
  getNomeCompleto(): string {
    return 'Cliente: ' + this.nome + ' ' + this.sobrenome;
  }
}

const aluno = new Aluno('João', 'Victor', 21, '123.456.789-00');
const cliente = new Cliente('Maria', 'Silva', 25, '987.654.321-00');
const pessoa = new Pessoa('Pessoa', 'Geral', 22, '123.456.789-00');

console.log(aluno.getNomeCompleto());
console.log(cliente.getNomeCompleto());
console.log(pessoa.getNomeCompleto());
