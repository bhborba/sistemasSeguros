import { Router } from 'express';

import HashController from './app/controllers/HashController';

const routes = new Router();

routes.post('/hash', HashController.store);

export default routes;
