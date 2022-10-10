import { Model, DataTypes } from 'sequelize';

export default class Client extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        age: DataTypes.INTEGER,
        net_worth: DataTypes.FLOAT,

      },
      {
        sequelize,
        paranoid: true,
      },
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Manager, { foreignKey: 'manager_id' });
    this.hasMany(models.ClientCard, { foreignKey: 'client_id' });
  }
}
