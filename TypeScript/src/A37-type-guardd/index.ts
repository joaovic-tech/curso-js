export function add(a: unknown, b: unknown): string | number {
  return typeof a === 'number' && typeof b === 'number' ? a + b : `${a}${b}`;
}

console.log(add(1, 5));
console.log(add('1', '5'));

type Pessoa = { tipo: 'pessoa'; nome: string };
type Animal = { tipo: 'animal'; raca: string };
type PessoaOuAnimal = Pessoa | Animal;

export class Aluno implements Pessoa {
  constructor(public tipo: 'pessoa', public nome: string) {}
}

function mostraNome(obj: PessoaOuAnimal): void {
  // if ('nome' in obj) console.log(obj.nome);
  // if (obj instanceof Aluno) console.log(obj.nome);
  switch (obj.tipo) {
    case 'pessoa':
      console.log(obj.nome);
      break;
    case 'animal':
      console.log(obj.raca);
      break;
    default:
      break;
  }
}

const aluno10 = new Aluno('pessoa', 'João Victor');
const animalDoAluno10: Animal = { tipo: 'animal', raca: 'Amstaff' };
mostraNome(aluno10);
mostraNome(animalDoAluno10);
