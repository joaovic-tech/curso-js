// fetch('./assets/json/pessoas.json')
//   .then(resposta => resposta.json())
//   .then(json => mostrarPessoas(json))

axios('./assets/json/pessoas.json')
  .then(resposta => mostrarPessoas(resposta.data))

function mostrarPessoas(json) {
  const table = document.createElement('table');

  for (let pessoa of json) {
    const tr = document.createElement('tr');
    let td = document.createElement('td');
    td.innerHTML = pessoa.nome;
    tr.appendChild(td);

    td = document.createElement('td');
    td.innerHTML = pessoa.idade;
    tr.appendChild(td);

    table.appendChild(tr);
  }

  const resultado = document.querySelector('.resultado');
  resultado.appendChild(table);
}