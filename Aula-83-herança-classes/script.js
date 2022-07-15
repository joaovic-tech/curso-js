class DispositivoEletronico {
  constructor(nome) {
    this.nome = nome;
    this.ligado = false;
  }

  ligar() {
    if (this.ligado) {
      console.log(`${this.nome} já está lidado.`);
      return;
    }

    this.ligado = true;
  }

  desligar() {
    if (!this.ligado) {
      console.log(`${this.nome} já está desligado.`);
      return;
    }

    this.ligado = false;
  }
}

/* 
Com isso a classe Smartphone herda tudo oque a classe do DispositivoEletronico tem */
class Smartphone extends DispositivoEletronico {
  constructor(nome, cor, modelo) {
    super(nome); // pega os parâmetro do constructor pai
    this.cor = cor;
    this.modelo = modelo;
  }
}

class Tablet extends DispositivoEletronico {
  constructor(nome, temWiFi) {
    super(nome);
    this.temWiFi = temWiFi;
  }

  ligar() {
    console.log('Olha, você alterou o método ligar.');
  }

  falaOi() { // método primado só para o Table
    console.log('Olá');
  }
}

const s1 = new Smartphone('Samsung', 'Preto', 'Galaxy S10');
console.log(s1);

const t1 = new Tablet('Ipad', true);
t1.falaOi();
t1.ligar();
t1.ligar();
console.log(t1.ligado); // Esse lidado só é possível por causa da herança 
// E essa herança é buscada assim => o javascript busca na própria class e não encontra busca no prototype também não encontra então ela vai encontrar no elemento (pai) no caso que foi herdado os seus atributos.

// !!!Dica: O recomendado é fazer herança de no máximo 3 vezes
// Por exemplo uma class que estende outra que estende outra que estende outra que estende outra...
// Nesse código a class Smartphone herda a class DispositivoEletronico e a class Table também isso é bom pois essa classe pode receber qualquer tipo de dispositivo. 
