const rand = (min = 0, max = 9) => Math.floor(Math.random() * (max - min) + min);
const generateUppercase = () => String.fromCharCode(rand(65, 90));
const generateLowercase = () => String.fromCharCode(rand(97, 122));
const generateNumber = () => String.fromCharCode(rand(48, 57));
const symbols = '!@#$%¨&;:/*-+?^~<>(){}[]';
const generateSymbol = () => symbols[rand(0, symbols.length)];

export default function generatePassword(amount = 20, numbers, lowerCases, upperCases, symbols) {
  const arrayPassword = [];
  amount = Number(amount);

  for (let i = 0; i < amount; i++) {
    // Avaliação de conto circuito
    upperCases && arrayPassword.push(generateUppercase());
    lowerCases && arrayPassword.push(generateLowercase());
    numbers && arrayPassword.push(generateNumber());
    symbols && arrayPassword.push(generateSymbol());
  }

  return arrayPassword.join('').slice(0, amount);
}
