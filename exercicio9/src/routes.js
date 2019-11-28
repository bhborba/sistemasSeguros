import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';


import HashController from './app/controllers/HashController';
import ValidaHashController from './app/controllers/ValidaHashController';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/hash/:tipo', upload.single('file'), HashController.index);
routes.post('/valida', upload.single('file'), ValidaHashController.index);

export default routes;
