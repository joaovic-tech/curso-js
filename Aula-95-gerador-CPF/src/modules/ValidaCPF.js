// 2º CPF 070.987.720-03
export default class ValidaCpf {
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
