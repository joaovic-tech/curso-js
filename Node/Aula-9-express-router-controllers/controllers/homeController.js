exports.paginaInicial = (req, res) => {
  res.send(`
  <form action="/" method="POST">
  Nome do cliente: <input type="text" name="nome" />
  Sobrenome do cliente: <input type="text" name="sobrenome" />
  <button type="submit">Enviar</button>
  </form>
  `);
}

exports.trataPost = (req, res) => {
  res.send('Ei, sou sua nova rota de POST');
}