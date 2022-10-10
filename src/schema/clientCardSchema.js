import * as yup from 'yup';

const moment = require('moment');

const schema = {
  store: {
    body: yup.object().shape({
      network: yup.string().required(),
      cvv: yup.string().min(3).max(3).required(),
      printed_name: yup.string().min(3).max(24).required(),
      expiration_date: yup.date()
        .min(moment())
        .max(moment().add(10, 'years'))
        .required(),
    }).noUnknown(),

    params: yup.object().shape({
      clientId: yup.number().required(),
    }).noUnknown(),
  },

  update: {
    body: yup.object().shape({
      printed_name: yup.string().min(3).max(24),
      limit: yup.number().integer(),
      clientId: yup.number().integer(),
    }).noUnknown(),

    params: yup.object().shape({
      cardId: yup.number().required(),
    }).noUnknown(),
  },
  //
  delete: {
    body: yup.object().shape({
      clientId: yup.number().integer().required(),
    }).noUnknown(),

    params: yup.object().shape({
      cardId: yup.number().required(),
    }).noUnknown(),
  },

};

export default schema;
