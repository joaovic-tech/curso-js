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

// Promise.all => resolve todas as promise

const array = [
  'Primeiro valor', // Promise que já esta resolvida pois não tem oque resolver
  stop('Promise 1', 3000), // Resolvendo Promise
  stop('Promise 2', 500), // Resolvendo Promise
  stop('Promise 3', 1000), // Resolvendo Promise
  // stop(1000, 1000), // Essa Promise irar ocorrer um erro
  'Outro valor' // Promise que já esta resolvida pois não tem oque resolver
];

Promise.all(array)
  .then(valor => {
    console.log(valor);
  })
  .catch(error => {
    console.log(error);
  })
