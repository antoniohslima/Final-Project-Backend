import BaseRoute from './baseRoutes';
import CardController from '../controllers/CardController';
import cardSchema from '../schema/cardSchema';

class CardRoutes extends BaseRoute {
  setup() {
    this.router.post('/', this.SchemaValidator.Validate(cardSchema.store), CardController.store);
    // router.put('/', Validate(cardSchema.update), CardController.update);
    this.router.delete('/', this.SchemaValidator.Validate(cardSchema.delete), CardController.delete);

    return this.router;
  }
}

export default new CardRoutes();
