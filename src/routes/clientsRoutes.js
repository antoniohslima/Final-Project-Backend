import BaseRoute from './baseRoutes';
import ClientController from '../controllers/ClientController';
import clientSchema from '../schema/clientSchema';
import LoginRequired from '../middlewares/LoginRequired';

class ClientRoutes extends BaseRoute {
  setup() {
    this.router.post('/', LoginRequired, this.SchemaValidator.Validate(clientSchema.store), ClientController.store);
    this.router.put('/:clientId', LoginRequired, this.SchemaValidator.Validate(clientSchema.update), ClientController.update);
    this.router.delete('/:id', LoginRequired, this.SchemaValidator.Validate(clientSchema.delete), ClientController.delete);
    this.router.get('/:id', LoginRequired, this.SchemaValidator.Validate(clientSchema.show), ClientController.show);
    this.router.get('/', LoginRequired, ClientController.index);

    return this.router;
  }
}

export default new ClientRoutes();
