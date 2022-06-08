const frutas = ['Pera', 'Maçã', 'Uva'];

for(let i in frutas){
  console.log(frutas[i]);
}

const pessoa = {
  nome: 'João',
  sobrenome: 'Victor',
  idade: 18
};

// Formas de pegar o nome de pessoa
console.log(pessoa.nome);
console.log(pessoa['nome']);

for(let key in pessoa) {
  console.log(key, pessoa[key]);
}