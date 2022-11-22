import BaseController from './BaseController';
import recoveryService from '../service/RecoveryService';

class RecoveryController extends BaseController {
  constructor() {
    super();

    this.recovery = this.recovery.bind(this);
    this.validateToken = this.validateToken.bind(this);
    this.changePassword = this.changePassword.bind(this);
  }

  async recovery(req, res) {
    try {
      const user = await recoveryService.recovery(req.data);

      return this.handleSuccess(res, user);
    } catch (err) {
      console.log(err);
      return this.handleError(res, err);
    }
  }

  async validateToken(req, res) {
    try {
      const validate = await recoveryService.validateToken(req.filter.token);

      return this.handleSuccess(res, validate);
    } catch (err) {
      return this.handleError(res, err);
    }
  }

  async changePassword(req, res) {
    try {
      const changes = { password: req.data.password };
      const { token } = req.params;
      const ip = req.socket.remoteAddress;

      await recoveryService.changePassword(changes, token, ip);

      return this.handleSuccess(res, recoveryService);
    } catch (err) {
      return this.handleError(res, err);
    }
  }
}

export default new RecoveryController();
