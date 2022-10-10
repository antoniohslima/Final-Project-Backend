import { Model, DataTypes } from 'sequelize';

export default class CardNetwork extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        starting_numbers: DataTypes.STRING,
      },
      {
        sequelize,
        paranoid: true,
      },
    );
    return this;
  }

  static associate(models) {
    this.hasMany(models.Card, { foreignKey: 'network_id' });
  }
}
