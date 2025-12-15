export type colorsAnimal = 'blue' | 'red' | 'orange' | 'green' | 'yellow';

@decorator
export class Animal {
  constructor(public color?: colorsAnimal) {}
}

function decorator<T extends new (...args: any[]) => any>(target: T): T {
  return class extends target {
    color: string;

    constructor(...args: any[]) {
      super(...args);
      this.color = args[0] ? this.invert(args[0]) : this.invert('rose');
    }

    public invert(value: string): string {
      return value.split('').reverse().join('');
    }
  };
}

const animal = new Animal('blue');
console.log(animal);
