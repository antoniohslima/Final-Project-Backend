import BaseRoute from './baseRoutes';
import ClientCardController from '../controllers/ClientCardController';
import clientCardSchema from '../schema/clientCardSchema';
import LoginRequired from '../middlewares/LoginRequired';

class ClientCardRoutes extends BaseRoute {
  setup() {
    this.router.post('/:clientId', LoginRequired, this.SchemaValidator.Validate(clientCardSchema.store), ClientCardController.store);
    this.router.put('/:cardId', LoginRequired, this.SchemaValidator.Validate(clientCardSchema.update), ClientCardController.update);
    this.router.delete('/:cardId', LoginRequired, this.SchemaValidator.Validate(clientCardSchema.delete), ClientCardController.delete);

    return this.router;
  }
}

export default new ClientCardRoutes();
