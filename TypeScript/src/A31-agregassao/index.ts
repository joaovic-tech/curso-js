export class CarrinhoDeCompras {
  private readonly produtos: Produto[] = [];

  inserirProdutos(...produtos: Produto[]) {
    for (const produto of produtos) {
      this.produtos.push(produto);
    }
  }

  removerProduto(produto: Produto): void {
    const index = this.produtos.indexOf(produto);
    if (index > -1) {
      console.log(`\nRemovendo o produto: ${produto.nome}`);
      this.produtos.splice(index, 1);
    }
  }

  quantidadeDeProduto(): number {
    return this.produtos.length;
  }

  valorTotal(): number {
    return this.produtos.reduce((soma, produto) => soma + produto.preco, 0);
  }

  info(): void {
    console.log(`\nQuantidade de produtos no carrinho: ${this.quantidadeDeProduto()} produtos`);
    console.log(`Valor total de produtos no carrinho: R$ ${this.valorTotal().toFixed(2)}`);
  }
}

export class Produto {
  constructor(public nome: string, public preco: number) {}
}

const carrinhoDeCompras = new CarrinhoDeCompras();

const produto1 = new Produto('Camiseta', 49.99);
const produto2 = new Produto('Caneca', 1.99);
const produto3 = new Produto('Carrinho de brinquedo', 149.99);
const produto4 = new Produto('Caneta', 0.9);

carrinhoDeCompras.inserirProdutos(produto1);
carrinhoDeCompras.inserirProdutos(produto2);
carrinhoDeCompras.inserirProdutos(produto3);
carrinhoDeCompras.inserirProdutos(produto4);

carrinhoDeCompras.info();

carrinhoDeCompras.removerProduto(produto2);

carrinhoDeCompras.info();
