import Manager from '../models/Manager';

class ManagerService {
  async store(data) {
    try {
      return await Manager.create(data);
    } catch (err) {
      throw new Error(err);
    }
  }

  async update({ data, manager_id, email }) {
    try {
      return Manager.update(data, {
        where: {
          id: manager_id,
          email,
        },
      });
    } catch (err) {
      throw new Error(err);
    }
  }

  async delete({ manager_id, email }) {
    try {
      await Manager.destroy({
        where: {
          id: manager_id,
          email,
        },
      });

      return 'The manager was deleted';
    } catch (err) {
      throw new Error(err);
    }
  }
}

export default new ManagerService();
