module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      'clients_cards',
      {
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        client_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'clients',
            key: 'id',
          },
        },
        card_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'cards',
            key: 'id',
          },
        },
        printed_name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        number: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true,
        },
        cvv: {
          type: Sequelize.INTEGER,
          allowNull: false,
          unique: true,
        },
        expiration_date: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        limit: {
          type: Sequelize.INTEGER,
          allowNull: true,
        },
        created_at: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        updated_at: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        deleted_at: {
          type: Sequelize.DATE,
          allowNull: true,
          defaulValue: null,
        },
      },
    );
  },

  async down(queryInterface) {
    await queryInterface.dropTable('clients_cards');
  },
};
