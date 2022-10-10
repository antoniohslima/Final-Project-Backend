import ClientCard from '../models/ClientCard';
import CardNetwork from '../models/CardNetwork';
import Card from '../models/Card';
import getClientCredit from '../../Utils/getClientCredit';
import ClientService from './ClientService';

const moment = require('moment');

class ClientCardService {
  async store({ data, filter }) {
    const transaction = await Card.sequelize.transaction();

    try {
      const client = await ClientService.findClient(filter.clientId, filter.manager_id);

      const { cardLevel, limit } = getClientCredit(client);

      const cardNetwork = await CardNetwork.findOne({
        where: { name: data.network },
      });

      let card = await Card.findOne({
        where: {
          network_id: cardNetwork.id,
          type: cardLevel,
        },
        attributes: ['id'],
      });

      if (!card) {
        card = await Card.create(
          {
            type: cardLevel,
            network_id: cardNetwork.id,
          },
          {
            transaction,
          },
        );
      }

      const { starting_numbers } = cardNetwork;
      const cardNumber = Math.random().toString(9).substring(2, 14);

      data.expiration_date = moment(data.expiration_date).format('YYYY-MM-DD');
      data.number = starting_numbers + cardNumber;
      data.limit = limit;
      data.card_id = card.id;
      data.client_id = filter.clientId;

      const clientCard = await ClientCard.create(
        data,
        {
          transaction,
        },
      );

      await transaction.commit();

      return clientCard;
    } catch (err) {
      await transaction.rollback();
      throw new Error(err);
    }
  }

  async update({ data, filter }) {
    try {
      await ClientService.findClient(data.clientId, filter.manager_id);

      return ClientCard.update(data, {
        where: {
          id: filter.cardId,
        },
      });
    } catch (err) {
      throw new Error(err);
    }
  }

  async delete({ data, filter }) {
    try {
      await ClientService.findClient(data.clientId, filter.manager_id);

      await ClientCard.destroy({
        where: {
          id: filter.cardId,
        },
      });
      return 'Card deleted successfully';
    } catch (err) {
      throw new Error(err);
    }
  }
}

export default new ClientCardService();
