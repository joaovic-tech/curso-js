const mod1 = require('./mod1'); // importa tudo
const falaNome1 = require('./mod1').falaNome; // importa uma coisa
const nome1 = mod1.nome; // importa uma coisa também

// Desestruturando
const { nome, sobrenome, falaNome, Pessoa } = require('./mod1');

// podemos importar sem colocar seu caminho, por exemplo:
const axios = require('axios');

const p1 = new Pessoa('João');

console.log(mod1);
