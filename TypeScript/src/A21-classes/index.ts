export class Colaborador {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,
  ) {}
}

export class Empresa {
  public readonly nome: string;
  private readonly colaboradores: Colaborador[] = [];
  protected readonly cnpj: string;

  constructor(nome: string, cnpj: string) {
    this.nome = nome;
    this.cnpj = cnpj;
  }

  adicionarColaborador(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador);
  }

  exibirColaboradores(): void {
    console.log('='.repeat(60));
    console.log('Empresa:', this.nome);
    this.colaboradores.forEach((colaborador) => {
      console.log(colaborador);
    });
    console.log('='.repeat(60));
  }
}

const facebook = new Empresa('Facebook', '11.111.111/0001-11');

const colaborador1 = new Colaborador('João', 'Victor');
const colaborador2 = new Colaborador('Maria', 'Silva');
const colaborador3 = new Colaborador('Pedro', 'Uchoa');

facebook.adicionarColaborador(colaborador1);
facebook.adicionarColaborador(colaborador2);
facebook.adicionarColaborador(colaborador3);

console.log(facebook);
facebook.exibirColaboradores();

// OUTPUT:

/*
Empresa {
  colaboradores: [
    Colaborador { nome: 'João', sobrenome: 'Victor' },
    Colaborador { nome: 'Maria', sobrenome: 'Silva' },
    Colaborador { nome: 'Pedro', sobrenome: 'Uchoa' }
  ],
  nome: 'Facebook',
  cnpj: '11.111.111/0001-11'
}
============================================================
Empresa: Facebook
Colaborador { nome: 'João', sobrenome: 'Victor' }
Colaborador { nome: 'Maria', sobrenome: 'Silva' }
Colaborador { nome: 'Pedro', sobrenome: 'Uchoa' }
============================================================
*/
