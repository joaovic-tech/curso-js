const form = document.getElementById('form');

function calcularIMC(peso, altura){
  const imc = peso / altura ** 2;
  return imc.toFixed(2);
}

function createResult(msg, isValid){
  const result = document.getElementById('resultado');

  if(isValid){
    result.innerHTML = `<p class="result-pass">${msg}</p>`;
  } else {
    result.innerHTML = `<p class="result-erro">${msg}</p>`;
  }
}

function setTableIMC(imc){
  const level = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

  if (imc >= 39.9) return level[5];
  if (imc >= 34.9) return level[4];
  if (imc >= 29.9) return level[3];
  if (imc >= 24.9) return level[2];
  if (imc >= 18.5) return level[1];
  if (imc < 18.5) return level[0];
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const inputPeso = e.target.querySelector('#peso');
  const inputAltura = e.target.querySelector('#altura');

  const peso = Number(inputPeso.value);
  const altura = Number(inputAltura.value);

  if (!peso) {
    createResult('Calculo não realizado - Peso inválido.', false)
    return;
  }
  if (!altura) {
    createResult('Calculo não realizado - Altura inválida.', false);
    return;
  }

  const imc = calcularIMC(peso, altura);
  const levelIMC = setTableIMC(imc);
  const msg = `Seu IMC é ${imc} (${levelIMC}).`;
  createResult(msg, true);
});
