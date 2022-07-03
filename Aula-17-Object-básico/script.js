// Ciando objeto
const pessoas = {
  nome: 'João',
  sobrenome: 'Victor',
  idade: 18,
  fala() {
    console.log(`A minha idade atual é ${this.idade}.`);
  },
  incrementaIdade() {
    this.idade++;
  }
}

pessoas.fala();
pessoas.incrementaIdade();

// Criando um objeto através de uma function 
function criaPessoa(nome, sobrenome, idade) {
  return { nome, sobrenome, idade, };
}

const pessoa1 = criaPessoa('João', 'Victor', 18);
const pessoa2 = criaPessoa('Luiz', 'Miranda', 34);
const pessoa3 = criaPessoa('Maria', 'Oliveira', 22);
const pessoa4 = criaPessoa('Junior', 'Silva', 45);
const pessoa5 = criaPessoa('Jean', 'Otávio', 25);

console.log(pessoa1.nome, pessoa2.nome, pessoa3.nome, pessoa4.nome, pessoa5.nome);