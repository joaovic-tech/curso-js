const verdadeira = true;

// let tem escopo de bloco {... bloco}
// var tem escopo de função

let nome = 'João'; // criando
var nome2 = 'Victor'; // criando

if(verdadeira) {
  let nome = 'Tobe'; // criando
  var nome2 = 'Oct'; // Redeclarada
  console.log(nome, nome2);

  if (verdadeira) {
    let nome = 'Ronaldinho';
    var nome2 = 'Gaucho'; // Redeclarada
    console.log(nome, nome2);
  }
}

console.log(nome, nome2);


function falaOi() {
  if(verdadeira){
    let nome = 'Novo nome';
    var sobrenome = 'Alves'
    console.log(nome, sobrenome);
  }
}
falaOi();

sobrenome = 'Miranha';
console.log(sobrenome);
