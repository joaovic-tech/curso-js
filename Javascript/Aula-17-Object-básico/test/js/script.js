const button = document.getElementById('button');
const nome = document.getElementById('nome');
const sobrenome = document.getElementById('sobrenome');
const idade = document.getElementById('idade');
const pessoas = document.getElementById('pessoas');

button.addEventListener('click', (e) => {
  e.preventDefault();
  pessoas.innerHTML += `<p>Nome: ${nome.value}</p>`;
  pessoas.innerHTML += `<p>Sobrenome: ${sobrenome.value}</p>`;
  pessoas.innerHTML += `<p>Idade: ${idade.value}</p>`;
  pessoas.innerHTML += `<hr>`;
});