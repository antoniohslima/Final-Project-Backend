import Manager from '../models/Manager';

class ManagerService {
  async show({ email, password }) {
    try {
      const manager = await Manager.findOne({
        where: {
          email,
        },
        attributes: ['name', 'email', 'password_hash'],
      });

      if (!(await manager.isPasswordValid(password))) {
        throw new Error();
      }

      return manager;
    } catch (err) {
      throw new Error(err);
    }
  }

  async index() {
    try {
      return Manager.findAll({
        attributes: ['id', 'name', 'email'],
        raw: true,
      });
    } catch (err) {
      throw new Error(err);
    }
  }

  async store(data) {
    try {
      return Manager.create(data);
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
