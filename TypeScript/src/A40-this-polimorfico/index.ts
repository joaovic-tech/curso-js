export class Calc {
  constructor(public number: number) {}

  add(n: number): this {
    this.number += n;
    return this;
  }

  sub(n: number): this {
    this.number -= n;
    return this;
  }

  div(n: number): this {
    this.number /= n;
    return this;
  }

  mul(n: number): this {
    this.number *= n;
    return this;
  }
}

export class SubCalc extends Calc {
  pow(n: number): this {
    this.number **= n;
    return this;
  }
}

const calc = new SubCalc(10);
calc.add(5).mul(2).sub(4).pow(2);
console.log(calc);

// Builder - GoF Design Pattern
// O padrão Builder separa a construção de um objeto complexo da sua representação.
// Ele permite criar diferentes representações de um objeto usando o mesmo código de construção.
// É frequentemente usado para construir objetos complexos passo a passo.
export class RequestBuilder {
  private method: 'get' | 'post' | null = null;
  private url: string | null = null;

  setMethod(method: 'get' | 'post'): this {
    this.method = method;
    return this;
  }

  setUrl(url: string): this {
    this.url = url;
    return this;
  }

  send(): void {
    console.log(`Enviando dados via "${this.method}" para ${this.url}`);
  }
}

const request = new RequestBuilder(); // Builder
request.setUrl('https://www.google.com').setMethod('post').send();
