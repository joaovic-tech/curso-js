interface Constructor {
  new (...args: any[]): any;
}

function invertNameAndColor(param1: string, param2: string) {
  // Closure
  return function (target: Constructor) {
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
        return `${value.split('').reverse().join('')} ${param1} ${param2}`;
      }
    };
  };
}

function otherDecorator(...args: string[]) {
  return function (target: Constructor) {
    console.log('Sou o otherDecorator', ...args);
  };
}

@otherDecorator('Arg1', 'Arg2')
@invertNameAndColor('valor1', 'valor2')
export class Animal {
  constructor(public name: string, public color: string) {
    console.log('Sou a classe');
  }
}

const animal = new Animal('João', 'blue');
console.log(animal);
