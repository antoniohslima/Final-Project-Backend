import CardNetworkService from '../service/CardNetworkService';
import BaseController from './BaseController';

class CardNetworkController extends BaseController {
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
      const newNetwork = await CardNetworkService.index();
      return this.handleSuccess(res, newNetwork);
    } catch (err) {
      return this.handleError(res, err);
    }
  }

  async show(req, res) {
    try {
      const option = {
        networkId: req.filter.networkId,
      };
      const network = await CardNetworkService.show(option);
      return this.handleSuccess(res, network);
    } catch (err) {
      return this.handleError(res, err);
    }
  }

  async store(req, res) {
    try {
      const newNetwork = await CardNetworkService.store(req.data);
      return this.handleSuccess(res, newNetwork);
    } catch (err) {
      return this.handleError(res, err);
    }
  }

  async update(req, res) {
    try {
      const options = {
        data: req.data,
        filter: req.filter,
      };
      const updatedNetworkInfo = await CardNetworkService.update(options);
      return this.handleSuccess(res, updatedNetworkInfo);
    } catch (err) {
      return this.handleError(res, err);
    }
  }

  async delete(req, res) {
    try {
      const networkToDelete = await CardNetworkService.delete(req.data);
      return this.handleSuccess(res, networkToDelete);
    } catch (err) {
      return this.handleError(res, err);
    }
  }
}

export default new CardNetworkController();
