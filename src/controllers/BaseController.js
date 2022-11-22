export default class BaseController {
  handleSuccess(res, data) {
    return res.json(data);
  }

  handleError(res, error) {
    return res.status(401).json({ error: error.message });
  }
}
