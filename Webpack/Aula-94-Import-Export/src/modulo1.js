export const nome = 'João';
export const sobrenome = 'Victor';
export const idade = 18;

export function soma(x, y) {
  return x + y;
}

export default class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }
}