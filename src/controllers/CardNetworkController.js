import CardNetworkService from '../service/CardNetworkService';
import BaseController from './BaseController';

class CardNetworkController extends BaseController {
  constructor() {
    super();

    this.store = this.store.bind(this);
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
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
