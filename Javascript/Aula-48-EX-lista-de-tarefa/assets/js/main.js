const inputTarefa = document.getElementById('input-tarefa');
const btnTarefa = document.getElementById('btn-tarefa');
const tarefas = document.getElementById('tarefas');

function criarLi() {
  const li = document.createElement('li');
  return li
}

function criaTarefa(textInput) {
  const li = criarLi();
  li.innerText = textInput;
  tarefas.appendChild(li);
  limpaInput();
  criarBtnApagar(li);
  salvarTarefas();
}

function limpaInput() {
  inputTarefa.value = '';
  inputTarefa.focus();
}

function criarBtnApagar(li) {
  li.innerText += ' ';
  const btnApagar = document.createElement('button');
  btnApagar.innerText = 'Apagar';
  btnApagar.setAttribute('class', 'apagar');
  btnApagar.setAttribute('tile', 'apagar está tarefa');
  li.appendChild(btnApagar);
}

function salvarTarefas() {
  const liTarefas = tarefas.querySelectorAll('li');
  const listaDeTarefas = [];

  for(let tarefa of liTarefas) {
    let tarefaTexto = tarefa.innerText;
    tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
    listaDeTarefas.push(tarefaTexto);
  }

  const tarefasJSON = JSON.stringify(listaDeTarefas);
  localStorage.setItem('tarefas', tarefasJSON);
}

function adicionaTarefasSalvas() {
  const tarefas = localStorage.getItem('tarefas');
  const listaDeTarefas = JSON.parse(tarefas);
  
  for(let tarefa of listaDeTarefas) {
    criaTarefa(tarefa);
  }
}
adicionaTarefasSalvas();

inputTarefa.addEventListener('keypress', function(e) {
  if(e.keyCode === 13) {
    if(!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
  }
});

btnTarefa.addEventListener('click', function() {
  if(!inputTarefa.value) return;
  criaTarefa(inputTarefa.value);
});

document.addEventListener('click', function(e) {
  const el = e.target;
  
  if(el.classList.contains('apagar')) {
    el.parentElement.remove();
    salvarTarefas()
  }
})