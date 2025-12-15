function decorator(
  classPrototype: any,
  methodName: string | symbol,
  index: number,
): any {
  console.log(classPrototype);
  console.log(methodName);
  console.log(index);
}

export class Person {
  constructor(
    public name: string,
    public lastName: string,
    public age: number,
  ) {}

  method(@decorator msg: string): string {
    return `${this.name} ${this.lastName}: ${msg}`;
  }

  public get fullName(): string {
    return `${this.name} ${this.lastName}`;
  }

  public set fullName(v: string) {
    const word = v.split(/\s+/g);
    const firstName = word.shift();
    if (!firstName) return;
    this.name = firstName;
    this.lastName = word.join(' ');
  }
}

const person = new Person('João', 'Alves', 21);
const method = person.method('Olá pessoa');
console.log(method);
