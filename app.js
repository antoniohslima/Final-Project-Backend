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
import ManagerAccessLogsRoutes from './src/routes/ManagerAccessLogsRoutes';
import RecoveryRoutes from './src/routes/recoveryRoutes';
import pdfRoutes from './src/routes/pdfRoutes';
import XlsRoutes from './src/routes/xlsRoutes';

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
    this.app.use(express.static(`${__dirname}/uploads`));
  }

  routes() {
    this.app.use('/managers/', managerRoutes.setup());
    this.app.use('/login/', tokenRoutes.setup());
    this.app.use('/clients/', clientsRoutes.setup());
    this.app.use('/networks/', cardNetworkRoutes.setup());
    this.app.use('/cards/', cardRoutes.setup());
    this.app.use('/clientsCards/', clientCardRoutes.setup());
    this.app.use('/accessLogs/', ManagerAccessLogsRoutes.setup());
    this.app.use('/', RecoveryRoutes.setup());
    this.app.use('/pdf', pdfRoutes.setup());
    this.app.use('/xls', XlsRoutes.setup());
  }
}

export default new App().app;
