module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      'cards',
      {
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        network_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'card_networks',
            key: 'id',
          },
        },
        type: {
          type: Sequelize.STRING,
          allowNull: false,
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
    await queryInterface.dropTable('cards');
  },
};
