const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');

const BodyStyles = getComputedStyle(document.body);
const bgColorBody = BodyStyles.backgroundColor;

for(let p of ps) {
  p.style.backgroundColor = bgColorBody;
  p.style.color = 'white'
  p.style.padding = '10px';
  p.style.borderRadius = '8px';
  p.style.boxShadow = `0 0 8px ${bgColorBody}`
}