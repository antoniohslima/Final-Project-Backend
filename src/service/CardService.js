import Card from '../models/Card';

class CardService {
  async store(data) {
    try {
      const card = await Card.create(data);
      return card;
    } catch (err) {
      throw new Error(err);
    }
  }

  // async update(req) {}

  async delete(data) {
    try {
      const { network_id, type } = data;

      const card = await Card.findOne({
        where: { network_id, type },
      });

      if (!card) {
        throw new Error('Card does not exists');
      }

      await card.destroy();
      return 'Card deleted successfully';
    } catch (err) {
      throw new Error(err);
    }
  }
}

export default new CardService();
