// IIFE -> Immediately invoked function expression (Uma expressão de função invocada imediatamente)
(function(idade, peso, altura) {
  const sobrenome = 'Alves'
  function criaNome(nome) {
    return `${nome} ${sobrenome}`;
  }

  function falaNome() {
    console.log(criaNome('João'));
  }

  falaNome();
  console.log(idade, peso, altura)
})(18, 72, 1.70);
