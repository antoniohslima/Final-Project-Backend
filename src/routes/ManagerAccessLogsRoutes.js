import BaseRoute from './baseRoutes';
import ManagerAccessLogsController from '../controllers/ManagerAccessLogsController';
import LoginRequired from '../middlewares/LoginRequired';

class ManagerAccessLogsRoutes extends BaseRoute {
  setup() {
    this.router.post('/', LoginRequired, ManagerAccessLogsController.checkAccessVerification);
    return this.router;
  }
}

export default new ManagerAccessLogsRoutes();
