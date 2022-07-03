/* 
  Escreva uma função chamada ePaisagem que
  recebe dois argumentos, largura e altura
  de uma imagem (number).
  Retorne true se a imagem estiver no modo
  paisagem.
*/

const ePaisagem = (largura, altura) => largura > altura
  ? 'A imagem está no modo paisagem'
  : 'A imagem está no modo retrato';

console.log(ePaisagem(1920, 1080));
