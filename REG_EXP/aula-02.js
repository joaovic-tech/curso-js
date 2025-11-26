let { texto } = require("./base");
const regExp1 = /João|Maria/gi;

console.log(texto.match(regExp1));
texto = texto.replace(/(João|Maria)/gi, (input) => `<b>${input.toUpperCase()}</b>`);
texto = texto.replace(/"J/g, '<b>"J');
texto = texto.replace(/"/g, '"</b>');
console.log(texto);
