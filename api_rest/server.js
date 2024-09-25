import app from './app';

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log();
  console.log();
  console.log(`Executando na porta ${PORT}`);
  console.log(`CTRL + Clique em http://localhost:${PORT}`);
});
