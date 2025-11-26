// g -> global (encontra todas as ocorrências)
// i -> insensitive (não diferencia maiúsculas de minúsculas)
// () -> agrupamento
// | -> ou

const { texto } = require("./base");

const regExp1 = /(maria|joão|ana)(, hoje sua esposa)/i;
const found = regExp1.exec(texto);

if (found) {
  console.log(found[0]);
  console.log(found[1]);
  console.log(found[2]);
} else {
  console.log("Nenhum encontrado!");
}
