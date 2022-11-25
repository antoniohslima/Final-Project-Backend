import BaseRoute from './baseRoutes';
import XlsController from '../controllers/xlsController';
import LoginRequired from '../middlewares/LoginRequired';

class XlsRoutes extends BaseRoute {
  setup() {
    this.router.get('/', LoginRequired, XlsController.index);

    return this.router;
  }
}

export default new XlsRoutes();
