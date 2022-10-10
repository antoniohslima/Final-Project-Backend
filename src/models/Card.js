import { Model, DataTypes } from 'sequelize';

export default class Card extends Model {
  static init(sequelize) {
    super.init(
      {
        type: DataTypes.STRING,
        network_id: DataTypes.INTEGER,
      },
      {
        sequelize,
        paranoid: true,
      },
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.CardNetwork, { foreignKey: 'network_id' });
  }
}
