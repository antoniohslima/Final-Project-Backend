module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn(
      'managers',
      'is_blocked',
      {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
    );
  },
  async down(queryInterface) {
    await queryInterface.removeColumn(
      'managers',
      'is_blocked',
    );
  },
};
