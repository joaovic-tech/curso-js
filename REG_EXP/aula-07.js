const { cpfs2 } = require('./base');

// ^ -> Começa com
// $ -> Termina com

const cpfRegExp = /^(\d{3}\.){2}\d{3}\-\d{2}$/gm;
console.log(cpfs2);
console.log(cpfs2.match(cpfRegExp));
