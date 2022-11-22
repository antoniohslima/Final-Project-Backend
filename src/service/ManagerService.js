import Manager from '../models/Manager';

class ManagerService {
  // async login({ email, password }) {
  //   try {
  //     const manager = await Manager.findOne({
  //       where: {
  //         email,
  //       },
  //       attributes: ['name', 'email', 'password_hash'],
  //     });

  //     const canLog = await manager.isPasswordValid(password);

  //     if (!canLog) {
  //       throw new Error('Validation Error');
  //     }

  //     return canLog;
  //   } catch (err) {
  //     throw new Error(err);
  //   }
  // }

  show({ id }) {
    try {
      return Manager.findOne({
        where: {
          id,
        },
      });
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
