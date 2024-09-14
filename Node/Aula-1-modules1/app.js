const mod1 = require("./mod1"); // importa tudo
const falaNome1 = require("./mod1").falaNome; // importa uma coisa
const nome1 = mod1.nome; // importa uma coisa também

// Desestruturando (importa via desestruturação)
const { nome, sobrenome, falaNome, Pessoa } = require("./mod1");

const p1 = new Pessoa("João", "20", "Honda/Civic 2024");

console.log("----------------------------------------");
console.log("             Minha classe pessoa:");
console.log("----------------------------------------");
console.log(p1);
console.log("----------------------------------------");
console.log();
console.log();

// podemos importar sem colocar seu caminho, por exemplo:
const axios = require("axios");

console.log("----------------------------------------");
console.log("             Api via Axios:");
console.log("----------------------------------------");
axios
  .get("https://randomuser.me/api/")
  .then((response) => console.log(response))
  .catch((e) => console.log(e));
console.log("----------------------------------------");

