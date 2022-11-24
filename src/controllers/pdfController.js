import pdfService from '../service/pdfService';
import BaseController from './BaseController';

class PdfController extends BaseController {
  constructor() {
    super();

    this.index = this.index.bind(this);
  }

  async index(req, res) {
    try {
      const pdf = await pdfService.index(req.managerId);
      res.send(pdf);
    } catch (err) {
      console.log(err);
      return this.handleError(res, err);
    }
  }
}

export default new PdfController();
