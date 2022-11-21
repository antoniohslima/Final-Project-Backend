import ClientCardService from '../service/ClientCardService';
import BaseController from './BaseController';

class ClientCardController extends BaseController {
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
      const options = {
        filter: {
          ...req.filter,
          manager_id: req.managerId,
        },
      };
      const cards = await ClientCardService.index(options);

      return this.handleSuccess(res, cards);
    } catch (err) {
      return this.handleError(res, err);
    }
  }

  async show(req, res) {
    try {
      const options = {
        filter: {
          ...req.filter,
          manager_id: req.managerId,
        },
      };
      const card = await ClientCardService.show(options);

      return this.handleSuccess(res, card);
    } catch (err) {
      return this.handleError(res, err);
    }
  }

  async store(req, res) {
    try {
      const options = {
        data: req.data,
        filter: {
          ...req.filter,
          manager_id: req.managerId,
        },
      };
      const newCard = await ClientCardService.store(options);

      return this.handleSuccess(res, newCard);
    } catch (err) {
      return this.handleError(res, err);
    }
  }

  async update(req, res) {
    try {
      const options = {
        data: req.data,
        filter: {
          ...req.filter,
          manager_id: req.managerId,
        },
      };

      const updatedCard = await ClientCardService.update(options);
      return this.handleSuccess(res, updatedCard);
    } catch (err) {
      return this.handleError(res, err);
    }
  }

  async delete(req, res) {
    try {
      const options = {
        filter: {
          ...req.filter,
          manager_id: req.managerId,
        },
      };

      const confirmation = await ClientCardService.delete(options);
      return this.handleSuccess(res, confirmation);
    } catch (err) {
      return this.handleError(res, err);
    }
  }
}

export default new ClientCardController();
