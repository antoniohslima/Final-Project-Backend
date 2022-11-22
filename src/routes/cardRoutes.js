import BaseRoute from './baseRoutes';
import CardController from '../controllers/CardController';
import cardSchema from '../schema/cardSchema';

class CardRoutes extends BaseRoute {
  setup() {
    this.router.get('/:cardId', this.SchemaValidator.Validate(cardSchema.show), CardController.show);
    this.router.post('/', this.SchemaValidator.Validate(cardSchema.store), CardController.store);
    this.router.delete('/', this.SchemaValidator.Validate(cardSchema.delete), CardController.delete);

    // router.put('/', Validate(cardSchema.update), CardController.update);
    return this.router;
  }
}

export default new CardRoutes();
