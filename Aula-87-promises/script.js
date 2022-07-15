/* 
Promise veio pra solucionar os problemas de callBack

Promise é um objeto usado para processamento assíncrono.
Um Promise (de "promessa") representa um valor que pode 
estar disponível agora, no futuro ou nunca.
*/

function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

// Resolve => Quando o código executar com sucesso irar resolver.
// Reject => Quando o código der erro irar rejeitar.

function stop(msg, time) {
  return new Promise((resolve, reject) => {
    if (typeof msg !== 'string') {
      reject(new TypeError(msg));
      return;
    };

    setTimeout(() => {
      resolve(msg);
    }, time);
  });
}

// Quando o resolve() for executado irar chamar esse then()
// Quando o reject() for executado irar chamar esse catch()
// Ambas pode receber functions
stop('Conectando API', rand(1, 3))
  .then(resposta => {
    console.log(resposta);
    return stop('Buscando dados da API', rand(1, 3));
  })
  .then(resposta => { // Mostra a Frase 2
    console.log(resposta);
    return stop(22222, rand(1, 3));
  })
  .then(resposta => {
    console.log(resposta);
  })
  .then(() => {
    console.log('Exibir os dados na tela')
  })
  .catch(e => {
    console.log('Erro:', e)
  });

console.log('Isso aqui será exibido antes de qualquer promise.');
