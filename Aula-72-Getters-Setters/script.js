// Getter -> Obtém o valor
// Setter -> Setar o valor
// não posso chamar um this.algumaCoisa pois se não vai gerar um loop
// que será chamada a função e a função irar chamar o this...

function Produto(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;

  let estoquePrivado = estoque;

  Object.defineProperty(this, 'estoque', {
    enumerable: true,
    configurable: true,
    get: () => { return estoque },
    set: function (valor) {
      if (typeof valor !== 'number') {
        throw new TypeError('Error')
      }
      estoquePrivado = valor;
    }
  });
}

function criarProduto(nome) {
  return {
    get nome() {
      return nome;
    },
    set nome(valor) {
      valor = valor.replace('coisa.', '');
      nome = valor;
    }
  }
}

const p1 = new Produto('Camisa', 20, 3);
p1.estoque = 'asdasd';
console.log(p1.estoque);
const p2 = criarProduto('Calça');
p2.nome = 'Qualquer coisa.';
console.log(p2.nome)
