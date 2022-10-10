import jwt from 'jsonwebtoken';
import Manager from '../models/Manager';

export default async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json('Login required');
  }

  const [, token] = authorization.split(' ');

  try {
    const data = jwt.verify(token, process.env.TOKEN_SECRET);
    const { id, email } = data;

    const manager = await Manager.findOne({
      where: {
        id,
        email,
      },
    });

    if (!manager) {
      return res.status(401).json('Login required');
    }

    req.managerId = id;
    req.managerEmail = email;
    return next();
  } catch (e) {
    return res.status(401).json('Login required');
  }
};
