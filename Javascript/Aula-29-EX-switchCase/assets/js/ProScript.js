function leftZero(num){
  return num >= 10 ? num : `0${num}`;
}

const titleDate = document.getElementById('title-date');
const date = new Date();
const numWeek = date.getDay();
const day = date.getDate();
const numMonth = date.getMonth();
const year = date.getFullYear();
const hours = leftZero(date.getHours());
const minutes = leftZero(date.getMinutes()); 

const textWeek = getWeek(numWeek);
const textMonth = getMonth(numMonth);

titleDate.innerHTML = `${textWeek}, ${day} de ${textMonth} de ${year} ${hours}:${minutes}`;

function getWeek(numWeek) {
  const week = ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado'];
  return week[numWeek];
}

function getMonth(numMonth) {
  const month = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
  return month[numMonth];
}
