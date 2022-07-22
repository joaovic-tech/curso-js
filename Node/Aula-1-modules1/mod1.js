const nome = 'João';
const sobrenome = 'Victor';

const falaNome = () => {
  return `${nome} ${sobrenome}`;
};

// Exporta maneira 2

// module.exports.nome = nome;
// module.exports.sobrenome = sobrenome;
// module.exports.falaNome = falaNome;

// Exporta maneira 2
exports.nome = nome;
exports.sobrenome = sobrenome;
exports.falaNome = falaNome;

// NOTA:
// A palavra que vem depois do export não necessariamente
// precisa ser do mesmo nome da variável exportada 

// Exporta maneira 3 (Não é muito usado)
this.qualquerCoisa = 'O que eu quiser exportar';

// Exporta maneira 4
class Pessoa {
  constructor(nome) {
    this.nome = nome;
  }
}

module.exports = { nome, sobrenome, Pessoa }
