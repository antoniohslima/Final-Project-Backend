import { Router } from 'express';
import SchemaValidator from '../schema/validate';

class BaseRoute {
  constructor() {
    this.router = Router();
    this.SchemaValidator = new SchemaValidator();
  }
}

export default BaseRoute;
