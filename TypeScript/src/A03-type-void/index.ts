function semRetorno(...args: string[]): void {
  console.log(args.join(', '));
}

export const person = {
  name: 'João',
  lastName: 'Victor',

  viewName(): void {
    console.log(`Nome: ${this.name} ${this.lastName}`);
  },
};

semRetorno(person.name, person.lastName);
person.viewName();
