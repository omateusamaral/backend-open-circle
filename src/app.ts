

import 'reflect-metadata';
import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import './database/connect';
import userRoutes from './routes/usersRoutes/routes';


class App {
  app: express.Application;
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(helmet());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  routes() {
    this.app.use('/users', userRoutes);
  }
}
export default new App().app;