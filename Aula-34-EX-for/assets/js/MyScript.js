const elements = [
  {tag: 'p', texto: 'Tag <p> : Frase 1'},
  {tag: 'div', texto: 'Tag <div> : Frase 2'},
  {tag: 'footer', texto: 'Tag <footer> : Frase 3'},
  {tag: 'section', texto: 'Tag <section> : Frase 4'}
];

const container = document.querySelector('.container');
const divMain = document.createElement('div');

for(element of elements){
  const { tag, texto } = element // desestruturando
  const createTag = document.createElement(tag);
  createTag.innerText = texto;
  divMain.appendChild(createTag);
}

container.appendChild(divMain);
