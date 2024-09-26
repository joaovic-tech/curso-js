import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Maria',
      sobrenome: 'Luiza',
      email: 'contato@maria.com',
      idade: 225,
      peso: 90,
      altura: 1.75,
    });

    res.json(novoAluno);
  }
}

export default new HomeController();
