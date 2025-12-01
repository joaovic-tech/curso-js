const objectA: {
  readonly keyA: string;
  keyB: string;
  [key: string]: string; // index signature (permite adicionar mais propriedades)
} = {
  keyA: 'Value A',
  keyB: 'Value B',
};

console.log(objectA); // { keyA: 'Value A', keyB: 'Value B' }

// objectA.keyA = 'Updated Value A'; // Error
objectA.keyC = 'Value C';

console.log(objectA); // { keyA: 'Value A', keyB: 'Value B', keyC: 'Value C' }
