import * as yup from 'yup';

const moment = require('moment');

const schema = {
  store: {
    body: yup.object().shape({
      network: yup.string().required(),
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
    params: yup.object().shape({
      cardId: yup.number().integer().required(),
      clientId: yup.number().integer().required(),
    }).noUnknown(),
  },

  index: {
    params: yup.object().shape({
      clientId: yup.number().required(),
    }).noUnknown(),
  },

  show: {
    params: yup.object().shape({
      cardId: yup.number().required(),
      clientId: yup.number().required(),
    }).noUnknown(),
  },

};

export default schema;
