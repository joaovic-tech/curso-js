let x = 10; // eslint-disable-line
x = 0b1010;
const y = 10;
let a = 100 as const; // eslint-disable-line

export function escolhaCor(cor: 'Verde' | 'Amarelo' | 'Azul'): string {
  return cor;
}

const car = {
  name: 'Fusca' as const,
  color: escolhaCor('Verde'),
  code: x + y + a,
};

console.log(car);
