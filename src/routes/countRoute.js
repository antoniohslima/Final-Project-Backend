import BaseRoute from './baseRoutes';
import ClientController from '../controllers/ClientController';
import LoginRequired from '../middlewares/LoginRequired';

class CountRoutes extends BaseRoute {
  setup() {
    this.router.get('/', LoginRequired, ClientController.count);

    return this.router;
  }
}

export default new CountRoutes();
