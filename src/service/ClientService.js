import Client from '../models/Client';

class ClientService {
  async findClient(id, manager_id) {
    const client = await Client.findOne({
      where: {
        id,
        manager_id,
      },
      attributes: ['net_worth'],
    });

    if (!client) {
      throw new Error('Client does not exists');
    }

    return client;
  }

  async store({ data }) {
    try {
      const client = await Client.create(data);
      return client;
    } catch (err) {
      return err.message;
    }
  }

  async update({ data, filter }) {
    try {
      await this.findClient(filter.clientId, data.manager_id);

      return Client.update(data, {
        where: {
          id: filter.clientId,
        },
      });
    } catch (err) {
      return err.message;
    }
  }

  async delete({ data, manager_id }) {
    try {
      // const client = await Client.findOne({
      //   where: { email: req.data.email },
      // });

      // if (!client) {
      //   throw new Error('Client does not exists');
      // }

      // if (req.managerId !== client.manager_id) {
      //   throw new Error('Only the client`s manager can delete it');
      // }

      await this.findClient(data.id, manager_id);

      await Client.destroy({
        where: {
          id: data.id,
        },
      });
      return 'Client deleted successfully';
    } catch (err) {
      return err.message;
    }
  }
}

export default new ClientService();
