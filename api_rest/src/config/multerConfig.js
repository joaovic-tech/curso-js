import multer from 'multer';
import { extname, resolve } from 'path';

const random = () => Math.floor(Math.random() * 20000);

export default {
  fileFilter: (req, file, cb) => {
    if (file.mimetype !== 'image/png' && file.mimetype !== 'image/jpeg' && file.mimetype !== 'image/webp') {
      return cb(new multer.MulterError('Tipo do arquivo inválido'));
    }

    return cb(null, true);
  },
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, resolve(__dirname, '..', '..', 'uploads'));
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}_${random()}${extname(file.originalname)}`);
    },
  })
};
