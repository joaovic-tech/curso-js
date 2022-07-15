function rand(min = 0, max = 3) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function stop(msg, time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof msg !== 'string') {
        reject('CAI NO ERRO.');
        return;
      };

      resolve(msg.toUpperCase() + ' - Passei na promise');
      return;
    }, time);
  });
}

// stop('Fase 1', rand())
//   .then(valor => {
//     console.log(valor);
//     return stop('Fase 2', rand());
//   })
//   .then(fase => {
//     console.log(fase);
//     return stop('Fase 3', rand());
//   })
//   .then(fase => {
//     console.log(fase);
//     return fase
//   })
//   .then(fase => {
//     console.log('fase terminada na:', fase);
//   })
//   .catch(err => console.log(err));

async function executa() {
  try {
    // Se tirarmos o await essa promise ficara pendente
    const fase1 = stop('Fase 1', 1000);
    console.log(fase1);

    setTimeout(() => {
      console.log('Essa promise estava pendente', fase1);
    }, 1100);

    const fase2 = await stop(45, rand());
    console.log(fase2);

    const fase3 = await stop('Fase 3', rand());
    console.log(fase3);

    console.log('fase terminada na:', fase3);
  } catch (error) {
    console.log(error);
  }
}

// pending -> pendente
// fulfilled -> resolvida
// reject -> rejeitada

executa()
