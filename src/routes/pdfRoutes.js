import BaseRoute from './baseRoutes';
import pdfController from '../controllers/pdfController';
import LoginRequired from '../middlewares/LoginRequired';

class PdfRoutes extends BaseRoute {
  setup() {
    this.router.get('/', LoginRequired, pdfController.index);

    return this.router;
  }
}

export default new PdfRoutes();
