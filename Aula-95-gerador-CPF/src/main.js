import GeraCPF from './models/GeraCPF';
import './assets/css/style.css';

const form = document.querySelector('form');

form.addEventListener('submit', e => {
  e.preventDefault();
  const inputGera = document.getElementById('cpf-gerado');
  const gera = new GeraCPF();
  inputGera.value = gera.geraNovoCPF();
});
