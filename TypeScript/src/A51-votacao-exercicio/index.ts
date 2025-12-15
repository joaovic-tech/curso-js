type Option = {
  name: string;
  point: number;
};

type Voting = {
  question: string;
  options: Option[];
};

export class VotingManager {
  constructor(private voting: Voting) {
    // garante que os pontos iniciam com 0 (para evitar lulismo)
    this.voting.options.map((value) => (value.point = 0));
  }

  show(): void {
    console.log(`\n${this.voting.question}`);

    this.voting.options.map((option) => {
      console.log(option.name, option.point);
    });
  }

  addVote(n: number): void {
    const option = this.voting.options[n];
    if (!option)
      return console.log(`Voto Cancelado: Candidato ${n} não encontrado`);

    option.point++;
  }
}

const voting1: Voting = {
  question: 'Qual sua linguagem de programação favorita?',
  options: [
    { name: 'Python', point: 99 },
    { name: 'Java', point: 0 },
    { name: 'Javascript', point: 0 },
    { name: 'Typescript', point: 0 },
  ],
};

const votingManager1 = new VotingManager(voting1);
votingManager1.addVote(2);
votingManager1.addVote(1);
votingManager1.addVote(3);
votingManager1.addVote(3);
votingManager1.addVote(3);
votingManager1.addVote(3);
votingManager1.addVote(4); // Voto Cancelado: Candidato 5 não encontrado
votingManager1.show();

const voting2: Voting = {
  question: 'Qual sua cor preferida?',
  options: [
    { name: 'Verde', point: 0 },
    { name: 'Amarelo', point: 0 },
    { name: 'Azul', point: 0 },
    { name: 'Roxo', point: 0 },
    { name: 'Vermelho', point: 0 },
  ],
};
const votingManager2 = new VotingManager(voting2);
votingManager2.addVote(2);
votingManager2.show();
