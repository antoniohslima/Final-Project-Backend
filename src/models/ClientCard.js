import { Model, DataTypes } from 'sequelize';

export default class ClientCard extends Model {
  static init(sequelize) {
    super.init(
      {
        number: DataTypes.STRING,
        cvv: DataTypes.STRING,
        expiration_date: DataTypes.STRING,
        printed_name: DataTypes.STRING,
        limit: DataTypes.INTEGER,
      },
      {
        sequelize,
        paranoid: true,
        tableName: 'clients_cards',
        freezeTableName: true,
      },
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Client, { foreignKey: 'client_id' });
    this.belongsTo(models.Card, { foreignKey: 'card_id' });
  }
}
