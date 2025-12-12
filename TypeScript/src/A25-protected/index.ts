export class Colaborador {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,
  ) {}
}

export class Empresa {
  public readonly nome: string;
  protected readonly colaboradores: Colaborador[] = []; // acessível apenas dentro da classe e nas subclasses
  private readonly cnpj: string;

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

  getNome(): string {
    return this.nome;
  }
}

export class Udemy extends Empresa {
  constructor() {
    super('Udemy', '11.111.111/0001-11');
  }

  popColaborador(): Colaborador | null {
    const colaborador = this.colaboradores.pop();
    if (colaborador) {
      return colaborador;
    }
    return null;
  }
}

const udemy = new Udemy();
const colaborador1 = new Colaborador('João', 'Victor');
const colaborador2 = new Colaborador('Maria', 'Silva');
const colaborador3 = new Colaborador('Pedro', 'Uchoa');

udemy.adicionarColaborador(colaborador1);
udemy.adicionarColaborador(colaborador2);
udemy.adicionarColaborador(colaborador3);

const colaboradorRemovido = udemy.popColaborador();
console.log('Colaborador removido:', colaboradorRemovido);
console.log(udemy);
