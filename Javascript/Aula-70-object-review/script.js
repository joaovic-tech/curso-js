// Literal
const pessoa = {
  nome: 'João',
  sobrenome: 'Alves'
};

// console.log(pessoa.nome);
// console.log(pessoa['nome']);

const chave = 'nome';
// console.log(pessoa[chave]);

// Construtor
const pessoa1 = new Object();
pessoa1.nome = 'João';
pessoa1.sobrenome = 'Alves';
pessoa1.idade = 18;
pessoa1.falaNome = function () {
  return `${this.nome} está falando seu nome.`;
};
pessoa1.getDataNascimento = function () {
  const dataAtual = new Date();
  return dataAtual.getFullYear() - this.idade;
};

for (const chave in pessoa1) {
  // console.log({ chave });
}

// Factory functions / Constructor functions
// essas duas eu posso escolher
// qual vai ser melhor de trabalhar em meu projeto

// Factory functions
function criaPessoa(nome, sobrenome) {
  return {
    nome,
    sobrenome,
    nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`;
    }
  };
}

const p1 = criaPessoa('João', 'Alves');
// console.log(p1.nomeCompleto());

// Constructor functions
function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  Object.freeze(this);
}
// O Object.freeze(Pessoa) serve para bloquear o objeto para não ser alterado

// new criar um novo objeto e 
// junta a palava this na funções onde ele é chamado 
// Exemplo 
// com o new -> this.nome
// Sem o new -> p2.nome
const p2 = new Pessoa('João', 'Miranda');
delete p2.nome
const p3 = new Pessoa('Maria', 'Eduarda');

console.log(p2);
console.log(p3);

