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

  // login: {
  //   body: yup.object().shape({
  //     email: yup.string().email().required(),
  //     password: yup.string().max(50).required(),
  //   }).noUnknown(),
  // },

  // show: {
  //   params: yup.object().shape({
  //     id: yup.number().required(),
  //   }).noUnknown(),
  // },

};

export default schema;
