// Array<T> - T[]
export function multiplyArgs(...args: Array<number>): number {
  return args.reduce((acc, value) => acc * value, 1);
}

export function sumString(...args: string[]): string {
  return args.reduce((acc, value) => acc + value);
}

export function toUpperCase(...args: string[]): string[] {
  return args.map((value) => value.toUpperCase());
}

const resultMultiply = multiplyArgs(6, 2, 2) - 3;
const resultString = sumString('joaovic', '-', 'tech');
const resultUpperCase = toUpperCase(resultString, resultMultiply.toString());

console.log(resultUpperCase); // [ 'JOAOVIC-TECH', '21' ]
