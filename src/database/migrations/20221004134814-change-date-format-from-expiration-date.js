module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.changeColumn(
      'clients_cards',
      'expiration_date',
      {
        type: Sequelize.DATEONLY,
        allowNull: false,
      },
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.changeColumn(
      'clients_cards',
      'expiration_date',
      {
        type: Sequelize.DATE,
        allowNull: false,
      },
    );
  },
};
