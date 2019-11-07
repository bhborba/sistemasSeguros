import express from 'express';
import 'express-async-errors';

import routes from './routes';

class App {
  constructor() {
    this.server = express();
  }
}

export default new App().server;
