const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send(`
  <form action="/" method="POST">
  Nome do cliente: <input type="text" name="nome" />
  Sobrenome do cliente: <input type="text" name="sobrenome" />
  <button type="submit">Enviar</button>
  </form>
  `);
});

// esse : serve para receber um parâmetro 
// idUsuario é o nome do parâmetro
// o ? é para caso não exista para metro e ficar na url /testes
app.get('/testes/:idUsuarios?/:parametro?', (req, res) => {
  console.log(req.params);
  console.log(req.query);
  res.send(`Olá <b>${req.query.nome}</b>`);
});

app.post('/', (req, res) => {
  console.log(req.body);
  res.send(`Olá <b>${req.body.nome} ${req.body.sobrenome}</b>`);
});

app.get('/contato', (req, res) => {
  res.send('Obrigado por entrar em contato com a gente.');
});

app.listen(3000, () => {
  console.log('Acessar http://localhost:3000');
  console.log('Servidor executando na porta 3000');
});
