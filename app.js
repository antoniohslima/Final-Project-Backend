import './src/database';

import dotenv from 'dotenv';

dotenv.config();

import express from 'express';

import cors from 'cors';
import managerRoutes from './src/routes/managerRoutes';
import tokenRoutes from './src/routes/tokenRoutes';
import clientsRoutes from './src/routes/clientsRoutes';
import cardNetworkRoutes from './src/routes/cardNetworkRoutes';
import cardRoutes from './src/routes/cardRoutes';
import clientCardRoutes from './src/routes/clientCardsRoutes';

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(cors());
  }

  routes() {
    this.app.use('/managers/', managerRoutes.setup());
    this.app.use('/tokens/', tokenRoutes.setup());
    this.app.use('/clients/', clientsRoutes.setup());
    this.app.use('/networks/', cardNetworkRoutes.setup());
    this.app.use('/cards/', cardRoutes.setup());
    this.app.use('/clientsCards/', clientCardRoutes.setup());
  }
}

export default new App().app;
