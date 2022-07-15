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

// Promise.race => Resolve só a primeira 
const arrayRace = [
  stop('Promise 1', rand(1, 3)),
  stop('Promise 2', rand(1, 3)),
  stop('Promise 3', rand(1, 3)),
  stop(50, rand(1, 3)),
];

Promise.race(arrayRace)
  .then(valor => {
    console.log(valor);
  })
  .catch(error => {
    console.log(error);
  })