module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      'card_networks',
      {
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true,
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
    await queryInterface.dropTable('card_networks');
  },
};
