// Função construtora -> Retorna objetos - Toda função construtora tem um prototype
// Função fabrica -> Retorna objetos
// Construtora -> Pessoa (new)

function Pessoa(nome, sobrenome) {
  // Atributos ou métodos privados
  const ID = 123456;

  // com essas variáveis internas podemos criar métodos
  // para validar um cpf dentro desse escopo com exemplo
  const metodoInterno = () => {

  };

  // Atributos ou métodos públicos 
  // com o this pode ser usado para retorna
  // variáveis fora dessa function
  this.nome = nome;
  this.sobrenome = sobrenome;

  this.metodo = () => {
    console.log(`Método do ${this.nome}`)
  };
}

const p1 = new Pessoa('João', 'Alves');
const p2 = new Pessoa('Maria', 'Oliveira');
p2.metodo();
