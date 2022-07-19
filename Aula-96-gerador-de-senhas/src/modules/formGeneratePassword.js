import generatePassword from './generators';
const form = document.querySelector('form');
const result = document.getElementById('result');
const characterAmount = document.getElementById('character-amount');
const inputNum = document.getElementById('input-num');
const uppercaseLetter = document.getElementById('uppercase-letter');
const lowercaseLetter = document.getElementById('lowercase-letter');
const inputSymbol = document.getElementById('input-symbol');

export default () => {
  form.addEventListener('submit', e => {
    e.preventDefault();
    result.innerHTML = generate();
  });
}

function generate() {
  const password = generatePassword(
    characterAmount.value,
    inputNum.checked,
    uppercaseLetter.checked,
    lowercaseLetter.checked,
    inputSymbol.checked
  );
  return password || 'Nada selecionado.';
}