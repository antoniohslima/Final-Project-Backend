class SchemaValidator {
  Validate(schema) {
    return async (req, res, next) => {
      try {
        req.data = Object.keys(req.body).length
          ? await schema.body.validate(req.body) : null;

        req.filter = Object.keys(req.params).length
          ? await schema.params.validate(req.params) : null;

        req.filter = req.query && Object.keys(req?.query).length ? {
          ...req.filter, ...(await schema.query.validate(req.query)),
        } : req.filter;

        return next();
      } catch (err) {
        return res.status(500).json({ error: err.message });
      }
    };
  }
}

export default SchemaValidator;
