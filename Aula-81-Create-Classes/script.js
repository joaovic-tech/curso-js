// A class no JavaScript é a mesma coisa da constructor function
// constructor serve para passarmos parâmetros para essa class
class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }

  falar() {
    console.log(`${this.nome} está falando.`);
  }
}
const p1 = new Pessoa('João', 'Victor');

console.log(p1);

// constructor function

function Pessoa2(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
}

Pessoa2.prototype.falar = function () {
  console.log(`${this.nome} está falando.`);
}
const p2 = new Pessoa2('João', 'Victor');

console.log(p2);
