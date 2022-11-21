import CardNetwork from '../models/CardNetwork';

class CardNetworkService {
  async index() {
    try {
      return CardNetwork.findAll({
        attributes: ['name', 'id'],
      });
    } catch (err) {
      throw new Error(err);
    }
  }

  async show({ networkId }) {
    try {
      return CardNetwork.findOne({
        where: {
          id: networkId,
        },
        attributes: ['name'],
      });
    } catch (err) {
      throw new Error(err);
    }
  }

  async store(data) {
    try {
      return CardNetwork.create(data);
    } catch (err) {
      throw new Error(err);
    }
  }

  async update({ data, filter }) {
    try {
      return CardNetwork.update(data, {
        where: {
          id: filter.id,
        },
      });
    } catch (err) {
      throw new Error(err);
    }
  }

  async delete(data) {
    try {
      // const { id } = data;
      // const network = await CardNetwork.findByPk(id);

      // if (!network) {
      //   throw new Error('Network does not exists');
      // }

      await CardNetwork.destroy({
        where: {
          id: data.id,
        },
      });
      return 'Network deleted';
    } catch (err) {
      throw new Error(err);
    }
  }
}

export default new CardNetworkService();
