/* Dica: 
  Se tiver um método dentro de uma classe que
  não esteja utilizando o this então transforme esse método
  em static igual o método geraDigito()
  e para utiliza-lo basta colocar o nome da class
  veja no método geraNovoCpf()
*/

// 1º CPF 705.484.450-52 
// 2º CPF 070.987.720-03

class ValidaCpf {
  constructor(cpfEnviado) {
    Object.defineProperty(this, 'cpfLimpo', {
      writable: false,
      enumerable: true,
      configurable: false,
      value: cpfEnviado.replace(/\D+/g, '')
    });
  }

  isSequencia() {
    return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo;
  }

  geraNovoCpf() {
    const cpfSemDigitos = this.cpfLimpo.slice(0, -2);
    const digito1 = ValidaCpf.geraDigito(cpfSemDigitos);
    const digito2 = ValidaCpf.geraDigito(cpfSemDigitos + digito1);

    const novoCpf = cpfSemDigitos + digito1 + digito2;
    return novoCpf === this.cpfLimpo;
  }

  static geraDigito(cpfSemDigitos) {
    const cpfArray = Array.from(cpfSemDigitos);
    let regressivo = cpfArray.length + 1;

    const total = cpfArray.reduce((ac, val) => {
      ac += (regressivo * Number(val));
      regressivo--;
      return ac;
    }, 0);

    const digito = 11 - (total % 11);
    return digito > 9 ? '0' : String(digito);
  }

  valida() {
    if (!this.cpfLimpo) return false;
    if (typeof this.cpfLimpo !== 'string') return false;
    if (this.cpfLimpo.length !== 11) return false;
    if (this.isSequencia()) return false;
    if (!this.geraNovoCpf()) return false;

    return true;
  }
}

const cpf1 = new ValidaCpf('070.987.720-03');
const cpf2 = new ValidaCpf('999.999.999-99');

if (cpf1.valida()) {
  console.log('cpf válido.');
} else {
  console.log('cpf inválido.')
}
