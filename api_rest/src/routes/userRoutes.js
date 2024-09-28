import {
  Router,
} from 'express';
import UserController from '../controllers/UserController';
import loginRequired from '../middlewares/loginRequired';

const router = Router();

// Essas rotas em uma aplicação real são uma falha de segurança enorme pois
// * Uma lista todos os usuários da base de dados
// * A outra lista o usuário pelo seu id -> Recomendado se aplicação necessita dessa função
// router.get('/', loginRequired, UserController.index); // ---------- Lista usuários
// router.get('/:id', UserController.show); // ---------- Lista usuário

router.post('/', UserController.store); // Cria user
router.put('/', loginRequired, UserController.update); // Edita user
router.delete('/', loginRequired, UserController.delete); // Deleta user

export default router;
