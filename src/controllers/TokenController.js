import TokenService from '../service/TokenService';
import BaseController from './BaseController';

class TokenController extends BaseController {
  constructor() {
    super();

    this.store = this.store.bind(this);
  }

  async store(req, res) {
    try {
      const token = await TokenService.store(req.data);
      return this.handleSuccess(res, token);
    } catch (err) {
      return this.handleError(res, err);
    }
  }
}

export default new TokenController();
