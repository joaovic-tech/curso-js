function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function stop(msg, time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof msg !== 'string') {
        reject(new TypeError(msg));
        return;
      };

      resolve(msg.toUpperCase() + ' - Passei na promise');
      return;
    }, time);
  });
}

function baixaPagina() {
  const emCache = false;

  if (emCache) {
    return Promise.resolve('Página em cache.'); // troca pra reject
  } else {
    return stop('Baixei a página', 3000);
  }
}

baixaPagina()
  .then(dadosPagina => {
    console.log(dadosPagina);
  })
  .catch(e => console.log(e));
