function leftZero(num){
  return num >= 10 ? num : `0${num}`;
}

const titleDate = document.getElementById('title-date');
const date = new Date();
const week = date.getDay();
const day = date.getDate();
const month = date.getMonth() + 1;
const year = date.getFullYear();
const hours = leftZero(date.getHours());
const minutes = leftZero(date.getMinutes()); 

const textWeek = getWeek(week);
const textMonth = getMonth(month);

titleDate.innerHTML = `${textWeek}, ${day} de ${textMonth} de ${year} ${hours}:${minutes}`;

function getWeek(week) {
  let textWeek;
  switch (week) {
    case 0: return textWeek = 'domingo';
    case 1: return textWeek = 'segunda-feira';
    case 2: return textWeek = 'terça-feira';
    case 3: return textWeek = 'quarta-feira';
    case 4: return textWeek = 'quinta-feira';
    case 5: return textWeek = 'sexta-feira';
    case 6: return textWeek = 'sábado';
    default: textWeek = '';
  }
}

function getMonth(month) {
  let textMonth;
  switch (month) {
    case 1: return textMonth = 'Janeiro';
    case 2: return textMonth = 'Fevereiro';
    case 3: return textMonth = 'Março';
    case 4: return textMonth = 'Abril';
    case 5: return textMonth = 'Maio';
    case 6: return textMonth = 'Junho';
    case 7: return textMonth = 'Julho';
    case 8: return textMonth = 'Agosto';
    case 9: return textMonth = 'Setembro';
    case 10: return textMonth = 'Outubro';
    case 11: return textMonth = 'Novembro';
    case 12: return textMonth = 'Dezembro';
    default: textMonth = '';
  }
}
