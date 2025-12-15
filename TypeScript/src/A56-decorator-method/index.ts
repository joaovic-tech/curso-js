function decorator(
  classPrototype: any,
  methodName: string,
  descriptor: PropertyDescriptor,
): PropertyDescriptor {
  console.log(classPrototype);
  console.log(methodName);
  console.log(descriptor);
  return {
    value: function (...args: string[]) {
      return args[0];
    },
  };
}

export class Person {
  name: string;
  lastName: string;
  age: number;

  constructor(name: string, lastName: string, age: number) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
  }

  @decorator
  method(msg: string): string {
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
