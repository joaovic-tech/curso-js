export class Person<T, U> {
  constructor(public name: T, public age: U) {}
}

export class Stack<T> {
  private count = 0;
  private elements: { [k: number]: T } = {};

  public push(element: T): void {
    this.elements[this.count] = element;
    this.count++;
  }

  // methods pop remove o ultimo elemento de uma pilha
  public pop(): T | void {
    if (this.isEmpty()) return undefined;

    this.count--;
    const element = this.elements[this.count];
    delete this.elements[this.count];
    return element;
  }

  public isEmpty(): boolean {
    return this.count === 0;
  }

  length(): number {
    return this.count;
  }

  public showStack(): void {
    for (const element in this.elements) {
      console.log(this.elements[element]);
    }
  }
}

const stack = new Stack<string>();

if (stack.isEmpty()) {
  stack.push('Javascript');
  stack.push('Typescript');
  stack.push('Python');
  stack.push('Java');
  stack.push('C#');
  stack.push('Go');
  stack.push('Rust');
  stack.push('pit-bull');
}

// stack.push(0); // Argument of type 'number' is not assignable to parameter of type 'string'.

stack.pop();
stack.showStack();
