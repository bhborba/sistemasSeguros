import { Router } from 'express';

import HashController from './app/controllers/HashController';

const routes = new Router();

routes.get('/hash', HashController.index);

export default routes;
