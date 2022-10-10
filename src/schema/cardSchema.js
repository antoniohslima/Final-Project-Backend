import * as yup from 'yup';

const schema = {
  store: {
    body: yup.object().shape({
      network_id: yup.number().required().integer(),
      type: yup.string().max(50).required(),
    }).noUnknown(),
  },

  // update: {
  //   body: yup.object().shape({
  //     name: yup.string().max(50),
  //     email: yup.string().email().required(),
  //     net_worth: yup.number(),
  //     age: yup.number().positive().integer().min(18),
  //   }).noUnknown(),
  // },

  delete: {
    body: yup.object().shape({
      network_id: yup.number().required().integer(),
      type: yup.string().max(50).required(),
    }).noUnknown(),
  },

};

export default schema;
