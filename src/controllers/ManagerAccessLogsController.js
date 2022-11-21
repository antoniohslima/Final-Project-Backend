import BaseController from './BaseController';
import ManagerAccessLogsService from '../service/ManagerAccessLogsService';

class ManagerAccessLogsController extends BaseController {
  constructor() {
    super();

    this.checkAccessVerification = this.checkAccessVerification.bind(this);
  }

  async checkAccessVerification(req, res) {
    try {
      const filter = {
        manager_id: req.managerId,
      };

      const accessLogs = await ManagerAccessLogsService.checkAccessVerification(filter);

      return this.handleSuccess(res, accessLogs);
    } catch (err) {
      return this.handleError(res, err);
    }
  }
}

export default new ManagerAccessLogsController();
