/* eslint-disable @typescript-eslint/no-namespace */
namespace MyNamespace {
  export class PersonNamespace {
    constructor(public name: string) {}
  }

  const personNamespace = new PersonNamespace('João');
  console.log(personNamespace);

  // podemos criar namespaces também dentro de namespaces

  export namespace otherNamespace {
    export const person = new PersonNamespace('Ana');
  }
}

const person1 = new MyNamespace.PersonNamespace('Maria');
