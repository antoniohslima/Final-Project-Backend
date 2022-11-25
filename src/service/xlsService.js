import Client from '../models/Client';
import Manager from '../models/Manager';

class XlsService {
  async index(managerId) {
    try {
      return Manager.findAll({
        attributes: ['name', 'email'],
        include: [{
          model: Client,
          where: {
            manager_id: managerId,
          },
          attributes: ['name', 'email', 'age', 'net_worth'],
          as: 'client',
          raw: true,
        }],
        where: {
          id: managerId,
        },
        raw: true,
        nest: true,
      });
    } catch (err) {
      throw new Error(err);
    }
  }
}

export default new XlsService();
