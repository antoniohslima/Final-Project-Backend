import BaseRoute from './baseRoutes';
import tokenController from '../controllers/TokenController';
import TokenSchema from '../schema/tokenSchema';

class TokenRoutes extends BaseRoute {
  setup() {
    this.router.post('/', this.SchemaValidator.Validate(TokenSchema.store), tokenController.store);

    return this.router;
  }
}

export default new TokenRoutes();
