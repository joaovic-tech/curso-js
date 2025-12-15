function invertNameAndColor<T extends new (...args: any[]) => any>(
  target: T,
): T {
  console.log('Decorator:', target);

  return class extends target {
    color: string;
    name: string;

    constructor(...args: any[]) {
      super(...args);
      this.color = this.invert(args[0]);
      this.name = this.invert(args[1]);
    }

    public invert(value: string): string {
      return value.split('').reverse().join('');
    }
  };
}

@invertNameAndColor
export class Animal {
  constructor(public name: string, public color: string) {
    console.log('Sou a classe');
  }
}

// const animal = new Animal('João', 'blue');
// console.log(animal);
