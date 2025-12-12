export abstract class Personagem {
  protected abstract emoji: string;

  constructor(
    protected name: string,
    protected ataque: number,
    protected vida: number,
  ) {}

  atacar(personagem: Personagem): void {
    if (this === personagem) return;
    this.bordao();
    console.log(`${this.emoji} => ${personagem.emoji}`);
    personagem.perderVida(this.ataque);
  }

  private perderVida(forcaAtaque: number): void {
    if (this.vida <= 0) return console.log(`${this.name} está morto`);

    this.vida -= forcaAtaque;
    console.log(`${this.name} agora tem ${this.vida} de vida...`);
  }

  abstract bordao(): void;
}

export class Guerreira extends Personagem {
  protected emoji = '\u{1F9DD}';

  bordao(): void {
    console.log();
    console.log(
      `${this.emoji}: Eu sou a guerra em pessoa, atacaaaaaaaaaaaaaaaaar!!!`,
    );
  }
}
export class Monstro extends Personagem {
  protected emoji = '\u{1F9DF}';

  bordao(): void {
    console.log();
    console.log(`${this.emoji}: ARRRRRRRRRRRRRRRRRRRRRRRRRR!!!`);
  }
}

const guerreira = new Guerreira('Guerreira', 50, 110);
const monstro = new Monstro('Monstro', 30, 100);

guerreira.atacar(monstro);
guerreira.atacar(monstro);

monstro.atacar(guerreira);
monstro.atacar(guerreira);
monstro.atacar(guerreira);

guerreira.atacar(monstro);
