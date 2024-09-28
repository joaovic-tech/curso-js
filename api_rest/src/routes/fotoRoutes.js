import {
  Router,
} from 'express';
import FotoController from '../controllers/FotoController';

const router = Router();

router.post('/', FotoController.store);

export default router;
