// tuple
const dadosCliente1: [number, string] = [1, 'joaovic'];
const dadosCliente2: [number, string] = [2, 'maria'];
console.log(dadosCliente1);
console.log(dadosCliente2);

// readonly
const dadosCliente3: readonly [number, string, ...string[]] = [3, 'joao', 'maria'];
const dadosCliente4: ReadonlyArray<string> = ['joao', 'maria'];

// dadosCliente3[0] = 1; // Erro: Cannot assign to '0' because it is a read-only property

console.log(dadosCliente3);
console.log(dadosCliente4);
