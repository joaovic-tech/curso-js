let { texto, arquivos } = require("./base");

// Quantificadores
// * (zero ou n vezes)
// + (um ou n vezes)
// ? (zero ou uma vez)
// . (qualquer caractere)
// \ (Caractere de escape)

// const regExp1 = /Jooooooooo*ão/gi;
// console.log(texto.match(regExp1));

const regExp2 = /\.(jpg|jpeg|png|txt)/gi;

for (const arquivo of arquivos) {
  const valido = arquivo.match(regExp2);

  if (!valido) {
    console.log(`existe um arquivo inválido: ${arquivo}`);
    continue;
  };

  console.log(arquivo, valido);
}
