import ManagerAccessLogs from '../models/ManagerAccessLogs';

class ManagerAccessLogsService {
  async checkAccessVerification(filter) {
    try {
      const accessLogs = await ManagerAccessLogs.findAll({
        where: filter,
        raw: true,
        attributes: ['status'],
        order: [['id', 'DESC']],
        limit: 3,
      });

      return accessLogs.length === 3 && accessLogs.every((log) => log.status === 'FAIL');
    } catch (err) {
      throw new Error(err);
    }
  }
}

export default new ManagerAccessLogsService();
