import { Colors } from '../A09-type-enum';

// Type Alias -> Alias de tipo exemplo de uso:
type TColors = {
  name: Colors;
  code: number;
};

type Car = {
  name: string;
  year: number;
  color: TColors;
};

const fusca: Car = {
  name: 'Fusca',
  year: 1969,
  color: {
    name: Colors.AZUL,
    code: 123,
  },
};

const gol: Car = {
  name: 'Gol',
  year: 2022,
  color: {
    name: Colors.AZUL,
    code: 123,
  },
};

console.log(gol);
console.log(fusca);
