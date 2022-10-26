import Jwt from 'jsonwebtoken';
import Manager from '../models/Manager';

class TokenService {
  async store(data) {
    try {
      const { email, password } = data;

      const manager = await Manager.findOne({ where: { email } });

      if (!manager) {
        throw new Error('Manager does not exists');
      }

      if (!(await manager.isPasswordValid(password))) {
        throw new Error('Invalid password!');
      }

      const { id } = manager;

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
