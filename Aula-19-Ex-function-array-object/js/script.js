function meuEscopo() {
  const form = document.querySelector('.form');
  const resultado = document.querySelector('.resultado');
  const pessoas = [];
  
  function recebeEventoForm(evento) {
    evento.preventDefault();
    
    const nome = form.querySelector('.nome').value;
    const sobrenome = form.querySelector('.sobrenome').value;
    const peso = form.querySelector('.peso').value;
    const altura = form.querySelector('.altura').value;

    pessoas.push({nome, sobrenome, peso, altura});
    
    console.log(pessoas);
    resultado.innerHTML += `<p>Nome: ${nome}</p>`;
    resultado.innerHTML += `<p>Sobrenome: ${sobrenome}</p>`;
    resultado.innerHTML += `<p>Peso: ${peso}</p>`;
    resultado.innerHTML += `<p>Altura: ${altura}</p>`;
    resultado.innerHTML += `<hr>`;

  }

  form.addEventListener('submit', recebeEventoForm);
}
meuEscopo();