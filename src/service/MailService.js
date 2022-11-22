import path from 'path';
import nodemailer from 'nodemailer';
import hbs from 'nodemailer-express-handlebars';

const transport = nodemailer.createTransport({
  host: 'smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: '9ac2833e269685',
    pass: 'ea6b069b5b6547',
  },
});

const options = {
  viewEngine: {
    extName: '.hbs',
    layoutsDir: path.resolve('./src/email'),
    defaultLayout: 'index',
  },
  viewPath: path.resolve('./src/email'),
  extName: '.hbs',
};

transport.use('compile', hbs(options));

export default transport;
