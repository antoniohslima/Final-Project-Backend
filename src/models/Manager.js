import bcryptjs from 'bcryptjs';
import { Model, DataTypes } from 'sequelize';

export default class Manager extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.VIRTUAL,
        password_hash: DataTypes.STRING,

      },
      {
        sequelize,
        paranoid: true,
      },
    );

    this.addHook('beforeSave', async (manager) => {
      if (manager.password) {
        manager.password_hash = await bcryptjs.hash(manager.password, 8);
      }
    });

    return this;
  }

  isPasswordValid(password) {
    return bcryptjs.compare(password, this.password_hash);
  }

  static associate(models) {
    this.hasMany(models.Client, { foreignKey: 'manager_id' });
  }
}
