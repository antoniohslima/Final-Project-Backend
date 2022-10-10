import * as yup from 'yup';

const schema = {
  store: {
    body: yup.object().shape({
      name: yup.string().max(50).required(),
      email: yup.string().email().required(),
      age: yup.number().positive().integer().min(18)
        .required(),
      net_worth: yup.number().required(),
    }).noUnknown(),
  },

  update: {
    body: yup.object().shape({
      name: yup.string().max(50),
      email: yup.string().email().required(),
      net_worth: yup.number(),
      age: yup.number().positive().integer().min(18),
    }).noUnknown(),

    params: yup.object().shape({
      clientId: yup.number().required(),
    }).noUnknown(),
  },

  delete: {
    body: yup.object().shape({
      id: yup.number().required(),
      email: yup.string().email().required(),
      name: yup.string().max(50),
    }).noUnknown(),
  },

};

export default schema;
