import {
  Router,
} from 'express';
import AlunoController from '../controllers/AlunoController';

const router = Router();

router.get('/', AlunoController.index);

export default router;
