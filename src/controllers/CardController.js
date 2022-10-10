import CardService from '../service/CardService';
import BaseController from './BaseController';

class CardController extends BaseController {
  constructor() {
    super();

    this.store = this.store.bind(this);
    // this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
  }

  async store(req, res) {
    try {
      const newCard = await CardService.store(req.data);
      return this.handleSuccess(res, newCard);
    } catch (err) {
      return this.handleError(res, err);
    }
  }

  // async update(req, res) {
  //   const updatedCard = await CardService.update(req);

  //   return res.json(updatedCard);
  // }

  async delete(req, res) {
    try {
      const confirmation = await CardService.delete(req.data);
      return this.handleSuccess(res, confirmation);
    } catch (err) {
      return this.handleError(res, err);
    }
  }
}

export default new CardController();
