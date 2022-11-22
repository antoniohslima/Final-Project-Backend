import ClientService from '../service/ClientService';
import BaseController from './BaseController';

class ClientController extends BaseController {
  constructor() {
    super();

    this.index = this.index.bind(this);
    this.show = this.show.bind(this);
    this.store = this.store.bind(this);
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
  }

  async index(req, res) {
    try {
      const clients = await ClientService.index(req.managerId);

      this.handleSuccess(res, clients);
    } catch (err) {
      this.handleError(res, err);
    }
  }

  async show(req, res) {
    try {
      const options = {
        filter: req.filter.id,
        managerId: req.managerId,
      };

      const client = await ClientService.findClient(options.filter, options.managerId);

      this.handleSuccess(res, client);
    } catch (err) {
      this.handleError(res, err);
    }
  }

  async store(req, res) {
    try {
      const options = {
        data: {
          ...req.data,
          manager_id: req.managerId,
        },
      };
      const newClient = await ClientService.store(options);

      this.handleSuccess(res, newClient);
    } catch (err) {
      this.handleError(res, err);
    }
  }

  async update(req, res) {
    try {
      const options = {
        data: {
          ...req.data,
          manager_id: req.managerId,
        },
        filter: req.filter,
      };
      const updatedClient = await ClientService.update(options);
      return this.handleSuccess(res, updatedClient);
    } catch (err) {
      return this.handleError(res, err);
    }
  }

  async delete(req, res) {
    try {
      const options = {
        filter: { ...req.filter },
        manager_id: req.managerId,
      };

      const confirmation = await ClientService.delete(options);
      return this.handleSuccess(res, confirmation);
    } catch (err) {
      return this.handleError(res, err);
    }
  }
}

export default new ClientController();
