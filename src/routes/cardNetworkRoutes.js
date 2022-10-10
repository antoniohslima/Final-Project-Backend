import BaseRoute from './baseRoutes';
import CardNetworkController from '../controllers/CardNetworkController';
import cardNetworkSchema from '../schema/cardNetworkSchema';

class CardNetworkRoutes extends BaseRoute {
  setup() {
    this.router.post('/', this.SchemaValidator.Validate(cardNetworkSchema.store), CardNetworkController.store);
    this.router.put('/:id', this.SchemaValidator.Validate(cardNetworkSchema.update), CardNetworkController.update);
    this.router.delete('/', this.SchemaValidator.Validate(cardNetworkSchema.delete), CardNetworkController.delete);

    return this.router;
  }
}

export default new CardNetworkRoutes();
