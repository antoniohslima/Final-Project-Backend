module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn(
      'card_networks',
      'starting_numbers',
      {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
    );
  },

  async down(queryInterface) {
    await queryInterface.removeColumn('card_networks', 'starting_numbers');
  },
};
