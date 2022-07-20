// defineProperty - defineProperties

function Produto(nome, preco, estoque) {
  Object.defineProperty(this, 'estoque', {
    enumerable: true, // exibi a chave(estoque)
    // value: function() { Posso criar uma function também e para exibir -> p1.estoque()
    //   return estoque; irar retorna o valor da chave
    // },
    value: estoque, // valor da chave
    writable: false, // define se pode ser alterado
    configurable: true, // define se pode reconfigurar
  });
  // esse configurable para eu reconfigurar
  // a chave posso criar outro Object.defineProperty...

  // usando o defineProperties
  Object.defineProperties(this, {
    nome: {
      enumerable: true,
      value: nome,
      writable: true,
      configurable: true
    },
    preco: {
      enumerable: true,
      value: preco,
      writable: true,
      configurable: true
    }
  });
}

const p1 = new Produto('Camisa', 20, 3);
console.log(Object.keys(p1)) // mostrar só as chaves

for (let chave in p1) {
  console.log(chave)
}
