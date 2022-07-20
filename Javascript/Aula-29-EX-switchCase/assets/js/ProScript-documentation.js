const titleDate = document.getElementById('title-date');
const date = new Date();
titleDate.innerHTML = date.toLocaleDateString('pt-BR', { dateStyle: 'full' });