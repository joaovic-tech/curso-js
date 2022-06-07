const pessoa = {
  nome: 'João',
  sobrenome: 'Alves',
  idade: 18,
  endereco:{
    rua: 'Av Brasil',
    numero: 320
  }
};
// ATRIBUIÇÃO VIA DESESTRUTURAÇÃO
const { 
  nome: n = '',
  sobrenome,
  idade, 
  carro = 'Não possui carro', // valor default caso não exista
  endereco,
  endereco: { rua: r = 12345, numero } // desestruturando o endereço e atribuindo um valor default na rua
} = pessoa;
console.log(n, sobrenome, idade, carro, r, numero, endereco);

const {nome, ...resto } = pessoa;
console.log(resto);
