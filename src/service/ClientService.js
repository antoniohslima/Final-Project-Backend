import Client from '../models/Client';
import getClientCredit from '../../Utils/getClientCredit';

class ClientService {
  async findClient(id, manager_id) {
    const client = await Client.findOne({
      where: {
        id,
        manager_id,
      },
      attributes: ['name', 'email', 'age', 'net_worth'],
    });

    if (!client) {
      throw new Error('Client does not exists');
    }

    const { cardLevel } = getClientCredit(client);
    client.dataValues.CardType = cardLevel;

    return client;
  }

  async count(managerId) {
    try {
      const nClients = Client.count({
        where: {
          manager_id: managerId,
        },
      });

      return nClients;
    } catch (err) {
      throw new Error(err);
    }
  }

  async index(managerId, meta) {
    try {
      const limit = 7;
      const offset = (meta.page - 1) * limit;

      const promises = [];

      promises.push(
        Client.findAll({
          where: {
            manager_id: managerId,
          },
          attributes: ['id', 'name', 'email', 'age', 'net_worth'],
          order: [['name', 'ASC']],
          offset,
          limit,
        }),
      );

      if (meta.page === '1') {
        promises.push(
          Client.count({
            where: {
              manager_id: managerId,
            },
          }),
        );
      }

      const [clients, totalItems] = await Promise.all(promises);

      return {
        clients,
        totalItems,
      };
    } catch (err) {
      // console.log(err);
      throw new Error(err);
    }
  }

  async store({ data }) {
    try {
      const client = await Client.create(data);
      return client;
    } catch (err) {
      throw new Error(err);
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
      throw new Error(err);
    }
  }

  async delete({ filter, manager_id }) {
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

      await this.findClient(filter.id, manager_id);

      await Client.destroy({
        where: {
          id: filter.id,
        },
      });
      return 'Client deleted successfully';
    } catch (err) {
      throw new Error(err);
    }
  }
}

export default new ClientService();
