import BaseRoute from './baseRoutes';
import ManagerController from '../controllers/ManagerController';
import managerSchema from '../schema/managerSchema';
import LoginRequired from '../middlewares/LoginRequired';

class ManagerRoutes extends BaseRoute {
  setup() {
    this.router.post('/', this.SchemaValidator.Validate(managerSchema.store), ManagerController.store);
    this.router.put('/', LoginRequired, this.SchemaValidator.Validate(managerSchema.update), ManagerController.update);
    this.router.delete('/', LoginRequired, ManagerController.delete);
    this.router.get('/list', ManagerController.index);
    this.router.post('/login', this.SchemaValidator.Validate(managerSchema.show), ManagerController.show);

    return this.router;
  }
}

export default new ManagerRoutes();
