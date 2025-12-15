function decorator(classPrototype: any, name: string | symbol): any {
  let propertyValue: any;
  return {
    get: () => propertyValue,
    set: (value: any) => {
      if (typeof value === 'string') {
        propertyValue = value.split('').reverse().join('');
        return;
      }
      propertyValue = value;
    },
  };
}

export class Person {
  @decorator
  name: string;
  lastName: string;
  age: number;

  constructor(name: string, lastName: string, age: number) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
  }

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
