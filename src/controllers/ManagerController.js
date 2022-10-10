import ManagerService from '../service/ManagerService';
import BaseController from './BaseController';

class ManagerController extends BaseController {
  constructor() {
    super();

    this.store = this.store.bind(this);
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
  }

  async store(req, res) {
    try {
      const newManager = await ManagerService.store(req.data);
      return this.handleSuccess(res, newManager);
    } catch (err) {
      return this.handleError(res, err);
    }
  }

  async update(req, res) {
    try {
      const data = {
        data: req.data,
        manager_id: req.managerId,
        email: req.managerEmail,
      };
      const updatedManager = await ManagerService.update(data);
      return this.handleSuccess(res, updatedManager);
    } catch (err) {
      return this.handleError(res, err);
    }
  }

  async delete(req, res) {
    try {
      const data = {
        manager_id: req.managerId,
        email: req.managerEmail,
      };
      const managerToDelete = await ManagerService.delete(data);
      return this.handleSuccess(res, managerToDelete);
    } catch (err) {
      return this.handleError(res, err);
    }
  }
}

export default new ManagerController();
