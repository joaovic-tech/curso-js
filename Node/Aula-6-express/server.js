const express = require('express');
const app = express();

//         Criar   Ler   Atualizar  Apagar
// CRUD -> CREATE, READ, UPDATE,    DELETE
//         Post    GET   PUT        DELETE

// html://meusite.com/ <- GET -> Entregue a página /
// html://meusite.com/sobre <- GET -> Entregue a página /sobre 
// html://meusite.com/contato <- GET -> Entregue a página /contato

app.get('/', (req, res) => {
  res.send(`
  <form action="/" method="POST">
  Nome: <input type="text" name="nome" />
  <button type="submit">Enviar</button>
  </form>
  `);
});

app.post('/', (req, res) => {
  res.send('Recebi o formulário', req)
});

app.get('/contato', (req, res) => {
  res.send('Obrigado por entrar em contato com a gente.');
});

// criando uma porta na porta 3000
app.listen(3000, () => {
  console.log('Acessar http://localhost:3000');
  console.log('Servidor executando na porta 3000');
});

// Nesse app.listen podemos ou não colocar uma arrow function para ver no terminal o log
