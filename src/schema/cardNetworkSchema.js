import * as yup from 'yup';

const schema = {
  store: {
    body: yup.object().shape({
      name: yup.string().max(50).required(),
      starting_numbers: yup.string().max(4).required(),
    }).noUnknown(),
  },

  update: {
    body: yup.object().shape({
      name: yup.string().max(50).required(),
      starting_numbers: yup.string().max(4),

    }).noUnknown(),

    params: yup.object().shape({
      id: yup.number().required(),
    }).noUnknown(),
  },

  delete: {
    body: yup.object().shape({
      id: yup.number().required(),
    }).noUnknown(),
  },

};

export default schema;
