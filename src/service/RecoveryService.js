import crypto from 'crypto';
import moment from 'moment';
import { Op } from 'sequelize';
import bcryptjs from 'bcryptjs';
import sendEmailService from './SendMailService';
import Manager from '../models/Manager';

class RecoveryService {
  async recovery(data) {
    const manager = await Manager.findOne({
      where: {
        email: data.email,
      },
      attributes: ['id', 'name', 'email'],
      raw: true,
    });

    if (!manager) {
      throw new Error('manager does not exist.');
    }

    const token = crypto.randomBytes(20).toString('hex');

    await Manager.update({
      password_reset_token: token,
      password_reset_expires: moment().add(1, 'hour').toISOString(),
    }, {
      where: {
        id: manager.id,
      },
    });

    await sendEmailService.sendEmail({
      context: {
        manager,
        token,
      },
      subject: 'Recuperação de senha',
      template: 'recover-password',
    }, manager.email);

    return true;
  }

  async validateToken(token) {
    const manager = await Manager.findOne({
      where: {
        password_reset_token: token,
        password_reset_expires: {
          [Op.gt]: moment(),
        },
      },
      attributes: ['name', 'email'],
      raw: true,
    });

    if (!manager) {
      throw new Error('There is no token.');
    }

    return manager;
  }

  async changePassword(data, token, ip) {
    const manager = await this.validateToken(token);

    const changes = {
      password_reset_token: null,
      password_reset_expires: null,
      is_blocked: false,
    };

    changes.password_hash = await bcryptjs.hash(data.password, 8);

    await Manager.update(changes, {
      where: {
        password_reset_token: token,
      },
    });

    const options = {
      context: {
        manager,
        date: moment().format('DD/MM/YYYY [às] HH:mm'),
        ip,
      },
      subject: 'Senha alterada',
      template: 'change-password',
    };

    await sendEmailService.sendEmail(options, manager.email);

    return true;
  }
}

export default new RecoveryService();
