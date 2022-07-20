function teste() {
  console.log('Este é meu teste');
}

class ControleRemoto {
  constructor(tv) {
    this.tv = tv;
    this.volume = 0;
    teste(); // podemos também colocar function que estão fora da class
  }

  // Método de instância são os métodos 
  // que todas as instancias podem utilizar
  aumentarVolume() {
    this.volume += 2;
  }
  diminuirVolume() {
    this.volume -= 2;
  }

  // Método estático são os métodos 
  // que será implementado na própria classe 
  // para realizar por exemplo funções/métodos em todos os
  // componentes da quela class/

  // os métodos estático não possuem acesso a variáveis que não estão  dentro do seu escopo
  static soma(x, y) {
    return x + y;
  }
}

const controle1 = new ControleRemoto('LG');
controle1.aumentarVolume();
controle1.diminuirVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();
console.log(controle1);

console.log(ControleRemoto.soma(2, 4));
