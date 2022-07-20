/*
Object.values
Object.entries
Object.getOwnPropertyDescriptor(o, 'prop')
Object.assign(des, any)
... (spread) espalha os valor do objeto e copiar os valor de um para outro

// Já vimos
Object.keys (retorna as chaves)
Object.freeze (congela o objeto)
Object.defineProperties (define várias propriedades)
Object.defineProperty (define uma propriedade)
*/
const produto = { nome: 'Caneca', preco: 1.8 };
Object.defineProperty(produto, 'nome', {
  value: 'Camisa',
  writable: false,
  configurable: false
});
console.log(Object.getOwnPropertyDescriptor(produto, 'nome')); // retorna as defineProperty
console.log(produto);
console.log(Object.values(produto)); // valor das chaves
console.log(Object.entries(produto)); // transforma cada chave em array

for (let [chave, valor] of Object.entries(produto)) {
  console.log(chave, valor);
}
