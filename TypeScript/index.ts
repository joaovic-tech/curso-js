interface ISerie {
  sala: "A" | "B" | "C" | "D" | "E";
  ano: number;
}

interface IAluno {
  nome: string;
  serie: ISerie;
  notas: number[];
}

class Aluno implements IAluno {
  nome: string;
  serie: ISerie;
  notas: number[];

  constructor(nome: string, serie: ISerie, notas: number[]) {
    this.nome = nome;
    this.serie = serie;
    this.notas = notas;
  }

  media() {
    const soma = this.notas.reduce((acumulador, nota) => acumulador + nota, 0);
    return soma / this.notas.length;
  }

  situacao() {
    const media = this.media();
    if (this.notas.length < 3) { 
      return 'Faltam notas';
    } else if (media >= 7) {
      return 'Aprovado';
    } else {
      return 'Reprovado';
    }
  }

  exibirInformacoes() {
    console.log(`
      Nome: ${this.nome}
      Série: ${this.serie.sala} - Ano: ${this.serie.ano}
      Notas: ${this.notas.join(', ')}
      Média: ${this.media()}
      Situação: ${this.situacao()}
    `);
  }
}

const alunoJoao = new Aluno('João', { sala: 'A', ano: 8 }, [10, 10, 10]); // Nota: 10 - Aprovado
const alunoMaria = new Aluno('Maria', { sala: 'A', ano: 8 }, [5, 6]); // Nota: 6 - Faltam notas
const alunoDiana = new Aluno('Diana', { sala: 'C', ano: 8 }, [4, 6, 6]); // Nota: 5 - Reprovado

alunoJoao.exibirInformacoes();
alunoMaria.exibirInformacoes();
alunoDiana.exibirInformacoes();

