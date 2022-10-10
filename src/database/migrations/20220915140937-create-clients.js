module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      'clients',
      {
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        manager_id: {
          type: Sequelize.INTEGER,
          allowNull: true,
          references: {
            model: 'managers',
            key: 'id',
          },
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        email: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true,
        },
        age: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        net_worth: {
          type: Sequelize.FLOAT,
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
    await queryInterface.dropTable('clients');
  },
};
