import CardNetwork from '../models/CardNetwork';

class CardNetworkService {
  async store(data) {
    try {
      return await CardNetwork.create(data);
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
