import ManagerService from '../service/ManagerService';
import BaseController from './BaseController';

class ManagerController extends BaseController {
  constructor() {
    super();

    this.show = this.show.bind(this);
    this.index = this.index.bind(this);
    // this.login = this.login.bind(this);
    this.store = this.store.bind(this);
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
  }

  // async login(req, res) {
  //   try {
  //     const manager = await ManagerService.login(req.data);
  //     return this.handleSuccess(res, manager);
  //   } catch (err) {
  //     return this.handleError(res, err);
  //   }
  // }

  async show(req, res) {
    try {
      const showManager = await ManagerService.show({
        id: req.managerId,
      });

      console.log(showManager);

      return this.handleSuccess(res, showManager);
    } catch (err) {
      return this.handleError(res, err);
    }
  }

  async index(req, res) {
    try {
      const managers = await ManagerService.index();
      return this.handleSuccess(res, managers);
    } catch (err) {
      return this.handleError(res, err);
    }
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
