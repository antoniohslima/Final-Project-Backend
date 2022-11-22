import moment from 'moment';
import Jwt from 'jsonwebtoken';
import Manager from '../models/Manager';
import ManagerAccessLogs from '../models/ManagerAccessLogs';
import ManagerAccessLogsService from './ManagerAccessLogsService';
import SendMailService from './SendMailService';

class TokenService {
  async store(data) {
    try {
      const { email, password } = data;

      const manager = await Manager.findOne({ where: { email } });

      if (!manager) {
        throw new Error('Manager does not exists');
      }

      const { id } = manager;

      if (!(await manager.isPasswordValid(password))) {
        const allowBlockUser = await ManagerAccessLogsService.checkAccessVerification({
          manager_id: id,
        });

        if (!allowBlockUser) {
          await ManagerAccessLogs.create({
            manager_id: id,
            status: 'FAIL',
          });

          throw new Error('Invalid password.');
        }

        await Manager.update({
          is_blocked: true,
        }, {
          where: {
            id,
          },
        });

        const options = {
          context: {
            manager,
            date: moment().format('DD/MM/YYYY [às] HH:mm'),
          },
          subject: 'Usuário Bloqueado',
          template: 'is-blocked',
        };

        await SendMailService.sendEmail(options, manager.email);

        throw new Error('Usuário bloqueado entre em contato com o suporte.');
      }

      await ManagerAccessLogs.create({
        manager_id: id,
        status: 'SUCCESS',
      });

      const token = Jwt.sign({ id, email }, process.env.TOKEN_SECRET, {
        expiresIn: process.env.TOKEN_EXPIRATION,
      });

      return token;
    } catch (err) {
      throw new Error(err);
    }
  }
}

export default new TokenService();
