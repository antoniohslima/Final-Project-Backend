import CardService from '../service/CardService';
import BaseController from './BaseController';

class CardController extends BaseController {
  constructor() {
    super();

    this.show = this.show.bind(this);
    this.store = this.store.bind(this);
    this.delete = this.delete.bind(this);
    // this.update = this.update.bind(this);
  }

  async show(req, res) {
    try {
      const card = await CardService.show(req.filter);
      return this.handleSuccess(res, card);
    } catch (err) {
      return this.handleError(res, err);
    }
  }

  async store(req, res) {
    try {
      const newCard = await CardService.store(req.data);
      return this.handleSuccess(res, newCard);
    } catch (err) {
      return this.handleError(res, err);
    }
  }

  async delete(req, res) {
    try {
      const confirmation = await CardService.delete(req.data);
      return this.handleSuccess(res, confirmation);
    } catch (err) {
      return this.handleError(res, err);
    }
  }

  // async update(req, res) {
  //   const updatedCard = await CardService.update(req);

  //   return res.json(updatedCard);
  // }
}

export default new CardController();
