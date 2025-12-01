/* eslint-disable */

// Tipo básicos (ocorre inferência de tipos) seria redundante para o TypeScript
let user: string = 'João';
let age: number = 21; // || 2.3 || -2.2, 0xf00d
let adult: boolean = true;
let simbol: symbol = Symbol('qualquer-simbolo');
// let big: bigint = 10n;

// Arrays
let arrayNumber: Array<number> = [1, 2, 3];
let arrayString: Array<string> = ['a', 'b', 'c'];
let arrayNS: Array<number | string> = [1, 'a', 2, 'b', 3];

// Objetos

let person: { name: string; age: number; adult?: boolean } = {
  name: 'João',
  age: 21,
  adult: true
};

function sum(a: number, b: number): number {
  return a + b;
}
const result = sum(1, 2);
