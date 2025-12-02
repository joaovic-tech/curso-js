let x;
if (typeof x === 'undefined') x = 20;
console.log(x * 2); // 40

export function createPerson(
  firstName: string,
  lastName?: string,
): {
  firstName: string;
  lastName?: string;
} {
  return {
    firstName,
    lastName,
  };
}

const people = createPerson('João');
console.log(people); // { firstName: 'João', lastName: undefined }

export function squareOf(x: any): number | null {
  if (typeof x === 'number') return x * x;
  return null;
}

const squareOfTwoString = squareOf('2');

if (squareOfTwoString === null) {
  console.log('Conta inválida'); // Conta inválida
} else {
  console.log(squareOfTwoString * 100); // 400
}
