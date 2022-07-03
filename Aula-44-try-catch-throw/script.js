// tente executar esse bloco try se não conseguir execute o catch
// try {
//   console.log(bola)
// } catch (err) {
//   console.log('bola não existe');
//   console.log(` o erro foi: ${err}`);
// }

function somar(x, y) {
  if (typeof x !== 'number' || typeof y !== 'number') { // 2 maneias de capturar o erro
    // throw new Error('x e y precisam ser números.');
    throw('x e y precisam ser números.');
  }
  return x + y;
}

try {
  console.log(somar(1, 2));
  console.log(somar('1', 2));
} catch(err) {
  console.log(err)
  console.log('Aconteceu um probleminha vamos resolver em breve...')
}


/*
  Dica:
    1 - Não mostrar os erros no front e sim outra 
    solução se caso acontecer aquele erro.
*/