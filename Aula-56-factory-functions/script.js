// Factory function (Função fábrica)
function criaPessoa(nome, sobrenome, altura, peso) {
  return {
    nome,
    sobrenome,

    // Getter - usado para quando se objetem um único valor
    get nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`
    },

    // Setter - usado para executar uma função sempre que se tenta mudar uma propriedade específica.
    set nomeCompleto(valor) {
      valor = valor.split(' ');
      this.nome = valor.shift();
      this.sobrenome = valor.join(' ');
    },

    fala: function (assunto = 'nada...') {
      return `${this.nome} está falando sobre ${assunto}`;
    },

    altura,
    peso,
    
    get calcImc() {
      const imc = this.peso / (this.altura ** 2);
      return imc.toFixed(2);
    }
  };
}

const pessoa1 = criaPessoa('João', 'Victor', 1.70, 72);
console.log(pessoa1.calcImc);
