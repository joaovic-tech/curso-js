function Produto(nome, preco) {
  this.nome = nome;
  this.preco = preco;
}

Produto.prototype.desconto = function (percentual) {
  this.preco = this.preco - (this.preco * (percentual / 100));
};

Produto.prototype.aumento = function (percentual) {
  this.preco = this.preco + (this.preco * (percentual / 100));
};

// 3 formas de criar um produto

const p1 = new Produto('Camiseta', 50);

// Literal
const p2 = {
  nome: 'Caneca',
  preco: 15
}

Object.setPrototypeOf(p2, Produto.prototype);

p2.aumento(10);

console.log(p1);
console.log(p2);

const p3 = Object.create(Produto.prototype, {
  nome: {
    enumerable: true,
    value: 'Sapato'
  },
  preco: {
    enumerable: true,
    value: 99,
    writable: true,
    configurable: true
  },
  tamanho: {
    enumerable: true,
    value: 42,
    writable: true,
    configurable: true
  },
});
p3.aumento(10);
console.log(p3)
