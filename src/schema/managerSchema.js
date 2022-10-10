import * as yup from 'yup';

const schema = {
  store: {
    body: yup.object().shape({
      name: yup.string().max(50).required(),
      email: yup.string().email().required(),
      password: yup.string().min(6).required(),
    }).noUnknown(),
  },

  update: {
    body: yup.object().shape({
      name: yup.string().max(50),
      email: yup.string().email().required(),
    }).noUnknown(),
  },

};

export default schema;
