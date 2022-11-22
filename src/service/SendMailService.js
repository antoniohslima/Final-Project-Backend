import MailService from './MailService.js';

const sendEmail = (options, to) => new Promise((resolve, reject) => MailService.sendMail({
  ...options,
  from: 'carteiratop <naoresponda@carteiratop.com>',
  to: [to],
}, (error) => {
  if (error) {
    reject(error);
    return;
  }

  resolve();
}));

export default {
  sendEmail,
};
