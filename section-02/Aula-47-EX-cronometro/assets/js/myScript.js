const relogio = document.getElementById('relogio');
const iniciar = document.getElementById('iniciar');
const pausar = document.getElementById('pausar');
const zerar = document.getElementById('zerar');

let hours = 0;
let minutes = 09;
let seconds = 0;

function zeroAEsquerda(num) {
  return num >= 10 ? num : `0${num}`
}

function startTimer() {
  seconds = Number(seconds);
  minutes = Number(minutes);
  hours = Number(hours);

  if (seconds === 60) {
    seconds = `0${1}`;
    minutes += 1;
  } else {
    seconds += 1;
    seconds = zeroAEsquerda(seconds);
  }

  if (minutes >= 60) {
    minutes = `0${0}`;
    hours += 1;
  } else {
    minutes = zeroAEsquerda(minutes);
  }

  if (hours >= 60) {
    hours = `0${0}`;
  } else {
    hours = zeroAEsquerda(hours);
  }

  relogio.innerHTML = `${hours}:${minutes}:${seconds}`;
}

iniciar.addEventListener('click', function(event) {
    relogio.style.color = 'black';
    control = setInterval(startTimer, 1000);
});

pausar.addEventListener('click', function(event) {
    clearInterval(control);
    relogio.style.color = 'red';
});

zerar.addEventListener('click', function(event) {
    relogio.style.color = 'black';
    relogio.innerHTML = '00:00:00';
    clearInterval(control);
});