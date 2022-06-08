// for clássico - Geralmente com iteráveis (array ou strings)
// for in - Retorna o índice ou chave (string, array ou objetos)
// for of - Retorna o valor em si (iteráveis, arrays ou strings)
const nomes = ['João', 'Victor', 'Maria'];

for(let i =0; i < nomes.length; i++){
  console.log(nomes[i]);
}

console.log('------------------------------');

for(let i in nomes){
  console.log(nomes[i]);
}

console.log('------------------------------');

for(let valor of nomes){
  console.log(valor);
}

console.log('------------------------------');

nomes.forEach(function(valor, indice, array) {
  console.log(indice, valor, array);
});

const pessoa = [{
  nome: 'João',
  sobrenome: 'Alves'
}];

for(let key of pessoa) {
  console.log(key);
}