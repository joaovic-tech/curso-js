const nome = 'João';
const sobrenome = 'Victor';

const falaNome = () => `${nome} ${sobrenome}`;

// Exporta maneira 1

// module.exports.nome = nome;
// module.exports.sobrenome = sobrenome;
// module.exports.falaNome = falaNome;

// Exporta maneira 2
// exports.NOME = nome;
// exports.sobrenome = sobrenome;
// exports.falaNome = falaNome;

// NOTA:
// A palavra que vem depois do export não necessariamente
// precisa ser do mesmo nome da variável exportada 

// Exporta maneira 3 (Não é muito usado)
this.qualquerCoisa = 'O que eu quiser exportar';

// Criando uma classe Pessoa
class Pessoa {
  constructor(nome, idade, veiculo) {
    this.nome = nome;
    this.idade = idade;
    this.veiculo = veiculo;
  }
}

// Exportar maneira 4
// exports.Pessoa = Pessoa;

// Exporta maneira 5 (exportando tudo)
module.exports = { nome, sobrenome, falaNome, Pessoa }
