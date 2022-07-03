// const tresHoras = 60 * 60 * 3 * 1000; // Marco 0 - 01/01/1970 Timestamp unix ou época unix
// const umDia = 60 * 60 * 24 * 1000;
// const data = new Date(0 + tresHoras + umDia);
// console.log(data.toString());
// const data = new Date(2022, 3); // ano, mês, dia, hora, min, seg, ms
const data = new Date('2022-06-03 21:58.100');
console.log('Dia', data.getDate());
console.log('Mês', data.getMonth() + 1); // Mês começa do zero
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Min', data.getMinutes());
console.log('Seg', data.getSeconds());
console.log('ms', data.getMilliseconds());
console.log('Dia semana', data.getDay()); // 0 - Domingo, 6 - Sábado
console.log(data.toString());
console.log(Date.now()); // Retorna os milissegundos desde do marco 0 até agora 