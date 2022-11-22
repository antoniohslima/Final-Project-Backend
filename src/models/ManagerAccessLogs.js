import { Model, DataTypes } from 'sequelize';

export default class ManagerAccessLogs extends Model {
  static init(sequelize) {
    super.init(
      {
        status: {
          type: DataTypes.STRING,
          defaultValue: '',
        },
      },
      {
        sequelize,
      },
    );
  }

  static associate(models) {
    this.belongsTo(models.Manager, { foreignKey: 'manager_id' });
  }
}
