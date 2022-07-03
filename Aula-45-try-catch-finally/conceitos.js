try {
  // é executada quado não há erros
  console.log('Abrir um arquivo - Ocorreu bem'); 
  console.log(a, 'Manipulei o arquivo - Gerou um erro');
  console.log('Fechei o arquivo - Não foi executado pois gerou um erro na linha anterior');
} catch (err) {
  // é executada quando há erros
  console.log('Tratando o erro');
} finally {
  // é executado SEMPRE
  console.log('Eu sempre sou executado');
}